import React from 'react';
import { RouteComponentProps, WindowLocation, navigate } from "@reach/router";
import { stringify } from 'query-string';
import { useQueryParams } from '../hooks/useQueryParams';
import { useMovieDiscover } from '../hooks/tmdb';
import { MovieCardDiscoverList } from './MovieCardDiscoverList';


export const MovieDiscoverPage: React.FC<RouteComponentProps> = ({ location }) => {
    const { year } = useQueryParams(location as WindowLocation);
    const { error, loading, response } = useMovieDiscover({ primary_release_year: year ? year : 2020 });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error:</p>;
    }

    if (!response?.results?.length) {
        return <p>No records found</p>;
    }

    return (
        <>
            <select onChange={ e => {
                navigate(`/discover?${stringify({ year: e.target.value })}`)
            }}>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
            </select>
            <MovieCardDiscoverList movies={response?.results} />
        </>
    )
}