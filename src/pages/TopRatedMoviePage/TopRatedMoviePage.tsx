import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../redux/store";
import {fetchTopRatedMovies} from "../../redux/movie/asyncActions";
import {MovieCard, SortMovie} from "../../components";
import scss from './TopRatedMoviePage.module.scss'
import {clearGenres, clearSort} from "../../redux/filter/filterSlice";
import {fetchFilteredMovie} from "../../redux/filter/asyncActions";
import {clearResponseTopRated} from "../../redux/movie/movieSlice";

const TopRatedMoviePage = () => {

    const {responseTopRatedMovie} = useSelector((state: RootState) => state.movieSlice);
    const {sort, withGenres, responseDiscoverMovie} = useSelector((state:RootState) => state.filterSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedMovies())
        return () => {
            dispatch(clearSort())
            dispatch(clearGenres())
        }
    }, [])

    useEffect(() => {
        dispatch(clearResponseTopRated())
        dispatch(fetchFilteredMovie({id: String(withGenres.id), sortQuery: String(sort.sortQuery), minimumDate: '', maximumDate: ''}))
    },[sort, withGenres])

    return (
        <div className={scss.topRated}>
            <SortMovie/>
            <div className={scss.topRated__content}>
                {responseTopRatedMovie && (
                    <>
                        {
                            responseTopRatedMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
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

export {TopRatedMoviePage};