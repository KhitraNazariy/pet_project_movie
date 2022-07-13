import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";

import {TvSliceState} from "./types/stateTypes";
import {ResponsePopularTv} from "./types/popularTv";
import {fetchPopularTv} from "./asyncActions";

const initialState: TvSliceState = {
    responsePopularTv: {} as ResponsePopularTv,
    popularTvStatus: '',
    popularTvError: {} as SerializedError
}

const tvSlice = createSlice({
    name: 'tvSlice',
    initialState,
    reducers: {},
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
    }
});

export default tvSlice.reducer