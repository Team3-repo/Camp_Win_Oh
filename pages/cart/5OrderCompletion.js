import React from "react";
import Header from "@/components/Header";
import StepIndicator from "@/components/OrderCompletion/StepIndicator";
import PaymentSection from "@/components/OrderCompletion/PaymentSection";
import OrderSummary from "@/components/OrderCompletion/OrderSummary";
import Footer from "@/components/Footer";

const OrderCompletion = () => {
  return (
    <div className="order-completion">
      <Header />
      <StepIndicator />
      <main className="main-content">
        <div className="content-wrapper">
          <PaymentSection />
          <OrderSummary />
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .order-completion {
          background-color: #cfe9c6;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
        .main-content {
          display: flex;
          margin-top: 42px;
          width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .main-content {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .content-wrapper {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1290px;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderCompletion;
