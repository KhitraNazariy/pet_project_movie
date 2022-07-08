import React, {FC} from 'react';

import scss from './HomePage.module.scss';
import {Poster} from "../../components";

const HomePage: FC = () => {
    return (
        <div className={scss.content}>
            <Poster/>
        </div>
    );
};

export {HomePage};