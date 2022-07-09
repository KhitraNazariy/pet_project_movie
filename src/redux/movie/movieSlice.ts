import {createSlice, SerializedError} from "@reduxjs/toolkit";

import {MovieSliceState, ResponsePopularMovies} from "./types";
import {fetchPopularMovies} from "./asyncActions";


const initialState: MovieSliceState = {
    responsePopularMovies: {} as ResponsePopularMovies,
    status: '',
    error: '' as SerializedError
}

const movieSlice = createSlice({
    name: 'movieSlice',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPopularMovies.pending, (state) => {
            state.status = 'loading'
        });

        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.status = 'success'
            state.responsePopularMovies = action.payload
        });

        builder.addCase(fetchPopularMovies.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.error
        });
    }
});

export default movieSlice.reducer