import React from 'react'

function ShowDetails() {
   return (
      <div className='school-info'>
         <h1 className='school-details'>School Info:</h1>
         {props.school.name}
      </div>
   )
}

export default ShowDetails





