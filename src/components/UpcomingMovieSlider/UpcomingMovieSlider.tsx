import React, {FC} from 'react';

import scss from './UpcomingMovieSlider.module.scss';
import {UpcomingMovie} from "../../redux/movie/types/upcomingMovies";
import {IMG_URL} from "../../configs";

const UpcomingMovieSlider: FC<UpcomingMovie> = ({title, backdrop_path}) => {


    return (
        <div className={scss.upcoming_card}>
            <div className={scss.upcoming_card_backdrop}>
                <img src={`${IMG_URL}${backdrop_path}`} alt={title}/>
            </div>
            <div className={scss.upcoming_card_description}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export {UpcomingMovieSlider};