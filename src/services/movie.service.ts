import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../configs";
import {ResponsePopularMovies} from "../redux/movie/types/popularMovie";
import {ResponseUpcomingMovies} from "../redux/movie/types/upcomingMovies";

export const movieService = {
    getPopular: () => axiosService.get<ResponsePopularMovies>
    (`${urls.popularMovies}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getUpcoming: () => axiosService.get<ResponseUpcomingMovies>
    (`${urls.upcomingMovies}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}