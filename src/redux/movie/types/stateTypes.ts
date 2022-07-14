import {SerializedError} from "@reduxjs/toolkit";
import {ResponsePopularMovies} from "./popularMovie";
import {ResponseUpcomingMovies} from "./upcomingMovies";
import {ResponseNowPlayingMovie} from "./nowPlayingMovie";

export interface MovieSliceState {
    responsePopularMovies: ResponsePopularMovies;
    popularMoviesStatus: string;
    popularMoviesError: SerializedError;

    responseUpcomingMovies: ResponseUpcomingMovies;
    upcomingMoviesStatus: string;
    upcomingMoviesError: SerializedError;

    responseNowPlayingMovie: ResponseNowPlayingMovie;
    nowPlayingMoviesStatus: string;
    nowPlayingMoviesError: SerializedError;
}