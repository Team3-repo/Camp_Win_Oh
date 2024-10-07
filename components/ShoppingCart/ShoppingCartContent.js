import React from "react";
import CartItem from "./CartItem";
import CouponSection from "./CouponSection";
import TotalSection from "./TotalSection";
import { useCart } from '@/context/CartContext';  // 引入 useCart


function ShoppingCartContent() {
  const { cartItems, setCartItems } = useCart();  // 使用 cartItems 和 setCartItems
  

  return (
    <main className="content">
      <h1 className="pageTitle">商品</h1>
      <div className="divider" />
      {cartItems.map((item, index) => (
        <CartItem 
          key={index} 
          item={item} 
          cartItems={cartItems} 
          setCartItems={setCartItems} 
        /> 
        /* 傳遞 item 和狀態管理函數 */
      ))}
      <div className="divider" />
      <CouponSection />
      {/* 傳遞 totalAmount 到 TotalSection */}
      <TotalSection />
      <style jsx>{`
        .content {
          display: flex;
          margin-top: 80px;
          width: 90%;
          flex-direction: column;
          padding: 0 44px;
        }
        .pageTitle {
          align-self: start;
          margin-left: 78px;
          color: var(--black, #000);
          font: 400 24px Inter, sans-serif;
          margin-bottom: -10px;
        }
        .divider {
          margin-top: 20px;
          width: 1440px;
          max-width: 100%;
          height: 1px;
          border: 1px solid #9c9c9c;
        }
        @media (max-width: 991px) {
          .content {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
          .pageTitle {
            margin-left: 10px;
          }
        }
      `}</style>
    </main>
  );
}

export default ShoppingCartContent;
