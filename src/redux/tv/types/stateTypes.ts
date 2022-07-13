import {SerializedError} from "@reduxjs/toolkit";

import {ResponsePopularTv} from "./popularTv";

export interface TvSliceState {
    responsePopularTv: ResponsePopularTv,
    popularTvStatus: string;
    popularTvError: SerializedError
}