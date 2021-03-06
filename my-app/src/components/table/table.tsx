import React, {useEffect, useMemo} from "react";
import {GetPackType, packsAPI} from "../../API/packsAPI";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {gettableDataThunk} from '../../store/table-reducer'
import {Search} from "../search/Search";
import TableItem from "./TableItem";
import Pagination from "../pagination/pagination";
import SortPacks from "../SortPacks/SortPacks";
import {stateTypeTable} from '../../store/table-reducer'
import AddTableItem from "./addTableItem";
import {stateType} from "../../store/log_in-reducer";

const Table = () => {

    const tableData = useSelector<AppRootStateType,stateTypeTable>(state => state.tableData)
    const login = useSelector<AppRootStateType,stateType>(state => state.logIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gettableDataThunk(login._id))
    },[login._id])


    const massResult = tableData.cardPacks.map((t:any) => {
        return <TableItem
            key={t._id}
            userId={login._id}
            name={t.name}
            user_name={t.user_name}
            cardsCount={t.cardsCount}
            _id={t._id}
            updated={t.updated}
        />
    })


    return <>
        <div>
            <Search/>
            <Pagination/>
            <SortPacks/>
            <AddTableItem/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Buttons</th>
                </tr>
                </thead>
                <tbody>
                {massResult}
                </tbody>
            </table>
        </div>
    </>
}

export default Table