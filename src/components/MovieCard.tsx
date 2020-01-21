import React from 'react';
import { Link } from '@reach/router'
import styled from 'styled-components';

import { ITMDBMovie, POSTER_PATH } from '../hooks/tmdb';

type MovieCardProps = {
    movie: ITMDBMovie;
    isFavorite?: boolean;
    isWatched?: boolean;
}

export const MovieCard :React.FC<MovieCardProps> = ({ movie, isFavorite, isWatched }) => {
    return (
        <StyledMovieCard>
            <Link to={`movie/${movie.id}`}>
                <img alt={movie.title} src={`${POSTER_PATH}${movie.poster_path}`} />
           </Link>
            {
                isFavorite && <span>favorite</span>
            }
            {
                isWatched && <span>watched</span>
            }
        </StyledMovieCard>
    )
}

export const StyledMovieCard = styled.div`
    img {
        border-radius: .25rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        &:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
    }
`
