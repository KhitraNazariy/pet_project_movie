import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPopularTv} from "../../redux/tv/asyncActions";
import {SortTv, TvCard} from "../../components";
import scss from './PopularTvPage.module.scss';

const PopularTvPage = () => {

    const {responsePopularTv} = useSelector((state: RootState) => state.tvSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPopularTv())
    }, [])

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

            </div>
        </div>
    );
};

export {PopularTvPage};