import React, { useState, Children } from 'react';
import propTypes from 'prop-types';
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
   const [placeHolder,setPlaceHolder] = useState('')
    const addNewItem = (newItem) => {
        setPlaceHolder('');
        searchItem('')
        let ifExist = false;
        let cloneList = addedItemsList.slice();
        if (cloneList[0].amount === undefined) { cloneList.splice(0) }
        cloneList.forEach((item) => {
            if (item.name === newItem) {
                item.amount++;
                ifExist = true;
            }
        });
        if (ifExist) {
            setAddedItemList(cloneList)
        } else {
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

    const items = [
        'Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green Pepper',
        'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread']

    const [itemsToSend, setItemsToSend] = useState(items)
    function searchItem(value) {
        setPlaceHolder(value);
        debugger
        let cloneList = items.slice();
        let lowerCaseValue = value.toLowerCase();
        let resaultsSearch = [];
        cloneList.forEach(product => {
            let lowerCaseName = product.toLowerCase();
            if (lowerCaseName.includes(lowerCaseValue)) {
                resaultsSearch = resaultsSearch.concat([product])
            };
        }); setItemsToSend(resaultsSearch)
    };

    return (
        <div>
            <SearchArea searchItem={searchItem} serachPlaceHolder={placeHolder}/>
            <div className="main">
                <GroceriesList plusItem={addNewItem} items={itemsToSend} />
                <BasketList addedItemsList={addedItemsList} itemChecked={itemChecked} clearBasket={clearBasket} />
            </div>
        </div>
    );
}

export default BasketArea;
