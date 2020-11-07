import React, { useState } from 'react';
import SearchArea from './SearchArea'
import GroceriesList from './GroceriesList'
import BasketList from './BasketList'

function BasketArea(props) {

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
        if (!ifExist) {
            cloneList.push({ name: newItem, amount: 1, checked: false })
        }
        setAddedItemList(cloneList)
        setItemsToSend(staticItemsList)
        setInputValue('')
    }

    const itemChecked = (itemName) => {
        let cloneList = addedItemsList.slice()
        cloneList.forEach((item) => {
            if (item.name === itemName) {
                item.checked ? item.checked = false : item.checked = true
            }
        }); setAddedItemList(cloneList)
    }

    const [inputValue, setInputValue] = useState('')
    const [staticItemsList, setstaticItemsList] = useState([])
    const [itemsToSend, setItemsToSend] = useState([])

    return (
        <div>
            <SearchArea setItemsToSend={setItemsToSend} staticItemsList={staticItemsList} inputValue={inputValue} setInputValue={setInputValue} />
            <div className="main">
                <GroceriesList setstaticItemsList={setstaticItemsList} setItemsToSend={setItemsToSend} addNewItem={addNewItem} itemsToSend={itemsToSend} />
                <BasketList addedItemsList={addedItemsList} setAddedItemList={setAddedItemList} itemChecked={itemChecked} />
            </div>
        </div>
    );
}

export default BasketArea;