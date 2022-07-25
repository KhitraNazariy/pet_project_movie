import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './OnTheAirTvPage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchOnTheAirTv} from "../../redux/tv/asyncActions";
import {SortTv, TvCard} from "../../components";

const OnTheAirTvPage: FC = () => {

    const {responseOnTheAirTv} = useSelector((state: RootState) => state.tvSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOnTheAirTv())
    }, [])

    return (
        <div className={scss.onTheAir}>
            <SortTv/>
            <div className={scss.onTheAir__content}>
                {responseOnTheAirTv.results?.map(item => <TvCard key={item.id} {...item}/>)}
            </div>
        </div>
    );
};

export {OnTheAirTvPage};