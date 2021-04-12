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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Courses />} />
          <Route path="/courses/:id" component={CourseDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
