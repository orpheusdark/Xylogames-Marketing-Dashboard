import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';
import Games from './components/Games';
import Analytics from './components/Analytics';
import Assets from './components/Assets';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/campaigns" component={Campaigns} />
          <PrivateRoute path="/games" component={Games} />
          <PrivateRoute path="/analytics" component={Analytics} />
          <PrivateRoute path="/assets" component={Assets} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

