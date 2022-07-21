import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";

import {fetchFilteredMovie, fetchGenresMovie} from "./asyncActions";
import {ResponseDiscoverMovie} from "./types/discoverMovie";

export type SortObj = {
    name: string;
    sortQuery: string;
}

export type WithGenres = {
    id: number
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
    responseDiscoverMovie: ResponseDiscoverMovie;
    discoverMovieStatus: string;
    discoverMovieError: SerializedError;
    genres: ResponseGenresMovie;
    error: SerializedError;
    status: string;
    withGenres: WithGenres;
    sort: SortObj;
}

const initialState: FilterSliceState = {
    responseDiscoverMovie: {} as ResponseDiscoverMovie,
    discoverMovieStatus: '',
    discoverMovieError: '' as SerializedError,
    genres: {} as ResponseGenresMovie,
    error: '' as SerializedError,
    status: '',
    withGenres: {} as WithGenres,
    sort: {
        name: 'Популярні',
        sortQuery: 'popularity.desc'
    }
}

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<SortObj>) {
            state.sort = action.payload
        },

        setGenre(state, action: PayloadAction<WithGenres>) {
            state.withGenres = action.payload
        },

        clearSort(state) {
            state.sort.name = 'Популярні'
            state.sort.sortQuery = 'popularity.desc'
        },

        clearGenres(state) {
            state.withGenres = {} as WithGenres
        },
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


        builder.addCase(fetchFilteredMovie.pending, (state) => {
            state.discoverMovieStatus = 'loading'
        });

        builder.addCase(fetchFilteredMovie.fulfilled, (state, action: PayloadAction<ResponseDiscoverMovie>) => {
            state.discoverMovieStatus = 'success'
            state.responseDiscoverMovie = action.payload
        });

        builder.addCase(fetchFilteredMovie.rejected, (state, action) => {
            state.discoverMovieStatus = 'error'
            state.discoverMovieError = action.error
        });
    }


});

export const {setSort, setGenre, clearSort, clearGenres} = filterSlice.actions

export default filterSlice.reducer