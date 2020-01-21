import React from 'react';
//import { action } from '@storybook/addon-actions';

import { MovieCard } from '../components/MovieCard';

export default {
    component: MovieCard,
    title: 'MovieCard',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const movieCardData =  {
      "popularity": 408.15,
      "vote_count": 130,
      "video": false,
      "poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      "id": 38700,
      "adult": false,
      "backdrop_path": "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
      "original_language": "en",
      "original_title": "Bad Boys for Life",
      "genre_ids": "[28, 80, 53]",
      "title": "Bad Boys for Life",
      "vote_average": 6.6,
      "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      "release_date": "2020-01-15"
}


export const Default = () => {
    return <MovieCard movie={movieCardData} />;
  };

export const Favorited = () => <MovieCard movie={{ ...movieCardData, isFavorite: true }} isFavorite={true} />;

export const Watched = () => <MovieCard movie={{ ...movieCardData, isFavorite: true }} isWatched={true} />;

export const FavoriteAndWatched = () => <MovieCard movie={{ ...movieCardData, isFavorite: true }} isFavorite={true} isWatched={true} />;
