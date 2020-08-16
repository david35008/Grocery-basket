import React, { useState } from 'react';
import BasketItem from './BasketItem'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function BasketList(props) {

    const [style, setStyle] = useState({ color: '#FF7D7D' })

    let baketList = [];
    props.addedItemsList.forEach(item => {
        let spanStyle;
        if (item.checked) {
            spanStyle = { textDecoration: 'line-through' };
        } else {
            spanStyle = { textDecoration: 'none' };
        };
        baketList.push(<BasketItem itemChecked={props.itemChecked} spanStyle={spanStyle} item={item} />)
    })

    return (
        <div>
            <div className='listName'  >
                <h3><ShoppingBasketIcon className='ShoppingBasketIcon' />Basket</h3>
                <IconButton aria-label="delete" style={style} onClick={() => props.setAddedItemList([{ name: 'Your basket is empty!' }])}>
                    <DeleteIcon onMouseOver={() => setStyle({ color: 'red' })} onMouseOut={() => setStyle({ color: '#FF7D7D' })} />
                </IconButton>
            </div>
            <ol>{baketList}</ol>
        </div>
    );
}

export default BasketList;