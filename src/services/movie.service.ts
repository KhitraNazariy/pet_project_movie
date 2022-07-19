import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../configs";
import {ResponsePopularMovies} from "../redux/movie/types/popularMovie";
import {ResponseUpcomingMovies} from "../redux/movie/types/upcomingMovies";
import {ResponseNowPlayingMovie} from "../redux/movie/types/nowPlayingMovie";
import {ResponseTopRatedMovie} from "../redux/movie/types/topRatedMovie";
import {ResponseGenresMovie} from "../redux/filter/filterSlice";
import {ResponseDiscoverMovie} from "../redux/filter/types/discoverMovie";

export const movieService = {
    getPopular: () => axiosService.get<ResponsePopularMovies>
    (`${urls.popularMovies}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getUpcoming: () => axiosService.get<ResponseUpcomingMovies>
    (`${urls.upcomingMovies}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getNowPlaying: () => axiosService.get<ResponseNowPlayingMovie>
    (`${urls.nowPlayingMovie}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getTopRated: () => axiosService.get<ResponseTopRatedMovie>
    (`${urls.topRatedMovie}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getGenres: () => axiosService.get<ResponseGenresMovie>
    (`${urls.genreMovies}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getFiltered: (id: string, sortQuery: string) => axiosService.get<ResponseDiscoverMovie>
    (`${urls.discoverMovie}?api_key=${API_KEY}&language=uk&sort_by=${sortQuery}&with_genres=${id}`)
        .then(value => value.data)
}