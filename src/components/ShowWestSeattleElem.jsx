import React, { Component } from 'react'
import ShowDetails from './ShowDetails';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';



class ShowWestSeattle extends Component {
   render() {
      return (
         <>
            <Link to='/' className='index-link'>Home</Link>
            <Link to='/schools/district' className='index-link'>Back</Link>
            <div className="avatar">
               <Avatar src="https://unsplash.com/photos/Xy-F5GptgR8" name="West Seattle Elementary" value="86%" size={150} round="20px" />
            </div>
            <div className="detailsContainer">
               <div className='schoolName'>
               <h1 className='school-details'>West Seattle Elementary</h1>
               </div>
               <div className='schoolRating'>
                  <h2>Rating   2 / 5</h2>
               </div>
               <div className="basic">
               <h2>Basic Information:</h2></div>
               <div className="all">
               < ShowDetails />
               <div className= "sidebar">
                  <div className='schoolWalk'>
                     <h3>Walk Score: 59 Somewhat walkable</h3>
                     <h3>Bike Score: 52 Bikeable</h3>
                  </div>
                  <div className='schoolRatio'>
                     <h3>Teacher Ratio: 13.4</h3>
                     <h3>Number of Students: 425</h3>
                  </div>
               </div>
               </div>
                  <div className='schoolReviews'>
                     <h2>Reviews</h2>
                     <h4>-"Really great school for little ones to make friends. Great cooperative environment!"
                     </h4>
                  </div>
               
            </div>
         </>
      )
   }
}

export default ShowWestSeattle
