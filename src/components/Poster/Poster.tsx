import React, {FC} from 'react';

import scss from './Poster.module.scss';
import {Search} from "../Search/Search";

const Poster: FC = () => {
    return (
        <div className={scss.poster}>
            <div className={scss.poster__title}>
                <h2>Ласкаво просимо.</h2>
                <p>Мільйони фільмів, серіалів і людей. Досліджуйте зараз.</p>
                <Search/>
            </div>
        </div>
    );
};

export {Poster};