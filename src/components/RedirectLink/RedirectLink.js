import React, { useState, useEffect } from 'react';

import './styles.scss';
import {Link} from 'react-router-dom';
import history from '../../history';

const RedirectLink = () => {
    const [linkData, setLinkData] = useState({ message: 'Have no account?', path: '/signup', text: 'Sign Up' });
    useEffect(() => {
        const { pathname } = history.location;
        if (!pathname) {
            return;
        }

        if (pathname === '/signup') {
            setLinkData({ message: 'Already have an account?', path: '/login', text: 'Log In' });
            return;
        }

        setLinkData({ message: 'Have no account?', path: '/signup', text: 'Sign Up' });
    }, []);

    return (
        <div className="redirect-link-container">
            <span>{linkData.message}</span>
            <Link to={linkData.path}>{linkData.text}</Link>
        </div>
    );
};

export default RedirectLink;