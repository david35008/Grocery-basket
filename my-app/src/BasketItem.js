import React, { useState } from 'react';
import propTypes from 'prop-types';

function BasketItem(props) {

    let addedItemList = props.newItem
    let newList1 = []
    addedItemList.forEach(element => {
        newList1.push((<li>
            <button>-</button>
        <span>{element.amount}{element.name}</span>
        </li>))
    })

    return (
        <div>
            <ol>{newList1}</ol>
        </div>
    );
}

export default BasketItem;
