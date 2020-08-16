import React, { useState } from 'react';
import propTypes from 'prop-types';
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
    let itemConteiner = []
    props.items.forEach(item => {
        itemConteiner.push(<li key={item} onClick={() => props.addItem(item)}
            onMouseOver={(event) => switchColor(event)}
            onMouseOut={(event) => switchColor(event)}>
            <AddBoxOutlinedIcon style={iconStyle} />
            <span >{item}</span>
        </li>)
    });

    return (
        <div>
            <ol>{itemConteiner}</ol>
        </div>
    );
}

export default GroceryItem;
