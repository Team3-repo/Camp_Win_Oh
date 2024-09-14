/**
 **
 */
import React from "react";
import CartItem from "./CartItem";
import CouponSection from "./CouponSection";
import TotalSection from "./TotalSection";

function ShoppingCartContent() {
  return (
    <main className="content">
      <h1 className="pageTitle">商品</h1>
      <div className="divider" />
      <CartItem />
      <div className="divider" />
      <CouponSection />
      <TotalSection />
      <style jsx>{`
        .content {
          display: flex;
          margin-top: 118px;
          width: 90%;
          flex-direction: column;
          padding: 0 44px;
        }
        .pageTitle {
          align-self: start;
          margin-left: 78px;
          color: var(--black, #000);
          font: 400 24px Inter, sans-serif;
        }
        .divider {
          margin-top: 11px;
          width: 1315px;
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
