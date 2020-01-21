import React from 'react';
import { MovieCardDiscoverList } from '../components/MovieCardDiscoverList';
import { movieCardData } from './MovieCard.stories';

export default {
    component: MovieCardDiscoverList,
    title: 'MovieCardDiscoverList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
    excludeStories: /.*Data$/,
};


export const defaultMovieCardDiscoverListData = [
    { ...movieCardData, id: '1' },
    { ...movieCardData, id: '2' },
    { ...movieCardData, id: '3' },
    { ...movieCardData, id: '4' },
    { ...movieCardData, id: '5' },
    { ...movieCardData, id: '6' },
];

export const favoritesData = [ 1, 6, 5 ];
export const watchedData = [ 2, 3, 5 ];

export const Default = () => <MovieCardDiscoverList movies={defaultMovieCardDiscoverListData} />;

export const withFavoritesAndWatched = () => <MovieCardDiscoverList movies={defaultMovieCardDiscoverListData} favorites={favoritesData} watched={watchedData} />;
