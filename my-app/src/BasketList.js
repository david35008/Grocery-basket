import React, { useState } from 'react';
import propTypes from 'prop-types';
import BasketItem from './BasketItem'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function BasketList(props) {

  
    const [style, setStyle] = useState({color: '#FF7D7D'})
    return (
        <div>
            <div className='listName'  >
            <h3><ShoppingBasketIcon style={{height: '22px', width: '22px', marginBottom: '-4px'}}/>Basket</h3>
            <IconButton aria-label="delete" style={style}>
            <DeleteIcon  onClick={() => props.clearBasket()}   onMouseOver={() =>setStyle({color: 'red'})} onMouseOut={() =>setStyle({ color: '#FF7D7D'})} className='MuiRating-iconHover' />
            </IconButton>
            </div>
            <BasketItem addedItemsList={props.addedItemsList}/>
        </div>
    );
}

export default BasketList;
