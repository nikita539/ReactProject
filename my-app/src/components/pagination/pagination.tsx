import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import style from './pagination.module.css'
import {pageAC, paginationTC} from "../../store/pagination-reducer";


const Pagination = () => {


    const pageCount = useSelector<AppRootStateType, number>(state => state.pagination.pageCount)
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.pagination.cardPacksTotalCount)
    const page = useSelector<AppRootStateType, number>(state => state.pagination.page)

    const dispatch = useDispatch()

    const CountOfPages = Math.ceil(cardPacksTotalCount / pageCount)
    const pages = []
    for (let i = 1; i <= CountOfPages; i++) {
        pages.push(i)
    }
    const handlerPagination = (pageNumber: number) => {
        dispatch(pageAC(pageNumber))
        dispatch(paginationTC(pageNumber, pageCount))
    }


    return (

        <div>
            <div>
                {
                    pages.map((p, id) =>
                        <button key={id} onClick={(e) => handlerPagination(p)} className={page === p ? style.SelectPage : ''}>{p}</button>
                    )
                }
            </div>
        </div>
    )

}

export default Pagination