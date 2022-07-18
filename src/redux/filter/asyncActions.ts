import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

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