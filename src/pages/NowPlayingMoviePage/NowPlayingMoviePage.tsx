import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './NowPlayingMoviePage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchNowPlayingMovies} from "../../redux/movie/asyncActions";
import {MovieCard, Sort} from "../../components";
import {fetchFilteredMovie} from "../../redux/filter/asyncActions";
import {clearResponseNowPlaying} from "../../redux/movie/movieSlice";
import {clearGenres, clearSort} from "../../redux/filter/filterSlice";

const NowPlayingMoviePage: FC = () => {

    const {responseNowPlayingMovie, minimumDate} = useSelector((state: RootState) => state.movieSlice);
    const {withGenres, sort, responseDiscoverMovie} = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovies())
        return () => {
            dispatch(clearSort())
            dispatch(clearGenres())
        }
    }, [])

    useEffect(() => {
        dispatch(clearResponseNowPlaying())
        dispatch(fetchFilteredMovie({id: String(withGenres.id), sortQuery: String(sort.sortQuery), minimumDate: String(minimumDate)}))
    }, [withGenres, sort])


    return (
        <div className={scss.nowPlaying}>
            <Sort/>
            <div className={scss.nowPlaying__content}>
                {responseNowPlayingMovie && (
                    <>
                        {
                            responseNowPlayingMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
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

export {NowPlayingMoviePage};