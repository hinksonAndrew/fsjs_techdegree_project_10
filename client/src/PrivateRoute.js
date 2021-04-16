/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

/**
 * HOC for configuring routes that are protected
 * Used for creating and updating courses.
 */
export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
          render={props => context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />
      )}
    </Consumer>
  );
};