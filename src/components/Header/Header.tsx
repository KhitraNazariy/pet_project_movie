import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

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
                {/*<ul className={scss.header__navigation_menu}>*/}
                {/*    <li className={scss.header__navigation_menu_item}>*/}
                {/*        Фільми*/}
                {/*        <ul className={scss.header__navigation_menu_sub}>*/}
                {/*            <li><Link to={''}>Популярні</Link></li>*/}
                {/*            <li><Link to={''}>Зараз в ефірі</Link></li>*/}
                {/*            <li><Link to={''}>Очікувані</Link></li>*/}
                {/*            <li><Link to={''}>Рейтингові</Link></li>*/}
                {/*        </ul>*/}
                {/*    </li>*/}
                {/*    <li className={scss.header__navigation_menu_item}>*/}
                {/*        Серіали*/}
                {/*        <ul className={scss.header__navigation_menu_sub}>*/}
                {/*            <li><Link to={''}>Популярні</Link></li>*/}
                {/*            <li><Link to={''}>Зараз в ефірі</Link></li>*/}
                {/*            <li><Link to={''}>Очікувані</Link></li>*/}
                {/*            <li><Link to={''}>Рейтингові</Link></li>*/}
                {/*        </ul>*/}
                {/*    </li>*/}
                {/*    <li className={scss.header__navigation_menu_item}>*/}
                {/*        Персони*/}
                {/*        <ul className={scss.header__navigation_menu_sub}>*/}
                {/*            <li><Link to={''}>Популярні</Link></li>*/}
                {/*            <li><Link to={''}>Зараз в ефірі</Link></li>*/}
                {/*            <li><Link to={''}>Очікувані</Link></li>*/}
                {/*            <li><Link to={''}>Рейтингові</Link></li>*/}
                {/*        </ul>*/}
                {/*    </li>*/}
                {/*    <li className={scss.header__navigation_menu_item}>Ще</li>*/}
                {/*</ul>*/}
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