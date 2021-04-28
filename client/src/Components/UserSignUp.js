import React, { Component } from 'react';
import Form from './Form';

/**
 * Renders a signup form that then sends all info to api to create a user using
 * the signup action in context.
 */
export default class UserSignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    errors: []
  }

  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
      errors
    } = this.state;

    return (
      <div className="form--centered">
        <h2>Sign Up</h2>
        <Form 
          cancel={this.cancel}
          errors={errors}
          submit={this.submit}
          submitButtonText="Sign Up"
          elements={() => (
            <React.Fragment>
              <label htmlFor="firstName">First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                type="text" 
                value={firstName} 
                onChange={this.change} />
              <label htmlFor="lastName">Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                type="text" 
                value={lastName} 
                onChange={this.change} />
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                value={confirmPassword} 
                onChange={this.change} />
            </React.Fragment>
          )}
        />
        <p>Already have a user account? Click here to <a href="/signin">sign in</a>!</p>
      </div>
    )
  }

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

    const {
      firstName,
      lastName,
      emailAddress,
      password
    } = this.state;

    const user = {
      firstName,
      lastName,
      emailAddress,
      password
    };

    context.data.createUser(user)
      .then( errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          context.actions.signIn(emailAddress, password)
            .then(() => {
              this.props.history.push('/');
            });
        }
      })
      .catch( err => {
        console.log(err);
        this.props.history.push('/error');
      });
  }
  
  cancel = () => {
    this.props.history.push('/');
  }
}