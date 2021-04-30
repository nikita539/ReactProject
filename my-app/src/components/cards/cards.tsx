import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCardsThunk} from "../../store/cards-reducer";


type propsType = {
    packID:string
}

const Cards = (props:propsType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsThunk(props.packID))
    },[])


    return <div>

    </div>
}

export default Cards;