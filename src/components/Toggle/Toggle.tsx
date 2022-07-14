import React, {FC, useState} from 'react';

import scss from './Toggle.module.scss';
import {useTheme} from "../../hooks/useTheme";



const Toggle: FC = () => {

    const {theme, setTheme} = useTheme();
    const [checked, setChecked] = useState<boolean>(theme !== 'dark');

    const changeTheme = () => {
        if (checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
        setChecked(!checked)
    }

    return (
        <div className={scss.toggle}>
            <input type="checkbox" id="switch" defaultChecked={checked} onChange={changeTheme}/>
            <label htmlFor="switch">Toggle</label>
        </div>
    );
};

export {Toggle};