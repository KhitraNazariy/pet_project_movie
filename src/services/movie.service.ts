import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../configs";
import {ResponsePopularMovies} from "../redux/movie/types";

export const movieService = {
    getPopular: () => axiosService.get<ResponsePopularMovies>
        (`${urls.popularMovies}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}