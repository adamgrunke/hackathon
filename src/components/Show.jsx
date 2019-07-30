import React, { Component } from 'react'
import ShowDetails from './ShowDetails';
import Avatar from 'react-avatar';



class Show extends Component {
   render() {
      return (
         <>
            <div className="avatar">
               <Avatar src="https://unsplash.com/photos/Xy-F5GptgR8" name="School" value="86%" size={150} round="20px" />
            </div>
            <div className="detailsContainer">
               <div className='schoolName'>
               <h1 className='school-details'>School Name</h1>
               </div>
               <div className='schoolRating'>
                  <h2>Rating   4.3 / 5</h2>
               </div>
               < ShowDetails />
               <div className= "sidebar">
                  <div className='schoolWalk'>
                     <h3>Walk Score</h3>
                  </div>
                  <div className='schoolRatio'>
                     <h3>Pupil-Teacher Ratio</h3>
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

export default Show
