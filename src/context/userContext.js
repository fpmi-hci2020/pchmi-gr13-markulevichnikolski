import api from '../api';
import createDataContext from './createDataContext';
import { LOGIN, SIGNUP, LOGOUT } from '../constants/actionTypes';

import history from '../history';

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        case SIGNUP:
            return { token: action.payload.token };
        case LOGOUT: {
            return { token: null };
        }
        default:
            return state
    }
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        const response = await api.post('/signin', { email, password });
        if (!response.data) {
            return;
        }

        const { token, user } = response.data.data;
        if (!token) {
            if (response.data.data.error) {
                alert(response.data.data.message);
            }
            return;
        }

        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user));
        dispatch({ type: LOGIN, payload: token });

        history.push('/home');
    }
};

const logout = (dispatch) => {
    return () => {
        localStorage.removeItem('token');

        dispatch({ type: LOGOUT });
        history.push('/');
    }
};

const signup = (dispatch) => {
    return async (userData) => {
        const response = await api.post('/signup', userData);
        if (!response.data) {
            return;
        }

        const { token } = response.data.data;
        if (!token) {
            if (response.data.data.error) {
                alert(response.data.data.message);
            }
            return;
        }

        localStorage.setItem('token', token);
        dispatch({ type: SIGNUP, payload: token });

        history.push('/home');
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signup, logout },
    initialState
);