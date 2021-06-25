import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {sortPacksDownTC, sortPacksUpTC} from "../../store/sort-reducer";
import {AppRootStateType} from "../../store/store";


const SortPacks = () => {

    const sortPacks = useSelector<AppRootStateType, number>(state => state.sortPacks.sortCards)
    const dispatch = useDispatch()

    const sortUpHandler = () => {
        dispatch(sortPacksUpTC(sortPacks))
    }
    const sortDownHandler = () => {
        dispatch(sortPacksDownTC(sortPacks))
    }

    return (
        <div>
            <button onClick={sortUpHandler}>/\</button>
            <button onClick={sortDownHandler}>\/</button>

        </div>
    )

}

export default SortPacks