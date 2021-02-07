import React from 'react';
import ReactDOM from 'react-dom';
import App from "./routes/App";
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,        
    document.getElementById('app')
);