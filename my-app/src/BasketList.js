import React, { useState } from 'react';
import propTypes from 'prop-types';
import BasketItem from './BasketItem'

function BasketList(props) {

    const [items, setItems] = useState(props.items)

    return (
        <div>
            <button onClick={() => props.clearBasket()}>clear</button>
            <h3>Basket</h3>
            <BasketItem addedItemsList={props.addedItemsList} itemChecked={props.itemChecked} />
        </div>
    );
}

export default BasketList;
