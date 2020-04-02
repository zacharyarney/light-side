import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../Auth/Auth';

interface PrivateRouteProps {
  component: React.ReactType;
  [propName: string]: any
}

function PrivateRoute({
  component: RouteComponent,
  ...rest
}: PrivateRouteProps) {
  const { currentUser } = useContext(FirebaseContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
