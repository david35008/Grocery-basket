import React, { useState } from 'react';
import propTypes from 'prop-types';


function GroceryItem(props) {

    let itemConteiner = []
    props.items.forEach(element => {
       // debugger
        itemConteiner.push(<li key = {element} onClick={() => props.addItem(element)}>
            <button >+</button>
            <span>{element}</span>
        </li>)
    });

    return (
        <div>
            <ol>{itemConteiner}</ol>
        </div>
    );
}

export default GroceryItem;
