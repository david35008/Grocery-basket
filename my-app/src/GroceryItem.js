import React from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import {useSpring, animated} from 'react-spring';

function GroceryItem(props) {

    const iconStyle = { height: '22px', width: '22px', marginBottom: '-5px', color: '#E8E8E8' }

    const fade = useSpring({
        from:{
            transform:"translateX(-100vw)",
            opacity:0
        },
        to:{
            transform:"translateX(0)",
            opacity:1
        },
            delay:700,config:{duration:(props.index)*300}
    })

    const switchColor = (event) => {
        if (event.currentTarget.firstChild.style.color === 'green') {
            event.currentTarget.firstChild.style.color = '#E8E8E8'
        } else {
            event.currentTarget.firstChild.style.color = 'green';
        }
    }
    let createNewItem = <animated.li key={props.item} onClick={() => props.addNewItem(props.item)}
        onMouseOver={(event) => switchColor(event)}
        onMouseOut={(event) => switchColor(event)}
        style={fade}>
        <AddBoxOutlinedIcon style={iconStyle} />
        <span >{props.item}</span>
    </animated.li>


    return (
        createNewItem
    );
}

export default GroceryItem;