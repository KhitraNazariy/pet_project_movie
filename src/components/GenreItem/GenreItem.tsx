import React, {FC} from 'react';

import scss from './GenreItem.module.scss';
import {Genre, setGenre} from "../../redux/filter/filterSlice";
import {RootState, useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";

const GenreItem: FC<Genre> = ({name, id}) => {

    const dispatch = useAppDispatch();
    const {withGenres} = useSelector((state: RootState) => state.filterSlice);

    return (
        <div
            style={{
                background: name === withGenres.name ? '#000': '',
                color: name === withGenres.name ? '#FFF' : '',
                border: name === withGenres.name ? '2px solid #FFF' : ''
        }}
            onClick={() => dispatch(setGenre({id, name}))}
            className={scss.genre}>
            {name}
        </div>
    );
};

export {GenreItem};