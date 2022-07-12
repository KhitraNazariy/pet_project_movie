import {SerializedError} from "@reduxjs/toolkit";
import {ResponsePopularMovies} from "./popularMovie";
import {ResponseUpcomingMovies} from "./upcomingMovies";

export interface MovieSliceState {
    responsePopularMovies: ResponsePopularMovies;
    popularMoviesStatus: string;
    popularMoviesError: SerializedError;

    responseUpcomingMovies: ResponseUpcomingMovies;
    upcomingMoviesStatus: string;
    upcomingMoviesError: SerializedError;
}