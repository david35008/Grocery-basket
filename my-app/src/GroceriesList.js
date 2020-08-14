import React, { useState } from 'react';
import propTypes from 'prop-types';
import GroceryItem from './GroceryItem'


function GroceriesList(props) {

    const items = [
        'Strawberry','Blueberry','Orange','Banana','Apple','Carrot','Celery','Mushroom','Green Pepper',
        'Eggs','Cheese','Butter','Chicken','Beef','Pork','Fish','Rice','Pasta','Bread']
     
    return (
        <div>
           <h3>Groceries</h3>
           <GroceryItem addItem = {props.plusItem} items = {items}/>
        </div>
    );
}

export default GroceriesList;
