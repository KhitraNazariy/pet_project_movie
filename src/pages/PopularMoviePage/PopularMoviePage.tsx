import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './PopularMoviePage.module.scss'
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularMovies} from "../../redux/movie/asyncActions";
import {Genres, MovieCard} from "../../components";
import {Sort} from "../../components";

const PopularMoviePage: FC = () => {

    const dispatch = useAppDispatch();
    const {responsePopularMovies} = useSelector((state: RootState) => state.movieSlice);

    useEffect(() => {
        if (!responsePopularMovies.results) {
            dispatch(fetchPopularMovies())
        }
    }, [])


    return (
        <div className={scss.popularMovie}>
            <Sort/>
            <div className={scss.popularMovie__content}>
                {
                    responsePopularMovies.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
                }
            </div>
        </div>
    );
};

export {PopularMoviePage};