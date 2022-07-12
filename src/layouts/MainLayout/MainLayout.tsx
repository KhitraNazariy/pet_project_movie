import React from 'react';

import {Footer, Header} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export {MainLayout};