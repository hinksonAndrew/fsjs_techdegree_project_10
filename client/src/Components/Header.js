import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header Component
 * Uses context to determine if an authorized user is present.
 * If so header displays name of user and also shows sign out.
 */
export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;

    return (
      <header>
          <div className="wrap header--flex">
            <h1 className="header--logo"><Link to="/">Courses</Link></h1>
            <nav>
            {authUser ?
              <React.Fragment>
                <nav>
                  <ul className="header--signedin">
                    <li>Welcome, {authUser.firstName} {authUser.lastName}</li>
                    <li><Link to="/signout">Sign Out</Link></li>
                  </ul>
                </nav>
              </React.Fragment>
            :
              <React.Fragment>
                <nav>
                  <ul className="header--signedout">
                    <li><Link className="signup" to="/signup">Sign Up</Link></li>
                    <li><Link className="signin" to="/signin">Sign In</Link></li>
                  </ul>
                </nav>
              </React.Fragment>
            }
            </nav>
          </div>
        </header>
    )
  }
}