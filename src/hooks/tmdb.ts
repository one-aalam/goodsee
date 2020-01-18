import { TMDB_API_KEY as API_KEY } from '../secrets';
import { useFetch, IFetchResponse } from './useFetch';

export const BASE_URI = 'https://api.themoviedb.org/3';
export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export interface ITMDBMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    vote_count: number;
    poster_path: string;
    backdrop_path: string;
}
// {"popularity":27.41,"vote_count":3999,"video":false,"poster_path":"/4oy4e0DP6LRwRszfx8NY8EYBj8V.jpg","id":49017,"adult":false,"backdrop_path":"/gy5ItoprIPOT7Z1c2YhNhart39l.jpg","original_language":"en","original_title":"Dracula Untold","genre_ids":[28,18,14,27,10752],"title":"Dracula Untold","vote_average":6.3,"overview":"Vlad Tepes is a great hero, but when he learns the Sultan is preparing for battle and needs to form an army of 1,000 boys, he vows to find a way to protect his family. Vlad turns to dark forces in order to get the power to destroy his enemies and agrees to go from hero to monster as he's turned into the mythological vampire, Dracula.","release_date":"2014-10-01"}

export interface ITMDBDiscovery {
    page: number;
    total_pages: number;
    total_results: number;
    results: ITMDBMovie[]
}

export const useMovieDetail = (id: number ): IFetchResponse => useFetch(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`, {});
export const useMoviePopular = (params?: any): IFetchResponse => useFetch(`${BASE_URI}/discover/movie?primary_release_date.gte=2019-09-15&api_key=${API_KEY}`, {});
// &primary_release_date.lte=2014-10-22
// What movies are in theatres?

// URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
// What are the most popular movies?

// URL: /discover/movie?sort_by=popularity.desc
// What are the highest rated movies rated R?

// URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc
// What are the most popular kids movies?

// URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
// What is are the best movies from 2010?

// URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc
// What are the best dramas that were released this year?

// URL: /discover/movie?with_genres=18&primary_release_year=2014
// What are the highest rated science fiction movies that Tom Cruise has been in?

// URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc
// What are the Will Ferrell's highest grossing comedies?

// URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc
// Have Brad Pitt and Edward Norton ever been in a movie together?

// URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc
// Has David Fincher ever worked with Rooney Mara?

// URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc
// What are the best drama's?

// URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10
// What are Liam Neeson's highest grossing rated 'R' movies?

// URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896



// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=ed46dba3fd2e9f35480c9fef5e7c12ca
