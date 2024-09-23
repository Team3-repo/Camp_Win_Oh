import React from 'react'
import Header from '@/components/Header'
import StepIndicator from '@/components/OrderCompletion/StepIndicator'
import PaymentSection from '@/components/OrderCompletion/PaymentSection'
import OrderSummary from '@/components/OrderCompletion/OrderSummary'
// import Footer from "@/components/Footer";
import Footer from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'

const OrderCompletion = () => {
  return (
    <>
      <Navbar />
      <div className="order-completion">
        {/* <Header /> */}
        <StepIndicator />
        <main className="main-content">
          <div className="content-wrapper">
            <PaymentSection />
            <OrderSummary />
          </div>
        </main>
        <style jsx>{`
          .order-completion {
            background-color: #cfe9c6;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            margin-bottom: 50px;
            position: relative; /* 父層容器要設為 relative */
            min-height: 84vh; /* 讓內容至少佔滿整個視窗高度 */
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
          .put-end {
            position: absolute;
            bottom: 0; /* 固定在底部 */
            left: 0;
            width: 100%;
          }
          @media (max-width: 991px) {
            .content-wrapper {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
      <div className="put-end">
        <Footer />
      </div>
    </>
  )
}

export default OrderCompletion
