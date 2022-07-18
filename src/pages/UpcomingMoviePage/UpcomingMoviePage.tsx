import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './UpcomingMoviePage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchUpcomingMovies} from "../../redux/movie/asyncActions";
import {MovieCard, Sort} from "../../components";

const UpcomingMoviePage: FC = () => {

    const {responseUpcomingMovies} = useSelector((state: RootState) => state.movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!responseUpcomingMovies.results) {
            dispatch(fetchUpcomingMovies())
        }
    }, [])

    return (
        <div className={scss.upcoming}>
            <Sort/>
            <div className={scss.upcoming__content}>
                {
                    responseUpcomingMovies.results?.map(movie => <MovieCard key={movie.id} {...movie}/>)
                }
            </div>
        </div>
    );
};

export {UpcomingMoviePage};