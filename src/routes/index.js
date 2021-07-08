import React from "react";
import { Switch, Route } from 'react-router-dom';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Routes () {
    return (
        <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
        </Switch>
    )
}

export default Routes;


