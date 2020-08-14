import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceriesList from './GroceriesList'
import BasketList from './BasketList'

function BasketArea() {

    const [addedItemsList, setAddedItemList] = useState([
        { name: 'Strawberry', amount: 3, checked: false },
        { name: 'Blueberry', amount: 3, checked: false },
        { name: 'Orange', amount: 3, checked: false },
        { name: 'Banana', amount: 3, checked: false },
        { name: 'Apple', amount: 3, checked: false },
    ]);

    const addNewItem = (newItem) => {
        let ifExist = false;
        let cloneList = addedItemsList.slice();
        if (cloneList[0].amount === undefined) { cloneList.splice(0) }
        cloneList.forEach((item) => {
            if (item.name === newItem) {
                item.amount++;
                ifExist = true;
            }
        });
        if (ifExist) { setAddedItemList(cloneList) 
        }else {
            cloneList.push({ name: newItem, amount: 1, checked: false })
            setAddedItemList(cloneList);
        }
    }

    const itemChecked = (itemName) => {
        let cloneList = addedItemsList.slice()
        cloneList.forEach((item) => {
            if (item.name === itemName) {
                item.checked ? item.checked = false : item.checked = true
            }
        }); setAddedItemList(cloneList)
    }

    const clearBasket = () => {
        setAddedItemList([{ name: 'Your basket is empty!' }])
    }

    return (
        <div className="main">
            <GroceriesList plusItem={addNewItem} />
            <BasketList addedItemsList={addedItemsList} itemChecked={itemChecked} clearBasket={clearBasket} />
        </div>
    );
}

export default BasketArea;
