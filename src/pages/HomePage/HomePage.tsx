import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import scss from './HomePage.module.scss';
import {
    PopularMovieSlider,
    PopularTvSlider,
    Poster,
    UpcomingMovieSlider
} from "../../components";
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularMovies, fetchUpcomingMovies} from "../../redux/movie/asyncActions";
import {settings} from "../../utils/SetingsForSlider";
import {fetchPopularTv} from "../../redux/tv/asyncActions";

const HomePage: FC = () => {

    const dispatch = useAppDispatch();

    const {responsePopularMovies, responseUpcomingMovies} = useSelector((state: RootState) => state.movieSlice);
    const {responsePopularTv} = useSelector((state: RootState) => state.tvSlice);

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchUpcomingMovies())
        dispatch(fetchPopularTv())
    }, [])

    return (
        <div className={scss.content}>
            <Poster/>
            <h2 className={scss.content_title}>Популярні фільми</h2>
            <Slider {...settings}>
                {
                    responsePopularMovies.results?.map(movie =>
                        <PopularMovieSlider key={movie.id} {...movie}/>
                    )
                }
            </Slider>
            <h2 className={scss.content_title}>Очікувані фільми у кінотеартах</h2>
            <div className={scss.upcoming}>
                {responseUpcomingMovies.results?.map(movie => <UpcomingMovieSlider key={movie.id} {...movie}/>)}
            </div>
            <h2 className={scss.content_title}>Популярні телешоу</h2>
            <Slider {...settings}>
                {
                    responsePopularTv.results?.map(tv => <PopularTvSlider key={tv.id} {...tv}/>)
                }
            </Slider>
        </div>
    );
};

export {HomePage};