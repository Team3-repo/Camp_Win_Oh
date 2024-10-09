import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 新增商品至購物車
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // 更新購物車中的商品
  const updateCartItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id ? item : i))
    );
  };

  // 計算購物車總金額
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, updateCartItem, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 自定義 hook 來使用 CartContext
export const useCart = () => useContext(CartContext);
