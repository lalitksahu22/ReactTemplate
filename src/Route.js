import React from 'react';
import App from './component/App';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}
export default RouteWrapper;