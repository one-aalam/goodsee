import React from 'react';
import { Link } from '@reach/router'
import styled from 'styled-components';
import { ReactComponent as HeartThinIcon } from '../assets/icons/heart-thin.svg';
import { ReactComponent as EyeIcon } from '../assets/icons/eye.svg';

import { ITMDBMovie, POSTER_PATH } from '../hooks/tmdb';

type MovieCardProps = {
    movie: ITMDBMovie;
    isFavorite?: boolean;
    isWatched?: boolean;
}

type StyledIconProps = {
    bg?: string;
}

export const MovieCard :React.FC<MovieCardProps> = ({ movie, isFavorite, isWatched }) => {
    return (
        <StyledMovieCard>
           <Link to={`movie/${movie.id}`}>
                <img alt={movie.title} src={`${POSTER_PATH}${movie.poster_path}`} />
           </Link>
            {
                isFavorite && <StyledIcon bg={'#F687B3'}><HeartThinIcon fill="#FFFFF0"/></StyledIcon>
            }
            {
                isWatched && <StyledIcon bg={'#68D391'}><EyeIcon fill="#FFFFF0"/></StyledIcon>
            }
        </StyledMovieCard>
    )
}

export const StyledMovieCard = styled.div`
    width: 185px;
    position: relative;
    img {
        border-radius: .25rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        &:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
    }
`
export const StyledIcon = styled.div<StyledIconProps>`
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    bottom: 10px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: { (props: StyledIconProps) => props.bg ? props.bg : '#68D391' };
`;
