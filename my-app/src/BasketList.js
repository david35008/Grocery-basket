import React, { useState } from 'react';
import propTypes from 'prop-types';
import BasketItem from './BasketItem'

function BasketList(props) {
    return (
        <div>
            <button className='clearButton' onClick={() => props.clearBasket()}></button>
            <h3>Basket</h3>
            <BasketItem addedItemsList={props.addedItemsList} itemChecked={props.itemChecked} />
        </div>
    );
}

export default BasketList;
