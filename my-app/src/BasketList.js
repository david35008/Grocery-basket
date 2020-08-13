import React, { useState } from 'react';
import propTypes from 'prop-types';
import BasketItem from './BasketItem'

function BasketList(props) {

   

    return (
        <div>
           <h1>BasketList</h1>
           <BasketItem/>
        </div>
    );
}

// BasketList.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default BasketList;
