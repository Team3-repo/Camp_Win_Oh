// components/CartContainer.js
import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import ShoppingCartPage from '../ShoppingCart/ShoppingCartPage';

const CartContainer = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <OrderSummary cartItems={cartItems} setCartItems={setCartItems} />
            <ShoppingCartPage cartItems={cartItems} />
        </>
    );
};

export default CartContainer;
