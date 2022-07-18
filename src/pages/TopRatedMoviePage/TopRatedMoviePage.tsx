import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../redux/store";
import {fetchTopRatedMovies} from "../../redux/movie/asyncActions";
import {MovieCard, Sort} from "../../components";
import scss from './TopRatedMoviePage.module.scss'

const TopRatedMoviePage = () => {

    const {responseTopRatedMovie} = useSelector((state: RootState) => state.movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedMovies())
    }, [])

    return (
        <div className={scss.topRated}>
            <Sort/>
            <div className={scss.topRated__content}>
                {
                    responseTopRatedMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
                }
            </div>
        </div>
    );
};

export {TopRatedMoviePage};