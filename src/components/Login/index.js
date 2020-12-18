import React, { useContext } from 'react';

import './styles.scss';

import { Context as AuthContext } from '../../context/userContext';
import LoginForm from './LoginForm';
import RedirectLink from '../RedirectLink/RedirectLink';

const Login = () => {
    const { signin } = useContext(AuthContext);

    const onSubmitButtonPress = async ({ email, password }) => {
        await signin({email, password});
    }

    return (
        <div className="login-page-container">
            <RedirectLink />
            <LoginForm
                onSubmitButtonPress={onSubmitButtonPress}
                submitButtonText="Log In"
            />
        </div>
    );
};

export default Login;