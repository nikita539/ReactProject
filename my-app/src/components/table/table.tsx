import React, {useEffect} from "react";
import {GetPackType, packsAPI} from "../../API/packsAPI";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {gettableDataThunk} from '../../store/table-reducer'
import {Search} from "../search/Search";
import TableItem from "./TableItem";
import Pagination from "../pagination/pagination";
import SortPacks from "../SortPacks/SortPacks";
import {stateTypeTable} from '../../store/table-reducer'

const Table = () => {

    const tableData = useSelector<AppRootStateType,stateTypeTable>(state => state.tableData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gettableDataThunk())
    },[])

    const massResult = tableData.cardPacks.map((t) => {
        return <TableItem
            key={t._id}
            name={t.name}
            user_name={t.user_name}
            cardsCount={t.cardsCount}
            _id={t._id}
            updated={t.updated}
        />
    })


    return <>
        <div>
            <button onClick={() => {packsAPI.postPacks().then((res) => {
                console.log(res.data)})}}>Add pack</button>
            <Search/>
            <Pagination/>
            <SortPacks/>
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

{/*<tr>*/}
{/*    <th scope="row">1</th>*/}
{/*    <td>Mark</td>*/}
{/*    <td>Otto</td>*/}
{/*    <td>@mdo</td>*/}
{/*</tr>*/}
{/*<tr>*/}
{/*    <th scope="row">2</th>*/}
{/*    <td>Jacob</td>*/}
{/*    <td>Thornton</td>*/}
{/*    <td>@fat</td>*/}
{/*</tr>*/}
{/*<tr>*/}
{/*    <th scope="row">3</th>*/}
{/*    <td>Larry the Bird</td>*/}
{/*    <td>@twitter</td>*/}
{/*</tr>*/}