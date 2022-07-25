import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './UpcomingMoviePage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchUpcomingMovies} from "../../redux/movie/asyncActions";
import {MovieCard, SortMovie} from "../../components";
import {clearGenres, clearSort} from "../../redux/filter/filterSlice";
import {fetchFilteredMovie} from "../../redux/filter/asyncActions";
import {clearResponseUpcomingMovie} from "../../redux/movie/movieSlice";

const UpcomingMoviePage: FC = () => {

    const {responseUpcomingMovies} = useSelector((state: RootState) => state.movieSlice);
    const {sort, withGenres, responseDiscoverMovie} = useSelector((state:RootState) => state.filterSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUpcomingMovies())
        return () => {
            dispatch(clearSort())
            dispatch(clearGenres())
        }
    }, [])

    useEffect(() => {
        dispatch(clearResponseUpcomingMovie())
        dispatch(fetchFilteredMovie({id: String(withGenres.id), sortQuery: String(sort.sortQuery), minimumDate: String('')}))
    }, [sort, withGenres])

    return (
        <div className={scss.upcoming}>
            <SortMovie/>
            <div className={scss.upcoming__content}>
                {responseUpcomingMovies && (
                    <>
                        {
                            responseUpcomingMovies.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
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

export {UpcomingMoviePage};