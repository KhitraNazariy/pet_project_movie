import {createAsyncThunk} from "@reduxjs/toolkit";
import {tvService} from "../../services";

export const fetchPopularTv = createAsyncThunk(
    'tvSlice/fetchPopularTv',
    async (_, {rejectWithValue}) => {
        try {
            return tvService.getPopular()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)