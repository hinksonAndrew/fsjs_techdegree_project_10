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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
