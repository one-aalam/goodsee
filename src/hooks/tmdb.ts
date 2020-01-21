
import { stringify } from 'query-string'
import { TMDB_API_KEY as API_KEY } from '../secrets';
import { useFetch, IFetchResponse } from './useFetch';

export const BASE_URI = 'https://api.themoviedb.org/3';
export const POSTER_PATH = 'https://image.tmdb.org/t/p/w185'; //  w92, w154, w185, w342, w500, w780, original
export const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'; // w300, w780, w1280, original
// logo_sizes: w45, w92, w154, w185, w300, w500, original
// profile_sizes: w45, w185, h632, original
// still_sizes: w92, w185, w300, original

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
    genre_ids: number[];
    original_language: string;
    original_title: string;
    adult: boolean;
    video: boolean;
}

export interface ITMDBMovieGenre {
    id: number;
    name: string;
}

export interface ITMDBMovieLanguage {
    iso_639_1: string;
    name: string;
}

export interface ITMDBMovieProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface ITMDBMovieProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ITMDBMovieDetail extends ITMDBMovie {
    imdb_id: string;
    runtime: number;
    status: string;
    tagline: string;
    homepage: string;
    belongs_to_collection: number;
    budget: number;
    revenue: number;
    genres: ITMDBMovieGenre[];
    production_companies: ITMDBMovieProductionCompany[];
    production_countries: ITMDBMovieProductionCountry[];
    spoken_languages: ITMDBMovieLanguage[];
}
export interface ITMDBDiscovery {
    page: number;
    total_pages: number;
    total_results: number;
    results: ITMDBMovie[]
}

type queryParams = {
    primary_release_year?: number | string | string[];
    with_genres?: number | string | string[];
    with_people?: number | string | string[];
    with_cast?: number | string | string[];
    certification_country?: number | string | string[];
    certification?: string;
    page?: number | string | string[];
    sort_by?: string;
    api_key?: string;
}

const defaultQueryParams: queryParams = {
    primary_release_year: 2020
}

const requiredQueryParams: queryParams = {
    api_key: API_KEY
}

// https://www.themoviedb.org/documentation/api
export const useMovieDetail = (id?: string): IFetchResponse => useFetch(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`, {});
// https://developers.themoviedb.org/3/discover/movie-discover
export const useMoviePopular = (params?: any): IFetchResponse => useFetch(`${BASE_URI}/discover/movie?primary_release_year=2020&api_key=${API_KEY}`, {});
export const useMovieDiscover = (params: queryParams = defaultQueryParams): IFetchResponse => useFetch(`${BASE_URI}/discover/movie?${stringify({ ...requiredQueryParams, ...params })}`, {});

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
