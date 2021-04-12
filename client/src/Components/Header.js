import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    return (
      <header>
          <div className="wrap header--flex">
            <h1 className="header--logo"><a href="/">Courses</a></h1>
            <nav>
            {/* {authUser ?
              <React.Fragment>
                <span>Welcome, {authUser.name}</span>
                <Link to="/signout">Sign Out</Link>
              </React.Fragment>
            : */}
              <React.Fragment>
              <nav>
              <ul className="header--signedout">
                <li><Link className="signup" to="/signup">Sign Up</Link></li>
                <li><Link className="signin" to="/signin">Sign In</Link></li>
              </ul>
              </nav>
              </React.Fragment>
            {/*}*/}
            </nav>
          </div>
        </header>
    )
  }
}