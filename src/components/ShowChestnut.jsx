import React, { Component } from 'react'
import ShowDetails from './ShowDetails';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';



class ShowChestnut extends Component {
   render() {
      return (
         <>
            <Link to='/' className='index-link'>Home</Link>
            <Link to='/schools/district' className='index-link'>Back</Link>
            <div className="avatar">
               <Avatar src="https://unsplash.com/photos/Xy-F5GptgR8" name="School" value="86%" size={150} round="20px" />
            </div>
            <div className="detailsContainer">
               <div className='schoolName'>
               <h1 className='school-details'>Chestnut Hill Academy</h1>
               </div>
               <div className='schoolRating'>
                  <h2>Rating   n/a </h2>
               </div>
               <div className="basic">
               <h2>Basic Information:</h2></div>
               <div className="all">
               < ShowDetails />
               <div className= "sidebar">
                  <div className='schoolWalk'>
                     <h3>Walk Score: 43 Car Dependent</h3>
                     <h3>Bike Score: 46 Somewhat bikeable</h3>
                  </div>
                  <div className='schoolRatio'>
                     <h3>Teacher Ratio: 11.5</h3>
                     <h3>Number of students: 254</h3>
                  </div>
               </div>
               </div>
                  <div className='schoolReviews'>
                     <h2>Reviews</h2>
                  </div>
               
            </div>
         </>
      )
   }
}

export default ShowChestnut
