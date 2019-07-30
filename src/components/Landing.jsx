import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => (
    <div>
        <h2>Select your school district</h2>
        <div>
            <Link to='/schools/district'>Seattle</Link><br/>
            <Link to='/schools/district'>Redmond</Link><br/>
            <Link to='/schools/district'>Kirkland</Link><br/>
            <Link to='/schools/district'>Bellevue</Link><br/>
            <Link to='/schools/district'>Edmonds</Link>
        </div>
    </div>
);

export default Landing;