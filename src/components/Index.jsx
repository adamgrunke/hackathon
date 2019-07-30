import React from 'react';
//import IndexShow from './components/IndexShow';
import PropTypes from 'prop-types';

class Index extends React.Component {
  state = {
    school: []
  }
  
  render() {
    return this.props.schools.map( (school) => (
      <>
        {/* <IndexShow key={school.schoolList} 
                  school={school} 
                  
        /> */}
      </>
    ))
  } 
}

Index.propTypes = {
  school: PropTypes.array.isRequired
}

export default Index;

// import Index from './components/Index';
