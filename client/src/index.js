import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';

import './index.css';
import config from './app.config';
import App from './App';
import * as serviceWorker from './serviceWorker';

function onAuthRequired({ history }) {
  history.push('/login');
}

ReactDOM.render(
  <BrowserRouter>
    <Security
      issuer={config.issuer}
      client_id={config.clientId}
      redirect_uri={config.redirectUri}
      onAuthRequired={onAuthRequired}
    >
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
