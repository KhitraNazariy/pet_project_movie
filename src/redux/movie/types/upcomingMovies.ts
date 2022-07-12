type Dates = {
    maximum: string;
    minimum: string;
}

export type UpcomingMovie = {
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

export type ResponseUpcomingMovies = {
    dates: Dates,
    page: number;
    results: UpcomingMovie[];
    total_pages: number;
    total_results: number;
}