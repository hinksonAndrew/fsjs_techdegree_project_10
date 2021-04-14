import React, { Component } from 'react';
// import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext();

export class Provider extends Component {
  // state = {
  //   authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  // };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    //const { authenticatedUser } = this.state;
    const value = {
      //authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
      }
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}