import React, { useState } from 'react';
import propTypes from 'prop-types';

function SearchArea(props) {


    const items = props.staticItemsList.slice();

    function searchItem(value) {
        let cloneList = items.slice();
        let lowerCaseValue = value.toLowerCase();
        let resaultsSearch = [];
        cloneList.forEach(product => {
            let lowerCaseName = product.toLowerCase();
            if (lowerCaseName.includes(lowerCaseValue)) {
                resaultsSearch = resaultsSearch.concat([product])
            };
        }); props.setItemsToSend(resaultsSearch)
    };

    return (
        <nav>
            <span>You can serach here:</span>
            <input onChange={event => { searchItem(event.target.value); props.setInputValue(event.target.value) }} placeholder='Item Name...' value={props.inputValue}></input>
        </nav>
    );
}

export default SearchArea;  