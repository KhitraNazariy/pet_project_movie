import {SerializedError} from "@reduxjs/toolkit";

export type PopularMovie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type ResponsePopularMovies = {
    page: number;
    results: PopularMovie[];
    total_pages: number;
    total_results: number;
}

export interface MovieSliceState {
    responsePopularMovies: ResponsePopularMovies;
    status: string;
    error: SerializedError
}