import React, { useState } from 'react';
import propTypes from 'prop-types';
import BasketItem from './BasketItem'

function BasketList(props) {

   const [items, setItems] = useState(props.items)

    return (
        <div>
           <h3>Basket</h3>
           <BasketItem newItem = {props.newItem}/>
        </div>
    );
}

export default BasketList;
