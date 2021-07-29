import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from './LandingPage';
import { AppLayout } from './AppLayout';
import { ProtectedRoute } from './ProtectedRoute';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.css';

function App() {
  return (
    <div className="App">
      <center>
        <h1>Protected Routes in React</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
      </center>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
