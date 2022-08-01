import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";

import {fetchFilteredMovie, fetchFilteredTv, fetchGenresMovie, fetchGenresTv} from "./asyncActions";
import {ResponseDiscoverMovie} from "./types/discoverMovie";
import {ResponseDiscoverTv} from "./types/discoverTv";

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

export type ResponseGenresTv = {
    genres: Genre[]
}

export type ResponseGenresMovie = {
    genres: Genre[]
}

interface FilterSliceState {
    responseDiscoverMovie: ResponseDiscoverMovie;
    discoverMovieStatus: string;
    discoverMovieError: SerializedError;
    responseDiscoverTv: ResponseDiscoverTv;
    discoverTvStatus: string;
    discoverTvError: SerializedError;
    genresTv: ResponseGenresTv;
    genresTvStatus: string;
    genresTvError: SerializedError,
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
    responseDiscoverTv: {} as ResponseDiscoverTv,
    discoverTvStatus: '',
    discoverTvError: '' as SerializedError,
    genresTv: {} as ResponseGenresTv,
    genresTvStatus: '',
    genresTvError: '' as SerializedError,
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


        builder.addCase(fetchGenresTv.pending, (state, action) => {
            state.genresTvStatus = 'loading'
        });

        builder.addCase(fetchGenresTv.fulfilled, (state, action: PayloadAction<ResponseGenresTv>) => {
            state.genresTvStatus = 'success'
            state.genresTv = action.payload
        });

        builder.addCase(fetchGenresTv.rejected, (state, action) => {
            state.genresTvStatus = 'error'
            state.error = action.error
        });


        builder.addCase(fetchFilteredTv.pending, (state) => {
            state.discoverTvStatus = 'loading'
        });

        builder.addCase(fetchFilteredTv.fulfilled, (state, action: PayloadAction<ResponseDiscoverTv>) => {
            state.discoverTvStatus = 'success'
            state.responseDiscoverTv = action.payload
        });

        builder.addCase(fetchFilteredTv.rejected, (state, action) => {
            state.discoverTvStatus = 'error'
            state.discoverTvError = action.error
        });
    }


});

export const {setSort, setGenre, clearSort, clearGenres} = filterSlice.actions

export default filterSlice.reducer