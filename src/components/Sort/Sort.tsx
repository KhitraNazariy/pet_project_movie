import React, {FC, useEffect, useRef, useState} from 'react';

import scss from './Sort.module.scss';
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {setSort, SortObj} from "../../redux/filter/filterSlice";
import {Genres} from "../Genres/Genres";

type PopupClick = MouseEvent & {
    path: Node[];
};

type SortItem = {
    name: string
    sortQuery: string;
}

const sortList: SortItem[] = [
    {name: 'Популярні', sortQuery: 'popularity.desc'},
    {name: 'Непопулярні', sortQuery: 'popularity.asc'},
    {name: 'Високий рейтинг', sortQuery: 'vote_average.desc'},
    {name: 'Низький рейтинг', sortQuery: 'vote_average.asc'},
    {name: 'Давній реліз', sortQuery: 'release_date.asc'},
    {name: 'Свіжий реліз', sortQuery: 'release_date.desc'},
]

const Sort: FC = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const {sort} = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useAppDispatch();
    const sortRef = useRef<HTMLDivElement>(null);

    const changePopupItem = (obj: SortObj) => {
        dispatch(setSort(obj))
        setOpenPopup(!openPopup)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            const _event = event as PopupClick

            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setOpenPopup(false)
            }

        }

        document.body.addEventListener('click', handleClickOutside)

        return () => document.body.removeEventListener('click', handleClickOutside)


    }, [])

    return (
        <div ref={sortRef} className={scss.sort}>
            <div className={scss.sort__label}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортування:</b>
                <span onClick={() => setOpenPopup(!openPopup)}>{sort.name}</span>
            </div>
            {openPopup && (
                <div className={scss.sort__popup}>
                    <ul>
                        {
                            sortList.map((obj, index) => (
                                <li
                                    style={{background: obj.name === sort.name ? '#E2E2E2' : ''}}
                                    onClick={() => changePopupItem(obj)}
                                    key={index}>
                                    {obj.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
            <Genres/>
        </div>

    );
};

export {Sort};