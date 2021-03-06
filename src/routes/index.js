import React from "react";
import { Switch, Route } from 'react-router-dom';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import SignInAcad from "../pages/SignInAcad";

export default function Routes () {
    return (
        <Switch>
            <Route path="/" exact component={Categories}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/login-academy" component={SignInAcad}/>
            <Route path="/cadastro" component={SignUp}/>
            <Route path="/home" component={Dashboard}/>
        </Switch>
    )
}


