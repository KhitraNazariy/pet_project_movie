import React, {FC} from 'react';

import scss from './PopularMovieSlider.module.scss'
import {PopularMovie} from "../../redux/movie/types";

const PopularMovieSlider: FC<PopularMovie> = ({id}) => {

    return (
        <div className={scss.slider_card}>
            {id}
        </div>
    );
};

export {PopularMovieSlider};