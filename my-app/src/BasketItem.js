import React, { useState } from 'react';
import propTypes from 'prop-types';
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

    const switchDecoration = (event) => {
        debugger
        if (event.currentTarget.style.textDecoration === 'line-through') {
            event.currentTarget.style.textDecoration = '';
        } else {
            event.currentTarget.style.textDecoration = 'line-through';
        }
    }

    let baketList = [];
    props.addedItemsList.forEach(item => {
        baketList.push(
            <li onClick={(event) => switchDecoration(event)}
                onMouseOver={(event) => switchColor(event)}
                onMouseOut={(event) => switchColor(event)}>
                <IndeterminateCheckBoxOutlinedIcon style={iconStyle} />
                <span >{item.amount} {item.name}</span>
            </li>);
    });

    return (
        <div>
            <ol>{baketList}</ol>
        </div>
    );
};

export default BasketItem;
