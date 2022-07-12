import React, {FC} from 'react';

import scss from './PopularMovieSlider.module.scss'
import {IMG_URL} from "../../configs";
import {PopularMovie} from "../../redux/movie/types/popularMovie";

const PopularMovieSlider: FC<PopularMovie> = ({
    poster_path, title,release_date
}) => {

    return (
        <div className={scss.slider_card}>
            <img src={`${IMG_URL}${poster_path}`} alt={title}/>
            <div className={scss.slider_card_title}>
                <h3>{title}</h3>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

export {PopularMovieSlider};