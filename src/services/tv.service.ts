import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../configs";
import {ResponsePopularTv} from "../redux/tv/types/popularTv";

export const tvService = {
    getPopular: () => axiosService.get<ResponsePopularTv>
    (`${urls.popularTv}?api_key=${API_KEY}&language=uk`)
        .then(value => value.data)
}