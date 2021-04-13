import React, {useState} from 'react';

const UserSignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.history.push('/');
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="form--centered">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailAddress">Email Address</label>
        <input required id="emailAddress" name="emailAddress" type="email" defaultValue="" onChange={handleChangeEmail} />
        <label htmlFor="password">Password</label>
        <input required id="password" name="password" type="password" defaultValue="" onChange={handleChangePass} />
        <button className="button" type="submit">Sign In</button>
        <button type="button" className="button button-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
      <p>Don't have a user account? Click here to <a href="/signup">sign up</a>!</p>
    </div>
  );
}

export default UserSignIn;