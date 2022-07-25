import React, {FC} from 'react';

import {IMG_URL} from "../../configs";
import {PopularTv} from "../../redux/tv/types/popularTv";
import scss from './TvCard.module.scss';

const TvCard: FC<PopularTv> = ({poster_path, name, first_air_date}) => {
    return (
        <div className={scss.card}>
            <img src={`${IMG_URL}${poster_path}`} alt={name}/>
            <div className={scss.card_title}>
                <h3>{name}</h3>
                <p>{first_air_date}</p>
            </div>
        </div>
    );
};

export {TvCard};