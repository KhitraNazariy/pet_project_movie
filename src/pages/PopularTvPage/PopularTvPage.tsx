import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularTv} from "../../redux/tv/asyncActions";
import {SortTv, TvCard} from "../../components";
import scss from './PopularTvPage.module.scss';
import {clearGenres, clearSort} from "../../redux/filter/filterSlice";
import {clearResponsePopularTv} from "../../redux/tv/tvSlice";
import {fetchFilteredTv} from "../../redux/filter/asyncActions";

const PopularTvPage = () => {

    const {responsePopularTv} = useSelector((state: RootState) => state.tvSlice);
    const {sort, withGenres, responseDiscoverTv} = useSelector((state: RootState) => state.filterSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (responsePopularTv) {
            dispatch(fetchPopularTv())
        }
        return () => {
            dispatch(clearSort())
            dispatch(clearGenres())
        }
    }, [])

    useEffect(() => {
        dispatch(clearResponsePopularTv())
        dispatch(fetchFilteredTv({id: String(withGenres.id), sortQuery: sort.sortQuery}))
    }, [sort, withGenres])

    return (
        <div className={scss.popularTv}>
            <SortTv/>
            <div className={scss.popularTv__content}>
                {responsePopularTv && (
                    <>
                        {
                            responsePopularTv.results?.map(movie => <TvCard key={movie.id} {...movie}/>)
                        }
                    </>
                )}
                {responseDiscoverTv && (
                    <>
                        {
                            responseDiscoverTv.results?.map(movie => <TvCard key={movie.id} {...movie}/>)
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export {PopularTvPage};