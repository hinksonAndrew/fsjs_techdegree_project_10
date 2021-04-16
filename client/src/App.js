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

// import context
import withContext from './Context';

// link context with component
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);


function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderWithContext />
        <Switch>
          <Route exact path="/" render={() => <Courses />} />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/createcourse" component={CreateCourse} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
