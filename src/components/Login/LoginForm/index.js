import React, { useState } from 'react';

import './styles.scss';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitPress = async (e) => {
        e.preventDefault();
        await props.onSubmitButtonPress({ email, password });
    }

    return (
        <form className="login-form">
            <div className="login-input-container">
                <input
                    className="login-input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
            </div>
            <div className="login-input-container">
                <input
                    className="login-input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </div>
            <input
                type="submit"
                value={props.submitButtonText}
                className="login-button"
                onClick={submitPress}
                disabled={!email || !password}
            />
        </form>
    );
};

export default LoginForm;