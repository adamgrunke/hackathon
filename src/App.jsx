import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Show from './components/Show';
import Index from './components/Index';
import Landing from './components/Landing';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import INFO from './INFO';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolList: INFO.schoolList,
    
    }
  }

  

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <div className='container'>
            <Route exact path='/' render={props => (
              <div>
              <Header />
              <Landing />
              </div>
            )}/>
              <Route exact path='/schools/district' 
                  render={props => ( 
              <div>
                <Header />
                <Index schools={this.state.schools} />
              </div>
              )} />
              
              <Route exact path='/schools/schoolshow.id' 
                  render={props => ( 
              <div>
                <Show schools={this.state.schools} />
              </div>
              )} />

            </div> 
          </div>
        </>
      </Router>
    );
  }
}

export default App;
