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
            <Link to='/schools/schoolshow.id'>Seattle</Link>
            <Link to='/schools/schoolshow.id'>Redmond</Link>
            <Link to='/schools/schoolshow.id'>Kirkland</Link>
            <Link to='/schools/schoolshow.id'>Bellevue</Link>
            <Link to='/schools/schoolshow.id'>Edmonds</Link>
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

