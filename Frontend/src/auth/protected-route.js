import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { CircularProgress } from '@material-ui/core';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () =>
        <div id="loading-component">
          <CircularProgress color="primary" size={100} />
        </div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;