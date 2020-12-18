import React, { useState } from 'react';

import './styles.scss';

const RegisterForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');

    const submitPress = async (e) => {
        e.preventDefault();
        await props.onSubmitButtonPress({email, password, firstname, lastname, address} );
    }

    return (
        <form className="register-form">
            <div className="register-input-container">
                <input
                    className="register-input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
            </div>
            <div className="register-input-container">
                <input
                    className="register-input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </div>
            <div className="register-input-container">
                <input
                    className="register-input-field"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </div>
            <div className="register-input-container">
                <input
                    className="register-input-field"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            <div className="register-input-container">
                <input
                    className="register-input-field"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value={props.submitButtonText}
                className="register-button"
                onClick={submitPress}
                disabled={!email || !password || !firstname || !lastname || !address}
            />
        </form>
    );
};

export default RegisterForm;