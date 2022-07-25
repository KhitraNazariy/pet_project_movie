import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import scss from './TopRatedTvPage.module.scss';
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchTopRatedTv} from "../../redux/tv/asyncActions";
import {SortTv, TvCard} from "../../components";

const TopRatedTvPage: FC = () => {

    const {responseTopRatedTv} = useSelector((state: RootState) => state.tvSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedTv())
    }, [])

    return (
        <div className={scss.topRated}>
            <SortTv/>
            <div className={scss.topRated__content}>
                {responseTopRatedTv.results?.map(item => <TvCard key={item.id} {...item}/>)}
            </div>
        </div>
    );
};

export {TopRatedTvPage};