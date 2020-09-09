import React from 'react';
import GroceryItem from './GroceryItem'
import EcoIcon from '@material-ui/icons/Eco';


function GroceriesList(props) {

    const items = [
        'Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green Pepper',
        'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread']

    window.onload = () => {
        props.setstaticItemsList(items)
        props.setItemsToSend(items)
    }

    let itemConteiner = []
    props.itemsToSend.forEach((item, index) => {
        itemConteiner.push(<GroceryItem item={item} key={item+index} addNewItem={props.addNewItem} index={index} />)
    })

    return (
        <div>
            <h3><EcoIcon style={{ height: '22px', width: '22px', marginBottom: '-4px' }} />Groceries</h3>
            <ol>{itemConteiner}</ol>
        </div>
    );
}

export default GroceriesList;