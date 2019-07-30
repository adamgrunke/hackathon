import React from 'react';
import IndexShow from './IndexShow';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  state = {
    school: []
  }
  
  render() {
    // return this.props.schools.map( (school) => (
      return (
      <>
      
        <Link to='/' className='index-link'>Home</Link>
        <h1>Hello You</h1>
        <div>
            <div>
            <Link to='/schools/seattle/hawthorne'>
              <h1>Hawthorne</h1>
            </Link>
            <Link to='/schools/seattle/westel'>
              <h1>West Seattle Elementary</h1>
            </Link>
            <Link to='/schools/seattle'>
              <h1>Seattle3</h1>
            </Link>
            <Link to='/schools/seattle'>
              <h1>Seattle4</h1>
            </Link>
            <Link to='/schools/seattle'>
              <h1>Seattle5</h1>
            </Link>
            </div>
        </div>
        {/* <IndexShow key={school.district} 
                  school={school}  */}
                  
        
      </>
    //))
      )
  } 
}

Index.propTypes = {
  schools: PropTypes.array.isRequired
}

export default Index;

