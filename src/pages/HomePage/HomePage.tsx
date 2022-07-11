import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import scss from './HomePage.module.scss';
import {PopularMovieSlider, Poster} from "../../components";
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularMovies} from "../../redux/movie/asyncActions";

const HomePage: FC = () => {

    const dispatch = useAppDispatch();

    const {responsePopularMovies, error} = useSelector((state: RootState) => state.movieSlice);

    useEffect(() => {
        dispatch(fetchPopularMovies())
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveWidth: false,
        speed: 2000,
        autoplaySpeed: 4000,
        variableWidth: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={scss.content}>
            <Poster/>
            {responsePopularMovies.results &&
                <Slider {...settings}>
                    {
                        responsePopularMovies.results.map(movie => (
                            <PopularMovieSlider key={movie.id} {...movie}/>
                        ))
                    }
                </Slider>
            }
        </div>
    );
};

export {HomePage};