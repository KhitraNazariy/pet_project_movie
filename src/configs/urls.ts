const baseURL = 'https://api.themoviedb.org/3';

export const API_KEY = '78944b79c48d0b33ca2920b8c5d42439';
export const IMG_URL = 'https://image.tmdb.org/t/p/original'

type Urls = {
    popularMovies: string;
    topRatedMovie: string;
    upcomingMovies: string;
    nowPlayingMovie: string;
    genreMovies: string;
    discoverMovie: string;

    popularTv: string;
}

export const urls: Urls = {
    popularMovies: '/movie/popular',
    topRatedMovie: '/movie/top_rated',
    upcomingMovies: '/movie/upcoming',
    nowPlayingMovie: '/movie/now_playing',
    genreMovies: '/genre/movie/list',
    discoverMovie: '/discover/movie',

    popularTv: '/tv/popular'
}

export default baseURL
