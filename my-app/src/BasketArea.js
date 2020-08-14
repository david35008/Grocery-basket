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
        let stop = false;
        let cloneList = addedLastItem.slice();
        cloneList.forEach((item) => {
            if (item.name === newItem) {
                item.amount++;
                stop = true;
            }
        });
        if (stop) { setAddedItemList(cloneList) }
        else {
            cloneList.push({ name: newItem, amount: 1 })
            setAddedItemList(cloneList);
        }
    }

    return (
        <div className="main">
            <GroceriesList plusItem={addNewItem} />
            <BasketList newItem={addedLastItem} />
        </div>
    );
}

export default BasketArea;
