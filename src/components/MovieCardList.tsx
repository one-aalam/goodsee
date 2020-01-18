import React from 'react'
import styled from 'styled-components';
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
        <MovieGrid>
            { response?.results?.map((movie:any) => <MovieCard key={movie?.id} movie={movie} /> ) }
        </MovieGrid>
    );
}

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
    grid-row-gap: 1rem;
    grid-auto-flow: row;
`;
