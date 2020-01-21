import React, { useMemo } from 'react';
import { RouteComponentProps, WindowLocation, navigate } from "@reach/router";
import styled from 'styled-components';
import { stringify, parse } from 'query-string';
import { useQueryParams } from '../hooks/useQueryParams';
import { useMovieDiscover } from '../hooks/tmdb';
import { MovieCardDiscoverList } from './MovieCardDiscoverList';


export const MovieDiscoverPage: React.FC<RouteComponentProps> = ({ location }) => {
    const queryParams = useQueryParams(location as WindowLocation);
    const navigateByQueryParams = (param: any) => navigate(`/discover?${stringify({ ...queryParams, ...param })}`);
    const { year, page } = queryParams;
    const { error, loading, response } = useMovieDiscover({
        primary_release_year: year ? year : 2020,
        page: page ? page : 1
    });
    const [ yearStart, yearNow ] = [ 1980, 2020 ];
    const years = useMemo(() => [...Array(yearNow - yearStart)].map((_,i)=> yearStart + i), [yearNow, yearStart]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error:</p>;
    }

    if (!response?.results?.length) {
        return <p>No records found</p>;
    }

    const options = [];
    for (let i = 1; i <= response.total_pages; i++) {
        options.push(<option value={i}>{i}</option>);
    }

    return (
        <MovieDiscoverPageGrid>
            <div>
                <select onChange={ e => {
                    navigateByQueryParams({ year: e.target.value });
                }}>
                    {
                        years.map(year => <option value={year}>{year}</option>)
                    }
                </select>
                <select onChange={ e => {
                    navigateByQueryParams({ page: e.target.value });
                }}>
                    {options}
                </select>
            </div>
            <MovieCardDiscoverList movies={response?.results} />
        </MovieDiscoverPageGrid>
    )
}

const MovieDiscoverPageGrid = styled.div`
    display: grid;
    padding: 2rem;
    grid-template-columns: 300px 1fr;
`;