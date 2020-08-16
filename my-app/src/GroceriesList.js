import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceryItem from './GroceryItem'
import EcoIcon from '@material-ui/icons/Eco';


function GroceriesList(props) {

    return (
        <div>
            <h3><EcoIcon style={{height: '22px', width: '22px', marginBottom: '-4px'}}/>Groceries</h3>
            <GroceryItem addItem={props.plusItem} items={props.items} />
        </div>
    );
}

export default GroceriesList;
