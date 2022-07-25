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


export const fetchAiringTodayTv = createAsyncThunk(
    'tvSlice/fetchAiringTodayTv',
    async (_, {rejectWithValue}) => {
        try {
            return tvService.getAiringToday()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchOnTheAirTv = createAsyncThunk(
    'tvSlice/fetchOnTheAirTv',
    async (_, {rejectWithValue}) => {
        try {
            return tvService.getOnTheAir()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchTopRatedTv = createAsyncThunk(
    'tvSlice/fetchTopRatedTv',
    async (_, {rejectWithValue}) => {
        try {
            return tvService.getTopRated()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)