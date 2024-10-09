// App.js
import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ShoppingCartPage from './ShoppingCartPage';
import Navbar from '../../components/event/navbar'; // 假設有 Navbar 組件

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <ProductDetails cartItems={cartItems} setCartItems={setCartItems} />
      <ShoppingCartPage cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;