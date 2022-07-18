import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './Genres.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchGenresMovie} from "../../redux/filter/asyncActions";
import {GenreItem} from "../GenreItem/GenreItem";

const Genres: FC = () => {

    const dispatch = useAppDispatch();
    const {genres} = useSelector((state: RootState) => state.filterSlice);

    useEffect(() => {
        dispatch(fetchGenresMovie())
    }, [])


    return (
        <div className={scss.genres}>
            {genres.genres?.map(genre => <GenreItem key={genre.id} {...genre}/>)}
        </div>
    );
};

export {Genres};