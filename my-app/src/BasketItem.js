import React, { useState } from 'react';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

function BasketItem(props) {

    const iconStyle = { height: '22px', width: '22px', marginBottom: '-5px', color: '#E8E8E8' }
    const switchColor = (event) => {
        if (event.currentTarget.firstChild.style.color === 'red') {
            event.currentTarget.firstChild.style.color = '#E8E8E8'
        } else {
            event.currentTarget.firstChild.style.color = 'red';
        }
    }

    let createNewItem = <li onClick={() => props.itemChecked(props.item.name)}
        onMouseOver={(event) => switchColor(event)}
        onMouseOut={(event) => switchColor(event)}>
        <IndeterminateCheckBoxOutlinedIcon style={iconStyle} />
        <span style={props.spanStyle}>{props.item.amount} {props.item.name}</span>
    </li>

    return (
        createNewItem
    );
};

export default BasketItem;