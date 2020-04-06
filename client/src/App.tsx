import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FirebaseProvider from './components/Auth/Auth';
import Hello from './components/Hello';
import LoginView from './components/LoginView/LoginView';
import RegisterView from './components/RegisterView/RegisterView';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <div className="App">
          <Route exact path="/">
            LightSide
            <Link to="/hello">Hello</Link>
          </Route>
          <PrivateRoute
            path="/hello"
            compiler="TS"
            framework="React"
            component={Hello}
          />
          <Route path="/login" component={LoginView} />
          <Route path="/signup" component={RegisterView} />
        </div>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
