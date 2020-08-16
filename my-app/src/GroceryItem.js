import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';


function GroceryItem(props) {

    const iconStyle = { height: '22px', width: '22px', marginBottom: '-5px', color: '#E8E8E8' }

    const switchColor = (event) => {
        if (event.currentTarget.firstChild.style.color === 'green') {
            event.currentTarget.firstChild.style.color = '#E8E8E8'
        } else {
            event.currentTarget.firstChild.style.color = 'green';
        }
    }
    let createNewItem = <li key={props.item} onClick={() => props.addNewItem(props.item)}
        onMouseOver={(event) => switchColor(event)}
        onMouseOut={(event) => switchColor(event)}>
        <AddBoxOutlinedIcon style={iconStyle} />
        <span >{props.item}</span>
    </li>


    return (
        createNewItem
    );
}

export default GroceryItem;