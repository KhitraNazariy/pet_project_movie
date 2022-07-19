import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './PopularMoviePage.module.scss'
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularMovies} from "../../redux/movie/asyncActions";
import {MovieCard} from "../../components";
import {Sort} from "../../components";
import {fetchFilteredMovie} from "../../redux/filter/asyncActions";
import {clearResponsePopularMovie} from "../../redux/movie/movieSlice";
import {clearGenres, clearSort} from "../../redux/filter/filterSlice";

const PopularMoviePage: FC = () => {

    const dispatch = useAppDispatch();
    const {responsePopularMovies} = useSelector((state: RootState) => state.movieSlice);
    const {sort, withGenres, responseDiscoverMovie} = useSelector((state:RootState) => state.filterSlice);

    useEffect(() => {
        if (!responsePopularMovies.results) {
            dispatch(fetchPopularMovies())
        }
        return () => {
            dispatch(clearSort())
            dispatch(clearGenres())
        }
    }, [])

    useEffect(() => {
        dispatch(clearResponsePopularMovie())
        dispatch(fetchFilteredMovie({id: String(withGenres.id), sortQuery: String(sort.sortQuery)}))
    },[sort, withGenres])

    console.log(sort.sortQuery)
    console.log(withGenres.id)

    return (
        <div className={scss.popularMovie}>
            <Sort/>
            <div className={scss.popularMovie__content}>
                {responsePopularMovies && (
                    <>
                        {
                            responsePopularMovies.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </>
                )}
                {responseDiscoverMovie && (
                    <>
                        {
                            responseDiscoverMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export {PopularMoviePage};