import React from 'react';
import {Redirect} from 'react-router';

import { getUserInfo } from '../../helpers/users/getUserInfo';

const ResolveAuth = () => {
    console.log('UserInfo', getUserInfo())
    if (getUserInfo()) {
        return (
            <Redirect to="/home" />
        );
    } else {
        return <Redirect to="/login" />
    }
};

export default ResolveAuth;