import React, { useState } from 'react';
import propTypes from 'prop-types';


function SearchArea(props) {


    const onInputChange = event => {
        props.searchItem(event.target.value);
    }

    return (
        <nav>
            <span>You can serach here:</span>
            <input onChange={onInputChange} placeholder='Item Name...' value={props.serachPlaceHolder}></input>
        </nav>
    );
}

// SearchArea.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default SearchArea;  