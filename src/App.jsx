import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Index from './components/Index';
import Landing from './components/Landing';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  state = {
    schools: []
  }
  
  render() {
    return (
      <Router>
        <>
          <div className="App">
            <div className='container'>
              <Header />
              <Landing />
              {/* <Route exact path='/index' render={props => (
              <Index schools={this.state.schools} />
              )} /> */}
            </div>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
