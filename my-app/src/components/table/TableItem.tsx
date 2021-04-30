import React, {useState} from "react";
import {deleteTableItemsThunk} from "../../store/table-reducer";
import {useDispatch, useSelector} from "react-redux";
import TableItemName from "./tableItemName";
import Cards from "../cards/cards";
import {getCardsThunk} from "../../store/cards-reducer";
import {AppRootStateType} from "../../store/store";
import {stateCardsType} from '../../store/cards-reducer'
import {Redirect} from 'react-router-dom'
import {routes} from "../navbar/Navbar";
import {packIDReducer,packIDAC} from "../../store/packIDReducer";


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
    const card = useSelector<AppRootStateType,stateCardsType>(state => state.cards)


    const onClickHandler = () => {
        dispatch(getCardsThunk(props._id))
        dispatch(packIDAC(props._id))
    }

    if(card.redirect){
        return <Redirect to={routes.forCards}/>
    }



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
            <button
                type="button" className="btn btn-outline-primary btn-sm"
                onClick={onClickHandler}>Cards</button>
        </td>
    </tr>
})


export default TableItem;