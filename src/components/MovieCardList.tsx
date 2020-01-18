import React from 'react'
import { useMoviePopular  } from '../hooks/tmdb';
import { MovieCard } from './MovieCard';


export const MovieCardList = () => {
    const { error, loading, response } = useMoviePopular(333);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
    return <p>Error: {error}</p>;
    }

    return (
        <div>
            { response?.results?.map((movie:any) => <MovieCard key={movie?.id} movie={movie} /> ) }
        </div>
    );
}
