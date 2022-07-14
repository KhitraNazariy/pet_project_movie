import React, {FC} from 'react';

import scss from './PopularMovieCard.module.scss';
import {PopularMovie} from "../../redux/movie/types/popularMovie";
import {IMG_URL} from "../../configs";

const MovieCard: FC<PopularMovie> = ({poster_path, title, release_date}) => {
    return (
        <div className={scss.card}>
            <img src={`${IMG_URL}${poster_path}`} alt={title}/>
            <div className={scss.card_title}>
                <h3>{title}</h3>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

export {MovieCard};