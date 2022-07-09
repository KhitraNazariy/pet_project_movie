import React, {FC, useEffect} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";

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

    console.log(error)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={scss.content}>
            <Poster/>
            <div>
                {responsePopularMovies.results &&
                    <Slider {...settings}>
                        {
                            responsePopularMovies.results.map(movie => (
                                <div key={movie.id}>
                                    <PopularMovieSlider movie={movie}/>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>
        </div>
    );
};

export {HomePage};