import React from "react";
import {useDispatch} from "react-redux";
import {sortPacksDownTC} from "../../store/sort-reducer";



const SortPacks = () => {
    const dispatch = useDispatch()

    const handler = () => {
        dispatch(sortPacksDownTC)
    }
    return(
        <div>
            <button onClick={handler}>SORT</button>

        </div>
    )

    }

export default SortPacks