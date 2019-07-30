import React from 'react';
import PropTypes from 'prop-types';

class IndexShow extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { schools, district } = this.props.schools;
    return (
      <div style={this.getStyle()}>
        <p>
          { schools }
          { district }
          Hello
        </p>
      </div>
    )
  } 
}

IndexShow.propTypes = {
  schools: PropTypes.object.isRequired
}
export default IndexShow;