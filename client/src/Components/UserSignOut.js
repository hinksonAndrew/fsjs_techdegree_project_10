/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

/**
 * User is signed out using signOut from context and redirected to course directory.
 */
export default ({ context }) => {
  useEffect(() => context.actions.signOut());

  return (
    <Redirect to="/" />
  );
}