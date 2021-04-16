import React, {useEffect, useState} from "react";
import "./Profile.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {stateProfileType} from "../../store/profile-reducer";
import {profileDateThunk} from "../../store/profile-reducer";


const Profile = () => {

    const dispatch = useDispatch()
    let profileData = useSelector<AppRootStateType,stateProfileType>(state => state.profileDate)

   useEffect(() => {
       dispatch(profileDateThunk())
   },[])

    return <div className="Profile">
        <h1>Profile</h1>
        <div>{profileData.name}</div>
        <div>
            <img src={profileData.avatar} alt={"hello"}/>
        </div>
    </div>
}

export default Profile;