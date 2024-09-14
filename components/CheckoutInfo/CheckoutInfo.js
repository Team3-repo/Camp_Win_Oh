/**
 **
 */
import React from "react";
import Header from "./Header";
import StepIndicator from "./StepIndicator";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import Footer from "./Footer";

const CheckoutInfo = () => {
  return (
    <div className="checkout-body">
      <Header />
      <StepIndicator />
      <main className="main-content">
        <div className="content-wrapper">
          <div className="content-columns">
            <div className="main-column">
              <CheckoutForm />
            </div>
            <div className="sidebar-column">
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .checkout-body {
          background-color: #cfe9c6;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .main-content {
          display: flex;
          margin-top: 14px;
          width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .main-content {
            max-width: 100%;
          }
        }
        .content-wrapper {
          align-self: center;
          width: 100%;
          max-width: 1202px;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
          }
        }
        .content-columns {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .content-columns {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .main-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 78%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .main-column {
            width: 100%;
          }
        }
        .sidebar-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 22%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .sidebar-column {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutInfo;
