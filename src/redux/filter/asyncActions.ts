import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService, tvService} from "../../services";
import {DiscoverMovieParams, ResponseDiscoverMovie} from "./types/discoverMovie";

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
    async ({id, sortQuery, minimumDate}, {rejectWithValue}) => {
        try {
            return movieService.getFiltered(id, sortQuery, minimumDate)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)