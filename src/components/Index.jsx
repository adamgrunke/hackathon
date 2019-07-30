import React from 'react';
import IndexShow from './IndexShow';
import PropTypes from 'prop-types';

class Index extends React.Component {
  state = {
    school: []
  }
  
  render() {
    // return this.props.schools.map( (school) => (
      return (
      <>
        <h1>Hello</h1>
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

// import Index from './components/Index';
