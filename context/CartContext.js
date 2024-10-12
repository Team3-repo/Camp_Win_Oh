import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
        setCartItems(JSON.parse(storedItems)); // 從 localStorage 獲取數據
    }
}, []);

  

  // 添加 clearCart 函數
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // 清理 localStorage
};

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};