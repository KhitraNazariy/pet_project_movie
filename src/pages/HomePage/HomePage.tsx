import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import scss from './HomePage.module.scss';
import {PopularMovieSlider, Poster} from "../../components";
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularMovies, fetchUpcomingMovies} from "../../redux/movie/asyncActions";
import {settings} from "../../utils/SetingsForSlider";
import {UpcomingMovieSlider} from "../../components/UpcomingMovieSlider/UpcomingMovieSlider";

const HomePage: FC = () => {

    const dispatch = useAppDispatch();

    const {responsePopularMovies} = useSelector((state: RootState) => state.movieSlice);
    const {responseUpcomingMovies} = useSelector((state: RootState) => state.movieSlice);

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchUpcomingMovies())
    }, [])

    return (
        <div className={scss.content}>
            <Poster/>
            {responsePopularMovies.results &&
                <Slider {...settings}>
                    {
                        responsePopularMovies.results.map(movie =>
                            <PopularMovieSlider key={movie.id} {...movie}/>
                        )
                    }
                </Slider>
            }
            <div className={scss.upcoming}>
                {responseUpcomingMovies?.results?.map(movie => <UpcomingMovieSlider key={movie.id} {...movie}/>)}
            </div>
        </div>
    );
};

export {HomePage};