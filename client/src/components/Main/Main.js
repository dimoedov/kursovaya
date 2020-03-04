import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from '../Home/Home'
import Personal from '../Personal/Personal'
import Market from '../Market/Market'
import Auth from '../Auth/Auth'
import Register from '../Register/Register'
import Signout from "../Signout/Signout";
function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Auth' component={Auth}/>
                <Route path='/Register' component={Register}/>
                <Route path='/Personal' component={Personal}/>
                <Route path='/Market' component={Market}/>
                <Route path='/Signout' component={Signout}/>
            </Switch>
        </main>
    );
}
export default Main;