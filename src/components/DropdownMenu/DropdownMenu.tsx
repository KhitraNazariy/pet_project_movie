import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import scss from './DropdownMenu.module.scss'

const DropdownMenu: FC = () => {
    return (
        <div className={scss.menu}>
            <ul>
                <li>
                    Фільми
                    <ul>
                        <NavLink to={'movie-popular'}>
                            <li>Популярні</li>
                        </NavLink>
                        <NavLink to={'movie-now-playing'}>
                            <li>Зараз в ефірі</li>
                        </NavLink>
                        <NavLink to={'movie-upcoming'}>
                            <li>Очікувані</li>
                        </NavLink>
                        <li>Рейтингові</li>
                    </ul>
                </li>
                <li>
                    Серіали
                    <ul>
                        <li>Популярні</li>
                        <li>Сьогодні в ефірі</li>
                        <li>Зараз по телевізору</li>
                        <li>Рейтингові</li>
                    </ul>
                </li>
                <li>
                    Персони
                    <ul>
                        <li>Популярні</li>
                    </ul>
                </li>
                <li>
                    Ще
                    <ul>
                        <li>Обговорення</li>
                        <li>Лідери</li>
                        <li>Підтримка</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export {DropdownMenu};