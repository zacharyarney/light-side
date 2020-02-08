import React from 'react';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { Route } from 'react-router-dom';
import './App.css';
import config from './app.config';
import HomeView from './components/HomeView/HomeView';
import LoginView from './components/LoginView/LoginForm';

function App() {
  console.log('url in App: ', config)
  return (
    <div className="App">
      <SecureRoute exact path="/home" component={HomeView} />
      <Route path="/login" render={() => <LoginView baseUrl={config.url} />} />
      <Route exact path="/implicit/callback" component={ImplicitCallback} />
    </div>
  );
}

export default App;
