import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null); // 可以根據你的需求初始化

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};