import React from 'react';
import axios from 'axios';
import Header from './components/Header';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  state = {

  }
  render() {
    return (
      <Router>
        <>
          <div className="App">
            <div className='container'>
              <Header />
            </div>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
