import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceryItem from './GroceryItem'


function GroceriesList(props) {

   

    return (
        <div>
           <h1>GroceriesList</h1>
           <GroceryItem/>
        </div>
    );
}

// GroceriesList.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default GroceriesList;
