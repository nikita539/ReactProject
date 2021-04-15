import React, {useEffect, useState} from "react";
import {packsAPI,GetPackType} from "../../API/packsAPI";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {gettableDataThunk} from '../../store/table-reducer'

const Table = () => {

    const tableData = useSelector<AppRootStateType,Array<GetPackType>>(state => state.tableData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gettableDataThunk())
    },[])

    const massResult = tableData.map((t) => {
        return <tr key={t._id}>
            <th>{t.cardsCount}</th>
            <td>{t.user_name}</td>
            <td>{t.name}</td>
            <td>{t.updated}</td>
            <td>
                <button type="button" className="btn btn-outline-primary btn-sm">Add</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Delete</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Change</button>
            </td>
        </tr>
    })

    console.log(tableData[0])

    return <table className="table">
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