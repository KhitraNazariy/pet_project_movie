import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './AiringTodayTvPage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchAiringTodayTv} from "../../redux/tv/asyncActions";
import {SortTv, TvCard} from "../../components";

const AiringTodayTvPage: FC = () => {

    const {responseAiringTodayTv} = useSelector((state: RootState) => state.tvSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAiringTodayTv())
    }, [])

    return (
        <div className={scss.airingToday}>
            <SortTv/>
            <div className={scss.airingToday__content}>
                {responseAiringTodayTv.results?.map(item => <TvCard key={item.id} {...item}/>)}
            </div>
        </div>
    );
};

export {AiringTodayTvPage};