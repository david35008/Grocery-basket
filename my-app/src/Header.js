import React, { useState } from 'react';
import propTypes from 'prop-types';


function Header(props) {



  return (
    <div className='App-header'>
      <img src='https://www.iconsdb.com/icons/preview/white/shopping-basket-xxl.png' width="150" height="150" />
      <h1  >Hello, Basket!</h1>
    </div>
  );
}

// Header.propTypes = {
//     buttonClick: propTypes.oneOfType([propTypes.func, propTypes.string]),
//     initialNum: propTypes.number,
// }
export default Header;
