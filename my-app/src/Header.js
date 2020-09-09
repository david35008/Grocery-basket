import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header(props) {

  return (
    <div className='App-header'>
                <ShoppingBasketIcon style={{height: '150px', width: '150px', color: 'white'}}/>
      <h1  >Hello, Basket!</h1>
    </div>
  );
}

export default Header;
