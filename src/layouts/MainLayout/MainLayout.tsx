import React from 'react';
import {Outlet} from "react-router-dom";

import scss from './MainLayout.module.scss';
import {Footer, Header} from "../../components";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className={scss.main}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export {MainLayout};