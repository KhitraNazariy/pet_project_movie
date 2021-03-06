import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {
    AiringTodayTvPage,
    HomePage,
    NowPlayingMoviePage, OnTheAirTvPage,
    PopularMoviePage,
    PopularTvPage,
    TopRatedMoviePage, TopRatedTvPage,
    UpcomingMoviePage
}
    from "./pages";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie-popular'} element={<PopularMoviePage/>}/>
                    <Route path={'movie-now-playing'} element={<NowPlayingMoviePage/>}/>
                    <Route path={'movie-upcoming'} element={<UpcomingMoviePage/>}/>
                    <Route path={'movie-top-rated'} element={<TopRatedMoviePage/>}/>
                    <Route path={'tv-popular'} element={<PopularTvPage/>}/>
                    <Route path={'tv-airing-today'} element={<AiringTodayTvPage/>}/>
                    <Route path={'tv-on-the-air'} element={<OnTheAirTvPage/>}/>
                    <Route path={'tv-top-rated'} element={<TopRatedTvPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;