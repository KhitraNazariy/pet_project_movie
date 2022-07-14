import React, {FC} from 'react';

import iconLogo from '../../assets/img/logo-icon.png';
import scss from './Header.module.scss';
import {Toggle} from "../Toggle/Toggle";
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import {Link} from "react-router-dom";

const Header: FC = () => {

    return (
        <div className={scss.header}>
            <div className={scss.header__navigation}>
                <Link to={'/'}>
                    <div className={scss.header__navigation_logo}>
                        <img src={iconLogo} alt="icon logo"/>
                    </div>
                </Link>
                <DropdownMenu/>
            </div>
            <div className={scss.header__tools}>
                <Toggle/>
            </div>
        </div>
    );
};

export {Header};