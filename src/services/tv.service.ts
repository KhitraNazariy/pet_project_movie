import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../configs";
import {ResponsePopularTv} from "../redux/tv/types/popularTv";
import {ResponseGenresTv} from "../redux/filter/filterSlice";
import {ResponseAiringTodayTv} from "../redux/tv/types/airingToday";
import {ResponseOnTheAirTv} from "../redux/tv/types/onTheAir";
import {ResponseTopRatedTv} from "../redux/tv/types/topRated";

export const tvService = {
    getPopular: () => axiosService.get<ResponsePopularTv>
    (`${urls.popularTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getGenres: () => axiosService.get<ResponseGenresTv>
    (`${urls.genresTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getAiringToday: () => axiosService.get<ResponseAiringTodayTv>
    (`${urls.airingTodayTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getOnTheAir: () => axiosService.get<ResponseOnTheAirTv>
    (`${urls.onTheAirTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data),
    getTopRated: () => axiosService.get<ResponseTopRatedTv>
    (`${urls.topRatedTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}