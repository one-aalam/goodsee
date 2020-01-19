import React from 'react';
import { RouteComponentProps } from "@reach/router"

import { MovieCardList } from './MovieCardList';


export const HomePage: React.FC<RouteComponentProps> = () => {
    return (
        <MovieCardList/>
    )
}