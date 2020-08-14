import React, { useState } from 'react';
import './BasketArea.css';
import propTypes from 'prop-types';
import GroceriesList from './GroceriesList'
import BasketList from './BasketList'

function BasketArea() {

    const [addedLastItem, setAddedItemList] = useState([
        { name: 'Strawberry', amount: 3 },
        { name: 'Blueberry', amount: 3 },
        { name: 'Orange', amount: 3 },
        { name: 'Banana', amount: 3 },
        { name: 'Apple', amount: 3 },
    ]);

    const addNewItem = (newItem) => {
        addedLastItem.some((item, i) => item.name === newItem) ?
            setAddedItemList(() => {
                let newList = addedLastItem.slice()
                newList[addedLastItem.findIndex(item => item.name === newItem)].amount += 0.5;
                return newList

            }) :
            setAddedItemList(() => {
                let newList = addedLastItem.concat(Array({ name: newItem, amount: 1 }
                ))
                return newList

            });
    }


    return (
        <div id="basketArea">
            <GroceriesList plusItem={addNewItem} />
            <BasketList newItem = {addedLastItem}/>
        </div>
    );
}

export default BasketArea;
