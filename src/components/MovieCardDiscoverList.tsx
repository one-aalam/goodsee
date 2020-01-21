import React from 'react'
import styled from 'styled-components';
import { MovieCard } from './MovieCard';
import { ITMDBMovie } from '../hooks/tmdb';

type MovieCardProps = {
    movies: ITMDBMovie[];
    favorites: number[];
    watched: number[];
}

export const MovieCardDiscoverList :React.FC<MovieCardProps> = ({ movies, children }) => {
    return (
        <MovieGrid>
            { movies?.map((movie:any) => <MovieCard key={movie?.id} movie={movie} /> ) }
        </MovieGrid>
    );
}

const MovieGrid = styled.div`
    display: grid;
    padding: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-row-gap: 1.2rem;
    grid-column-gap: .8rem;
    grid-auto-flow: row;
`;
