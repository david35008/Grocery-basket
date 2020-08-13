import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceriesList from './GroceriesList'
import BasketList from './BasketList'


function BasketArea(props) {

   

    return (
        <div>
           <h1>BasketArea</h1>
           <GroceriesList/>
           {/* <BasketList/>     */}
        </div>
    );
}

// BasketArea.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default BasketArea;
