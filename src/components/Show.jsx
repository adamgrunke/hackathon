import React, { Component } from 'react'
import ShowDetails from './ShowDetails';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';



class Show extends Component {
   render() {
      return (
         <>
            <Link to='/' className='index-link'>Home</Link>
            <Link to='/schools/district' className='index-link'>Back</Link>
            <div className="avatar">
               <Avatar src="https://unsplash.com/photos/Xy-F5GptgR8" name="Hawthorn Elementary" value="86%" size={150} round="20px" />
            </div>
            <div className="detailsContainer">
               <div className='schoolName'>
               <h1 className='school-details'>Hawthorn Elementary</h1>
               </div>
               <div className='schoolRating'>
                  <h2>Rating   4.3 / 5</h2>
               </div>
               <div className="basic">
                  <h2>Basic Information</h2>
                  </div>
               <div className="all">
               < ShowDetails />
               <div className= "sidebar">
                  <div className='schoolWalk'>
                     <p>97%</p>
                     <h3>Walk Score</h3>
                  </div>
                  <div className='schoolRatio'>
                     <p>20:1</p>
                     <h3>Pupil-Teacher Ratio</h3>
                     
                  </div>
               </div>
               </div>
            </div>
                  <div className='schoolReviews'>
                     <h2>Reviews</h2>
                     <h4>-"I really enjoyed the fact that there were enough students to each teacher and that 
                        students got the help they needed!"
                     </h4>
                  </div>
         </>
      )
   }
}

export default Show
