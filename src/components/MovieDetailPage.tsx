import React from 'react';
import { RouteComponentProps } from "@reach/router";
import styled from 'styled-components';
import { useMovieDetail, BACKDROP_PATH, POSTER_PATH } from '../hooks/tmdb';
import { StyledMovieCard } from './MovieCard';

interface RouterProps {
    id: string;
}


export const MovieDetailPage: React.FC<RouteComponentProps<RouterProps>> = ({ id }) => {
    const { error, loading, response } = useMovieDetail(id);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
    return <p>Error:</p>;
    }

    return (
        <MovieDetailWrapper backdrop={`${BACKDROP_PATH}${response.backdrop_path}`}>
            <MovieInfoWrapper>
                <MoviePoster>
                    <img alt={response.title} src={`${POSTER_PATH}${response.poster_path}`} />
                </MoviePoster>
                <div>
                    <h1>{response.title}</h1>
                    <h3>{response.release_date}</h3>
                    <p>{response.overview}</p>
                </div>
            </MovieInfoWrapper>
        </MovieDetailWrapper>
    )
}

type MovieDetailWrapperProps = {
    backdrop: string;
}

const MovieDetailWrapper = styled.div<MovieDetailWrapperProps>`
    position: relative;
    padding-top: 50vh;
    background: url(${ props => props.backdrop }) no-repeat;
    background-size: cover;
`
const MovieInfoWrapper = styled.div`
    background-color: #e2e8f0;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
`;

const MoviePoster = styled(StyledMovieCard)`
    position: relative;
    top: -5rem;
`
