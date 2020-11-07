import React from 'react';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import {useSpring, animated} from 'react-spring';


function BasketItem(props) {

    const fade = useSpring({
    
        from:{
            opacity:0,
            transform:"translateX(-1000px)"

        },
        to:{
            opacity:1,
            transform:"translateX(0px)"
        }
            ,delay:200,config:{duration:(props.index+1)*200}
                    
    })





    const iconStyle = { height: '22px', width: '22px', marginBottom: '-5px', color: '#E8E8E8' }
    const switchColor = (event) => {
        if (event.currentTarget.firstChild.style.color === 'red') {
            event.currentTarget.firstChild.style.color = '#E8E8E8'
        } else {
            event.currentTarget.firstChild.style.color = 'red';
        }
    }

    let createNewItem = <animated.li onClick={() => props.itemChecked(props.item.name)}
        onMouseOver={(event) => switchColor(event)}
        onMouseOut={(event) => switchColor(event)}
        style={fade}>
        <IndeterminateCheckBoxOutlinedIcon style={iconStyle} />
        <span style={props.spanStyle}>{props.item.amount} {props.item.name}</span>
    </animated.li>

    return (
        createNewItem
    );
};

export default BasketItem;