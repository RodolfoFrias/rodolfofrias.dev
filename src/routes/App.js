import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/page/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import ProjectProfile from '../containers/ProfileProject';
import Admin from '../containers/Admin';
import NotFound from '../containers/NotFound';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/project/:id" component={ProjectProfile} />
                <Route exact path="/dashboard" component={Admin} />
                <Route component={NotFound}/>
            </Switch> 
        </Layout>
    </BrowserRouter>
);

export default App;