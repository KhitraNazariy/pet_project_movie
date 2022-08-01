import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService, tvService} from "../../services";
import {DiscoverMovieParams, ResponseDiscoverMovie} from "./types/discoverMovie";
import {DiscoverTvParams, ResponseDiscoverTv} from "./types/discoverTv";

export const fetchGenresMovie = createAsyncThunk(
    'filterSlice/fetchGenresMovie',
    async (_, {rejectWithValue}) => {
        try {
            return movieService.getGenres()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


export const fetchGenresTv = createAsyncThunk(
    'filterSlice/fetchGenresTv',
    async (_, {rejectWithValue}) => {
        try {
            return tvService.getGenres()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const fetchFilteredMovie = createAsyncThunk<ResponseDiscoverMovie, DiscoverMovieParams>(
    'filterSlice/fetchFilteredMovie',
    async ({id, sortQuery, minimumDate, maximumDate}, {rejectWithValue}) => {
        try {
            return movieService.getFiltered(id, sortQuery, minimumDate, maximumDate)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const fetchFilteredTv = createAsyncThunk<ResponseDiscoverTv, DiscoverTvParams>(
    'filterSlice/fetchFilteredTv',
    async ({id, sortQuery} , {rejectWithValue}) => {
        try {
            return tvService.getFiltered(id, sortQuery)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)