import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";

import {fetchPopularMovies, fetchUpcomingMovies} from "./asyncActions";
import {ResponsePopularMovies} from "./types/popularMovie";
import {ResponseUpcomingMovies} from "./types/upcomingMovies";
import {MovieSliceState} from "./types/stateTypes";


const initialState: MovieSliceState = {
    responsePopularMovies: {} as ResponsePopularMovies,
    popularMoviesStatus: '',
    popularMoviesError: '' as SerializedError,

    responseUpcomingMovies: {} as ResponseUpcomingMovies,
    upcomingMoviesStatus: '',
    upcomingMoviesError: '' as SerializedError
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
    }
});

export default movieSlice.reducer