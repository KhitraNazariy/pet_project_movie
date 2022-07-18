import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {fetchGenresMovie} from "./asyncActions";

export type SortObj = {
    name: string;
}

export type Genre = {
    id: number;
    name: string;
}

export type ResponseGenresMovie = {
    genres: Genre[]
}

interface FilterSliceState {
    genres: ResponseGenresMovie
    error: SerializedError;
    status: string;
    sort: SortObj;
}

const initialState: FilterSliceState = {
    genres: {} as ResponseGenresMovie,
    error: '' as SerializedError,
    status: '',
    sort: {
        name: 'Популярні'
    }
}

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<SortObj>) {
            state.sort = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGenresMovie.pending, (state) => {
            state.status = 'loading'
        });

        builder.addCase(fetchGenresMovie.fulfilled, (state, action: PayloadAction<ResponseGenresMovie>) => {
            state.status = 'success'
            state.genres = action.payload
        });

        builder.addCase(fetchGenresMovie.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.error
        });
    }


});

export const {setSort} = filterSlice.actions

export default filterSlice.reducer