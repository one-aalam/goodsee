import React from 'react'
import styled from 'styled-components';
import { ITMDBMovie, POSTER_PATH } from '../hooks/tmdb';

type MovieCardProps = {
    movie: ITMDBMovie;
}

export const MovieCard :React.FC<MovieCardProps> = ({ movie, children }) => {
    return (
        <StyledMovieCard>
           <img alt={movie.title} src={`${POSTER_PATH}${movie.poster_path}`} />
        </StyledMovieCard>
    )
}

const StyledMovieCard = styled.div`
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`
