import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceryItem from './GroceryItem'


function GroceriesList(props) {

    const items = [
        'Strawberry','Blueberry','Orange','Banana','Apple','Carrot','Celery','Mushroom','Green Pepper',
        'Eggs','Cheese','Butter','Chicken','Beef','Pork','Fish','Rice','Pasta','Bread']

        const addItem = (item) => {
            alert(item)
            //sendItemToBasket
        }

    return (
        <div>
           <h3>Groceries</h3>
           <GroceryItem addItem = {addItem} items = {items}/>
        </div>
    );
}

// GroceriesList.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default GroceriesList;
