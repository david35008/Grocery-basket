import React, { useState } from 'react';
import propTypes from 'prop-types';


function Footer(props) {

   

    return (
        <div className='Footer'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png' width="50" height="50"/>
           <span>David Diamant</span>
        </div>
    );
}

// Footer.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default Footer;
