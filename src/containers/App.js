import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import './styles.scss';
import history from '../history';
import PrivateRoute from '../hoc/PrivateRoute';

import ResolveAuth from '../components/ResolveAuth';
import SignUpPage from './AuthPage/SignUpPage';
import LoginPage from './AuthPage/LoginPage';
import HomePage from './HomePage';

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={ResolveAuth} />
                <Route exact path='/signup' component={SignUpPage} />
                <Route exact path='/login' component={LoginPage} />
                <PrivateRoute exact path='/home' component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;