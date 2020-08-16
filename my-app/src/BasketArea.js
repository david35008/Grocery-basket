import React, { useState, Children } from 'react';
import propTypes from 'prop-types';
import SearchArea from './SearchArea'
import GroceriesList from './GroceriesList'
import BasketList from './BasketList'


function BasketArea(props) {

    const [addedItemsList, setAddedItemList] = useState([
        { name: 'Strawberry', amount: 3},
        { name: 'Blueberry', amount: 3},
        { name: 'Orange', amount: 3},
        { name: 'Banana', amount: 3},
        { name: 'Apple', amount: 3},
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
            cloneList.push({ name: newItem, amount: 1})
            setAddedItemList(cloneList);
        }
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
                <BasketList addedItemsList={addedItemsList} clearBasket={clearBasket}/>
            </div>
        </div>
    );
}

export default BasketArea;
