import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";

import {TvSliceState} from "./types/stateTypes";
import {ResponsePopularTv} from "./types/popularTv";
import {fetchAiringTodayTv, fetchOnTheAirTv, fetchPopularTv, fetchTopRatedTv} from "./asyncActions";
import {ResponseAiringTodayTv} from "./types/airingToday";
import {ResponseOnTheAirTv} from "./types/onTheAir";
import {ResponseTopRatedTv} from "./types/topRated";
import {ResponsePopularMovies} from "../movie/types/popularMovie";
import {ResponseUpcomingMovies} from "../movie/types/upcomingMovies";
import {ResponseNowPlayingMovie} from "../movie/types/nowPlayingMovie";
import {ResponseTopRatedMovie} from "../movie/types/topRatedMovie";

const initialState: TvSliceState = {
    responsePopularTv: {} as ResponsePopularTv,
    popularTvStatus: '',
    popularTvError: {} as SerializedError,
    responseAiringTodayTv: {} as ResponseAiringTodayTv,
    airingTodayTvStatus: '',
    airingTodayTvError: {},
    responseOnTheAirTv: {} as ResponseOnTheAirTv,
    onTheAirTvStatus: '',
    onTheAirTvError: {} as SerializedError,
    responseTopRatedTv: {} as ResponseTopRatedTv,
    topRatedTvStatus: '',
    topRatedTvError: {} as SerializedError
}

const tvSlice = createSlice({
    name: 'tvSlice',
    initialState,
    reducers: {
        clearResponsePopularTv(state) {
            state.responsePopularTv = {} as ResponsePopularTv
        },

        clearResponseAiringTodayTv(state) {
            state.responseAiringTodayTv = {} as ResponseAiringTodayTv
        },

        clearResponseOnTheAirTv(state) {
            state.responseOnTheAirTv = {} as ResponseOnTheAirTv
        },

        clearResponseTopRatedTv(state) {
            state.responseTopRatedTv = {} as ResponseTopRatedTv
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopularTv.pending, (state) => {
            state.popularTvStatus = 'loading'
        });

        builder.addCase(fetchPopularTv.fulfilled, (state, action: PayloadAction<ResponsePopularTv>) => {
            state.popularTvStatus = 'success'
            state.responsePopularTv = action.payload
        });

        builder.addCase(fetchPopularTv.rejected, (state, action) => {
            state.popularTvStatus = 'error'
            state.popularTvError = action.error
        });


        builder.addCase(fetchAiringTodayTv.pending, (state) => {
            state.airingTodayTvStatus = 'loading'
        });

        builder.addCase(fetchAiringTodayTv.fulfilled, (state, action: PayloadAction<ResponseAiringTodayTv>) => {
            state.airingTodayTvStatus = 'success'
            state.responseAiringTodayTv = action.payload
        });

        builder.addCase(fetchAiringTodayTv.rejected, (state, action) => {
            state.airingTodayTvStatus = 'error'
            state.airingTodayTvError = action.error
        });


        builder.addCase(fetchOnTheAirTv.pending, (state) => {
            state.onTheAirTvStatus = 'loading'
        });

        builder.addCase(fetchOnTheAirTv.fulfilled, (state, action: PayloadAction<ResponseOnTheAirTv>) => {
            state.onTheAirTvStatus = 'success'
            state.responseOnTheAirTv = action.payload
        });

        builder.addCase(fetchOnTheAirTv.rejected, (state, action) => {
            state.onTheAirTvStatus = 'error'
            state.onTheAirTvError = action.error
        });


        builder.addCase(fetchTopRatedTv.pending, (state) => {
            state.topRatedTvStatus = 'loading'
        });

        builder.addCase(fetchTopRatedTv.fulfilled, (state, action: PayloadAction<ResponseTopRatedTv>) => {
            state.topRatedTvStatus = 'success'
            state.responseTopRatedTv = action.payload
        });

        builder.addCase(fetchTopRatedTv.rejected, (state, action) => {
            state.topRatedTvStatus = 'error'
            state.topRatedTvError = action.error
        });
    }
});

export default tvSlice.reducer

export const {
    clearResponsePopularTv,
    clearResponseTopRatedTv,
    clearResponseAiringTodayTv,
    clearResponseOnTheAirTv
} = tvSlice.actions;