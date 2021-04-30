import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCardsThunk, getCardsThunk} from "../../store/cards-reducer";
import {AppRootStateType} from "../../store/store";
import {stateCardsType} from '../../store/cards-reducer'
import {Redirect} from 'react-router-dom'
import {routes} from "../navbar/Navbar";





const Cards = () => {

    const cards = useSelector<AppRootStateType,stateCardsType>(state => state.cards)
    const packID = useSelector<AppRootStateType,string>(state => state.idPack)
    const dispatch = useDispatch()

    console.log(cards)


    const mass = cards.cards.map(t => {
        return (
            <tr>
                <th scope="row">1</th>
                <td>{t._id}</td>
                <td>{t.grade}</td>
                <td>{t.rating}</td>
            </tr>
        )
    })

    return (
        <>
            <div>
                <button onClick={() => {dispatch(addCardsThunk(packID))}}>ADD</button>
            </div>
            <div style={{width:"100%",height:"100%"}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mass}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cards;