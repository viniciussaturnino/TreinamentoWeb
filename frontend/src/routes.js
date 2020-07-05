import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewFlight from './pages/NewFlight';
import ForgotPassword from './pages/ForgotPassword';
import RecoverPassword from './pages/RecoverPassword';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/flights/new" component={NewFlight} />
                <Route path="/forgot_password" component={ForgotPassword} />
                <Route path="/recover_password" component={RecoverPassword} />
            </Switch>
        </BrowserRouter>
    );
}