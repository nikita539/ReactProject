import React, {useEffect, useState} from "react";
import {packsAPI,GetPackType} from "../../API/packsAPI";

const Table = () => {

    const [massFromServer,setMassFromServer] = useState<Array<GetPackType>>([])

    useEffect(() => {
        packsAPI.getPacks({})
            .then((res) => {
                console.log(res.data.cardPacks)
                setMassFromServer(res.data.cardPacks)
            })
    },[])

    const massResult = massFromServer.map((i) => {
        return(
            <tr>
                <th>{i.cardsCount}</th>
                <td>{i.name}</td>
                <td>{i.user_name}</td>
                <td>{i.rating}</td>
                <th><button style={{width:"20px",height:"20px"}}/></th>
            </tr>
        )
    })

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