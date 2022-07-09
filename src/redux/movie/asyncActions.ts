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