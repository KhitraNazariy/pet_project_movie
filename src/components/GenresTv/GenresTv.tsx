import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './GenresTv.module.scss'
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchGenresTv} from "../../redux/filter/asyncActions";
import {GenreItem} from "../GenreItem/GenreItem";

const GenresTv = () => {

    const {genresTv} = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGenresTv())
    }, [])

    return (
        <div className={scss.genresTv}>
            {genresTv.genres?.map(genre => <GenreItem key={genre.id} {...genre}/>)}
        </div>
    );
};

export {GenresTv};