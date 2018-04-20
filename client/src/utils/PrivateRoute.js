import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  const loggedIn = auth;
  return (
    <Route
      {...rest}
      render={props => {
        if (loggedIn === null) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(PrivateRoute);
