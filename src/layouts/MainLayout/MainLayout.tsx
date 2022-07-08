import React from 'react';

import scss from './MainLayout.module.scss'
import {Footer, Header} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className={scss.content}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export {MainLayout};