import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { BrowserRouter } from 'react-router-dom';
import {Provider as UserProvider} from './context/userContext';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
);