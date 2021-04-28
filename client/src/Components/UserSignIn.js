import React, { Component } from 'react';
import Form from './Form';

/**
 * Allows user to signin to get authorzied to update/delete their courses.
 */
export default class UserSignIn extends Component {
  state = {
    emailAddress: '',
    password: '',
    errors: []
  }

  render() {
    const {
      emailAddress,
      password,
      errors
    } = this.state;
  
    return (
      <div className="form--centered">
        <h2>Sign In</h2>
        <Form 
          cancel = {this.cancel}
          errors = {errors}
          submit = {this.submit}
          submitButtonText = "Sign In"
          elements = {() => (
            <React.Fragment>
              <label htmlFor="emailAddress">Email Address</label>
              <input
                id="emailAddress" 
                name="emailAddress" 
                type="email" 
                value={emailAddress} 
                onChange={this.change} />
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={this.change} />
            </React.Fragment>
          )}
        />
        <p>Don't have a user account? Click here to <a href="/signup">sign up</a>!</p>
      </div>
    );
  }

  /**
   * Updates state based on name of field.
   * @param {event} event 
   */
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    const { context } = this.props;
    const { emailAddress, password } = this.state;
    context.actions.signIn(emailAddress, password)
      .then( (user) => {
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ] };
          });
        } else {
          this.props.history.push('/');
          console.log(`SUCCESS! ${emailAddress} is now signed in!`);
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push('/error');
      })
  }

  cancel = () => {
    this.props.history.push('/');
  }
}