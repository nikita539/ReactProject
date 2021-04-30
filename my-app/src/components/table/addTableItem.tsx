import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItemTableThunk, gettableDataThunk} from "../../store/table-reducer";
import {AppRootStateType} from "../../store/store";


const AddTableItem = () => {


    const dispatch = useDispatch()
    const login = useSelector<AppRootStateType,any>(state => state.logIn)
    let [name,setName] = useState<string>('')

    const onChangeHandler = (value:ChangeEvent<HTMLInputElement>) => {
        setName(value.currentTarget.value)
    }
    const onClickHandler = () => {
        dispatch( addItemTableThunk(name,login._id))
        setName('')
        dispatch(gettableDataThunk(login._id))
    }


    return <div>
        <div>
            <input
                value={name}
                onChange={ onChangeHandler }
            />
            <button
                onClick={ onClickHandler }
            >Add</button>
        </div>
    </div>
}

export default AddTableItem;