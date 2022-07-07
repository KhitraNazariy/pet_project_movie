import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../configs";

export const movieService = {
    getAll: () => axiosService.get<any>(`${urls.movies}?api_key=${API_KEY}`).then(value => value.data)
}