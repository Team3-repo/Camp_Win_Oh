/**
 **
 */
import React from "react";

function TotalSection() {
  return (
    <section className="totalSection">
      <button className="continueShoppingButton">←繼續選購</button>
      <div className="checkoutInfo">
        <div className="totalLabel">總計</div>
        <div className="totalAmount">NT$1300</div>
        <button className="checkoutButton">前往結賬→</button>
      </div>
      <style jsx>{`
        .totalSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 47px;
          width: 100%;
          max-width: 1198px;
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
