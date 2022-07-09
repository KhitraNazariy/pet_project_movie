import React, {FC} from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import scss from './PopularMovieSlider.module.scss'

const PopularMovieSlider: FC<any> = ({item}) => {

    return (
        <div className={scss.slider}>
            <div>{item}</div>
        </div>
    );
};

export {PopularMovieSlider};