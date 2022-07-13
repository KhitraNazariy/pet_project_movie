import React, {FC} from 'react';
import {PopularTv} from "../../redux/tv/types/popularTv";
import scss from './PopularTvSlider.module.scss'
import {IMG_URL} from "../../configs";

const PopularTvSlider: FC<PopularTv> = ({poster_path, name, first_air_date}) => {
    return (
        <div className={scss.slider_card}>
            <img src={`${IMG_URL}${poster_path}`} alt={name}/>
            <div className={scss.slider_card_title}>
                <h3>{name}</h3>
                <p>{first_air_date}</p>
            </div>
        </div>
    );
};

export {PopularTvSlider};