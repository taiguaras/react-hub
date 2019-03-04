import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../pages/Main';

const Routes = () => (
    <BrowserRouter>    
        <Switch>
            <Route exact path="/" component={Main} />       
            
            {/* <Route path="/stocks/:symbol" component={Detail} />  

            <Route path="/list" component={List} />   */}

        </Switch>
    </BrowserRouter>
);

export default Routes;