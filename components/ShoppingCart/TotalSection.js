/**
 **
 */
import React from "react";
import Link from "next/link";
import { useCart } from '@/context/CartContext';  // 修改1：引入 useCart


function TotalSection({ totalAmount }) { // 接收 totalAmount 作為屬性

  // 可用可不用，單純回到上一頁的效果
  const handleBack = () => {
    window.history.back(); // 返回上一頁
  };

  return (
    <section className="totalSection">
      <Link href={`/cart/1CampingStore`}>
      <button className="continueShoppingButton">←繼續選購</button>
      </Link>
      <div className="checkoutInfo">
        <div className="totalLabel">總計</div>
        {/* 修改：使用傳遞進來的 totalAmount 來顯示總金額 */}
        <div className="totalAmount">NT${totalAmount}</div>
        <Link href="/cart/4CheckoutInfo">
        <button className="checkoutButton">前往結賬→</button>
        </Link>
      </div>
      <style jsx>{`
        .totalSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 47px;
          width: 100%;
          max-width: 1440px;
          margin-bottom:50px;
        }
        .continueShoppingButton {
          border-radius: 11px;
          background-color: #a9a859;
          color: #fff;
          font: 20px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          padding: 10px 30px;
          border: none;
          cursor: pointer;
        }
        .checkoutInfo {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .totalLabel {
          font-size: 16px;
          font-family: Inter, sans-serif;
          color: #000;
        }
        .totalAmount {
          font-size: 24px;
          font-family: Inter, sans-serif;
          color: #000;
        }
        .checkoutButton {
          border-radius: 11px;
          background-color: #a9a859;
          color: #fff;
          font: 20px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          padding: 10px 30px;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .totalSection {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            max-width: 100%;
            margin-top: 40px;
          }
          .checkoutInfo {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .continueShoppingButton,
          .checkoutButton {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

export default TotalSection;
