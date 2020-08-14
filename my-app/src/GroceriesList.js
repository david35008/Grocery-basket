import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceryItem from './GroceryItem'


function GroceriesList(props) {

    return (
        <div>
            <h3>Groceries</h3>
            <GroceryItem addItem={props.plusItem} items={props.items} />
        </div>
    );
}

export default GroceriesList;
