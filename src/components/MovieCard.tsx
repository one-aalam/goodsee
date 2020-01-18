import React from 'react'
import { ITMDBMovie, POSTER_PATH } from '../hooks/tmdb';

type MovieCardProps = {
    movie: ITMDBMovie;
}

export const MovieCard :React.FC<MovieCardProps> = ({ movie, children }) => {
    return (
        <div className="MovieCard">
           <img alt={movie.title} src={`${POSTER_PATH}${movie.poster_path}`} />
        </div>
    )
}