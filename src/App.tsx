import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {
    HomePage,
    NowPlayingMoviePage,
    PopularMoviePage
}
from "./pages";
import {UpcomingMoviePage} from "./pages/UpcomingMoviePage/UpcomingMoviePage";
import {TopRatedMoviePage} from "./pages/TopRatedMoviePage/TopRatedMoviePage";


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
                </Route>
            </Routes>
        </>
    );
};

export default App;