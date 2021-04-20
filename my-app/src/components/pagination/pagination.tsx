import React, {ChangeEvent} from "react";
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
    let pages = []
    for (let i = 1; i <= CountOfPages; i++) {
        pages.push(i)
    }
    //1...4 (5) 6...10
    if((page + 4) < CountOfPages ){
        pages[page + 2] = (
            <span key={page + 3} className={style.ButtonStyle}>
                    - ... -
                </span>
        )
        pages = pages.filter((o,i) => i < (page + 3) || i === (CountOfPages - 1))
    }
    if(page > 5) {
        pages[1] = (
            <span key={2} className={style.ButtonStyle}>
                  - ... -
        </span>
        )
        pages = pages.filter((o, i) => i < 2 || i > page - 4)
    }
    const handlerPagination: (pageNumber: number| any) => void = (pageNumber: number) => {
        dispatch(pageAC(pageNumber))
        dispatch(paginationTC(pageNumber, pageCount))
    }
    const handlerChangeSelect =(e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(paginationTC(page, Number(e.currentTarget.value)))
    }







    return (

        <div className={style.SelectWithButtons}>
            <div>

                <select className={style.Selector} value={pageCount} onChange={(e) => handlerChangeSelect} >
                    <option value={4}>4</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>


                {
                    pages.map((p, i) =>
                        <button key={i} onClick={(e) =>
                            handlerPagination(p)} className={page === p ? style.SelectPage : ''}>
                            {p}
                        </button>
                    )


                }






        </div>
    )


}

export default Pagination