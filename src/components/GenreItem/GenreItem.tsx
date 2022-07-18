import React, {FC} from 'react';

import scss from './GenreItem.module.scss';
import {Genre} from "../../redux/filter/filterSlice";

const GenreItem: FC<Genre> = ({name}) => {
    return (
        <div className={scss.genre}>
            {name}
        </div>
    );
};

export {GenreItem};