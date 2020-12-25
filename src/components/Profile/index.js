import React, { useEffect, useState } from 'react';
import history from '../../history';
import { FaHome } from "react-icons/fa"

import './styles.scss';

const Profile = () => {
    const userDataProfile = JSON.parse(localStorage.getItem('userData'));

    const goHome = () =>
    {
        history.push('/home')
    }

    return (
        <div className = "profile">
            <div className = "color-height">
                <FaHome className = "home-button" onClick = {goHome}/>
                <div className = "profile-logo">Profile</div>
            </div>
            <div className = "color-bottom">
                <h2 className = "first-last-name">{userDataProfile.lastName} {userDataProfile.firstName}</h2>
            </div>
        </div>
    );
};

export default Profile;