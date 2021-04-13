import React, { useState } from 'react';

const UserSignUp = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    console.log(e);
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.id === "emailAddress") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.history.push('/');
  }

  return (
    <div className="form--centered">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" defaultValue="" onChange={handleChange} />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" defaultValue="" onChange={handleChange} />
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" defaultValue="" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" defaultValue="" onChange={handleChange} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" defaultValue="" onChange={handleChange} />
        <button className="button" type="submit">Sign Up</button>
        <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
      </form>
      <p>Already have a user account? Click here to <a href="/signin">sign in</a>!</p>
    </div>
  )
}

export default UserSignUp;