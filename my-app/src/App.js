import React from 'react';
import './App.css';
import Header from './Header'
import SearchArea from './SearchArea'
import BasketArea from './BasketArea'
import Footer from './Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchArea />
      <BasketArea />
      <Footer />
    </div>
  );
}

export default App;
