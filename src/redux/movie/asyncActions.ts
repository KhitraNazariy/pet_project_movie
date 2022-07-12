import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

export const fetchPopularMovies = createAsyncThunk(
    'movieSlice/fetchPopularMovies',
    async (_,{rejectWithValue}) => {
        try {
            return movieService.getPopular()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const fetchUpcomingMovies = createAsyncThunk(
    'movieSlice/fetchUpcomingMovies',
    async (_, {rejectWithValue}) => {
        try {
            return movieService.getUpcoming()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)