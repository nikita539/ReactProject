import {packsAPI} from "../../API/packsAPI";

export const Search = () => {
    const onClickHandler = () => {
        packsAPI.getPacks({pageCount: 6}).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <>
            <input type="search"/>
        </>
    )
}