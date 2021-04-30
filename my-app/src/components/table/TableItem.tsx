import React, {useState} from "react";
import {deleteTableItemsThunk} from "../../store/table-reducer";
import {useDispatch} from "react-redux";
import TableItemName from "./tableItemName";

type propsType = {
    name:string
    user_name:string | undefined
    cardsCount:number
    _id:string
    userId:string
    updated:string
}

const TableItem = React.memo((props:propsType) => {

    const dispatch = useDispatch()


    return  <tr key={props._id}>
        <th>{props.cardsCount}</th>
        <td>{props.user_name}</td>
        <TableItemName
            name={props.name}
            userId={props.userId}
            _id={props._id}
        />
        <td>{props.updated}</td>
        <td>
            <button
                type="button" className="btn btn-outline-primary btn-sm"
                onClick={() => {dispatch(deleteTableItemsThunk(props._id,props.userId))}}
            >Delete</button>
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => {alert("hello")}}>Change</button>
        </td>
    </tr>
})


export default TableItem;