import React, { useState } from 'react';
import propTypes from 'prop-types';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header(props) {



  return (
    <div className='App-header'>
                <ShoppingBasketIcon style={{height: '150px', width: '150px', color: 'white'}}/>
      <h1  >Hello, Basket!</h1>
    </div>
  );
}

// Header.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default Header;
