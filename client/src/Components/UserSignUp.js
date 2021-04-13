import React, { Component } from 'react';
import Form from './Form';

export default class UserSignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
  }

  render() {
    const {
      firstName,
      lastName,
      email,
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
                value={email} 
                onChange={this.change} />
              <label htmlFor="password">Email Address</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                value={password} 
                onChange={this.change} />
              <label htmlFor="confirmPassword">Email Address</label>
              <input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="email" 
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
      email,
      password
    } = this.state;

    const user = {
      firstName,
      lastName,
      email,
      password
    };

    context.data.createUser(user)
      .then( errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          context.actions.signIn(email, password)
            .then(() => {
              this.props.history.push('/authenticated');
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