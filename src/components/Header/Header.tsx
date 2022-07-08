import React, {FC, useState} from 'react';

import iconLogo from '../../assets/img/logo-icon.png';
import scss from './Header.module.scss';
import {useTheme} from "../../hooks/useTheme";

const Header: FC = () => {

    const {theme, setTheme} = useTheme();
    let [checked, setChecked] = useState<boolean>(theme !== 'dark');

    const changeTheme = () => {
        if (checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
        setChecked(!checked)
    }

    return (
        <div className={scss.header}>
            <div className={scss.header__navigation}>
                <div className={scss.header__navigation_logo}>
                    <img src={iconLogo} alt="icon logo"/>
                </div>
                <div className={scss.header__navigation_menu}>
                    <div className={scss.header__navigation_menu_item}>Фільми</div>
                    <div className={scss.header__navigation_menu_item}>Серіали</div>
                    <div className={scss.header__navigation_menu_item}>Персони</div>
                    <div className={scss.header__navigation_menu_item}>Ще</div>
                </div>
            </div>
            <div className={scss.header__tools}>
                <div className={scss.header__tools_toggle}>
                    <input type="checkbox" id="switch" defaultChecked={checked} onChange={changeTheme}/>
                    <label htmlFor="switch">Toggle</label>
                </div>
            </div>
        </div>
    );
};

export {Header};