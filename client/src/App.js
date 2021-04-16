import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//import styles
import './styles/reset.css';
import './styles/global.css';

//import components
import Header from './Components/Header';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import CreateCourse from './Components/CreateCourse';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import UserSignOut from './Components/UserSignOut';

// import context
import withContext from './Context';

// import HOC for protected routes
import PrivateRoute from './PrivateRoute';

// link context with component
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);


function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderWithContext />
        <Switch>
          <Route exact path="/" render={() => <Courses />} />
          <Route path="/courses/:id" component={CourseDetail} />
          <PrivateRoute path="/create" component={CreateCourse} />
          {/* <PrivateRoute path="/courses/:id/update" component={UpdateCourse} /> */}
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
