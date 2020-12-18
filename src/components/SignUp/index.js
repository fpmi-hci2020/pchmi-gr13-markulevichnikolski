import React, { useContext } from 'react';

import './styles.scss';
import RegisterForm from './RegisterForm';
import RedirectLink from '../RedirectLink/RedirectLink';
import { Context as AuthContext } from '../../context/userContext';

const SignUp = () => {
    const { signup } = useContext(AuthContext);

    const onSubmitButtonPress = async ({ email, password, firstname, lastname, address }) => {
        await signup({ email, password, firstname, lastname, address });
    };

    return (
        <div className="signup-page-container">
            <RedirectLink />
            <RegisterForm
                onSubmitButtonPress={onSubmitButtonPress}
                submitButtonText="Sign Up"
            />
        </div>
    );
};

export default SignUp;