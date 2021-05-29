/**
 * Created by: Sagar Bajpai (ashversache@gmail.com)
 */

import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Dashboard from './pages/dashboard';

export const App = (): React.ReactElement => (
    <Router>
        <Switch>
            <Route path="/" exact component={Dashboard} />
        </Switch>
    </Router>
);

ReactDom.render(<App />, document.getElementById('root'));
