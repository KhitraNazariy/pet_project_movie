import {SerializedError} from "@reduxjs/toolkit";

import {ResponsePopularTv} from "./popularTv";
import {ResponseAiringTodayTv} from "./airingToday";
import {ResponseOnTheAirTv} from "./onTheAir";
import {ResponseTopRatedTv} from "./topRated";

export interface TvSliceState {
    responsePopularTv: ResponsePopularTv,
    popularTvStatus: string;
    popularTvError: SerializedError;
    responseAiringTodayTv: ResponseAiringTodayTv;
    airingTodayTvStatus: string;
    airingTodayTvError: SerializedError;
    responseOnTheAirTv: ResponseOnTheAirTv;
    onTheAirTvStatus: string;
    onTheAirTvError: SerializedError;
    responseTopRatedTv: ResponseTopRatedTv;
    topRatedTvStatus: string;
    topRatedTvError: SerializedError;
}