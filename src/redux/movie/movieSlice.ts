import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";

import {fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies} from "./asyncActions";
import {ResponsePopularMovies} from "./types/popularMovie";
import {ResponseUpcomingMovies} from "./types/upcomingMovies";
import {MovieSliceState} from "./types/stateTypes";
import {ResponseNowPlayingMovie} from "./types/nowPlayingMovie";
import {ResponseTopRatedMovie} from "./types/topRatedMovie";


const initialState: MovieSliceState = {
    responsePopularMovies: {} as ResponsePopularMovies,
    popularMoviesStatus: '',
    popularMoviesError: '' as SerializedError,

    responseUpcomingMovies: {} as ResponseUpcomingMovies,
    upcomingMoviesStatus: '',
    upcomingMoviesError: '' as SerializedError,

    responseNowPlayingMovie: {} as ResponseNowPlayingMovie,
    nowPlayingMoviesStatus: '',
    nowPlayingMoviesError: '' as SerializedError,

    responseTopRatedMovie: {} as ResponseTopRatedMovie,
    topRatedMoviesStatus: '',
    topRatedMoviesError: '' as SerializedError,
}

const movieSlice = createSlice({
    name: 'movieSlice',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPopularMovies.pending, (state) => {
            state.popularMoviesStatus = 'loading'
        });

        builder.addCase(fetchPopularMovies.fulfilled, (state, action: PayloadAction<ResponsePopularMovies>) => {
            state.popularMoviesStatus = 'success'
            state.responsePopularMovies = action.payload
        });

        builder.addCase(fetchPopularMovies.rejected, (state, action) => {
            state.popularMoviesStatus = 'error'
            state.popularMoviesError = action.error
        });


        builder.addCase(fetchUpcomingMovies.pending, (state) => {
            state.upcomingMoviesStatus = 'loading'
        });

        builder.addCase(fetchUpcomingMovies.fulfilled, (state, action: PayloadAction<ResponseUpcomingMovies>) => {
            state.upcomingMoviesStatus = 'success'
            state.responseUpcomingMovies = action.payload
        });

        builder.addCase(fetchUpcomingMovies.rejected, (state, action) => {
            state.upcomingMoviesStatus = 'error'
            state.upcomingMoviesError = action.error
        });


        builder.addCase(fetchNowPlayingMovies.pending, (state) => {
            state.nowPlayingMoviesStatus = 'loading'
        });

        builder.addCase(fetchNowPlayingMovies.fulfilled, (state, action: PayloadAction<ResponseNowPlayingMovie>) => {
            state.nowPlayingMoviesStatus = 'success'
            state.responseNowPlayingMovie = action.payload
        });

        builder.addCase(fetchNowPlayingMovies.rejected, (state, action) => {
            state.nowPlayingMoviesStatus = 'error'
            state.nowPlayingMoviesError = action.error
        });


        builder.addCase(fetchTopRatedMovies.pending, (state) => {
            state.topRatedMoviesStatus = 'loading'
        });

        builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
            state.topRatedMoviesStatus = 'success'
            state.responseTopRatedMovie = action.payload
        });

        builder.addCase(fetchTopRatedMovies.rejected, (state, action) => {
            state.topRatedMoviesStatus = 'error'
            state.topRatedMoviesError = action.error
        });
    }
});

export default movieSlice.reducer