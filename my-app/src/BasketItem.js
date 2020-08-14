import React, { useState } from 'react';
import propTypes from 'prop-types';

function BasketItem(props) {


    let baketList = [];
    props.addedItemsList.forEach(item => {
        let spanStyle;
        if(item.checked) {
           spanStyle = {textDecoration: 'line-through'};
       } else {
           spanStyle = {textDecoration:'none'};
       };
            baketList.push((<li onClick={() => props.itemChecked(item.name)}>
            <button >-</button>
        <span style={spanStyle}>{item.amount} {item.name}</span>
        </li>));
    });

    return (
        <div>
            <ol>{baketList}</ol>
        </div>
    );
};

export default BasketItem;
