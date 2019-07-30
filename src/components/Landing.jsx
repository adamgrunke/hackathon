import React from 'react';

const Landing = (props) => (
    <div>
        <h2>Select your school district</h2>
        <select>
            <option value="seattle">Seattle</option>
            <option value="redmond">Redmond</option>
            <option value="kirkland">Kirkland</option>
            <option value="bellevue">Bellevue</option>
            <option value="edmonds">Edmonds</option>
        </select>
    </div>
);

export default Landing;