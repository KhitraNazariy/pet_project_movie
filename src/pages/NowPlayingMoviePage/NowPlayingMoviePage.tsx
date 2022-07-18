import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './NowPlayingMoviePage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchNowPlayingMovies} from "../../redux/movie/asyncActions";
import {MovieCard, Sort} from "../../components";

const NowPlayingMoviePage: FC = () => {

    const {responseNowPlayingMovie} = useSelector((state: RootState) => state.movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovies())
    }, [])

    return (
        <div className={scss.nowPlaying}>
            <Sort/>
            <div className={scss.nowPlaying__content}>
                {
                    responseNowPlayingMovie.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
                }
            </div>
        </div>
    );
};

export {NowPlayingMoviePage};