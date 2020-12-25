import React, { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import './styles.scss';

import { Context as AuthContext } from '../../context/userContext';
import Content from '../Content';
import history from '../../history';

const Home = () => {
    const { logout } = useContext(AuthContext);
    const [showUserInfo, setShowUserInfo] = useState(false);

    const manageUserInfo = () => {
        if (showUserInfo) {
            setShowUserInfo(false);
            return;
        }

        setShowUserInfo(true);
    };

    const goToProfile = () => {
        history.push('/profile')
    };

    return (
        <div className="home-page-container">
            <div className="header-container">
                <div className="label-container">
                    <div className="burger-button">
                        <GiHamburgerMenu size={32}/>
                    </div>
                    <div className="logo">E-SHOP</div>
                    <input
                        className="search-container"
                        placeholder="search"
                    />
                </div>
                <div className="navigation-container">
                    <div className="navigation-item">
                        <ImLocation2 size={32} />
                    </div>
                    <div className="profile-item navigation-item" onClick={manageUserInfo}>
                        <FaUserCircle size={32} />
                        <div className={`profile-item-container ${showUserInfo && 'show'}`}>
                            <button className="profile-button" onClick={goToProfile}>Profile</button>
                            <button className="logout-button" onClick={logout}>logout</button>
                        </div>
                    </div>
                    <div className="navigation-item">
                        <TiShoppingCart size={32} />
                    </div>
                </div>
            </div>
            <div className="content-container">
                <Content />
            </div>
        </div>
    );
};

export default Home;