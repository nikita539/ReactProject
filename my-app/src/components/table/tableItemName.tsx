import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeTableItemNameThunk} from '../../store/table-reducer';

type propsType = {
    _id:string
    name:string
}

const TableItemName = (props:propsType) => {

    let [editMode,setEditMode] = useState(false)
    let [name,setName] = useState(props.name)
    const dispatch = useDispatch()

    const onDoubleClickHandler = () => {
        setEditMode(!editMode)
        dispatch(changeTableItemNameThunk(props._id,name))
    }


    return <td>
        {editMode ? <input
            value={name}
            onDoubleClick={ onDoubleClickHandler }
            onChange={(event) => {setName(event.currentTarget.value)}}
        />:<div onDoubleClick={() => {setEditMode(!editMode)}}>{name}</div>}
    </td>
}

export default TableItemName