import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";
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


export const fetchFilteredMovie = createAsyncThunk<ResponseDiscoverMovie, DiscoverMovieParams>(
    'filterSlice/fetchFilteredMovie',
    async ({id, sortQuery}, {rejectWithValue}) => {
        try {
            return movieService.getFiltered(id, sortQuery)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)