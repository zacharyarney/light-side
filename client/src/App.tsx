import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FirebaseProvider from './components/Auth/Auth';
import Hello from './components/Hello';
import LoginView from './components/LoginView/LoginView';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <div className="App">
          <Route exact path="/">
            Hey!
          </Route>
          <PrivateRoute
            path="/hello"
            component={Hello}
            compiler="TS"
            framework="React"
          />
          <Route path="/login" component={LoginView} />
          <Hello compiler="TS" framework="React" />
        </div>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
