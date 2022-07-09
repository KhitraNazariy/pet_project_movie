import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import movieSlice from "./movie/movieSlice";

const store = configureStore({
    reducer: {
        movieSlice
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>;

export default store
