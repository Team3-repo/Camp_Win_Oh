import React from 'react'
import Link from 'next/link'
// import StepIndicator from '@/components/OrderCompletion/StepIndicator'
// import Navbar from '@/components/event/navbar'
// import Footer from '@/components/event/footer2'

const PaymentCallback = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="callback-body">
        {/* <StepIndicator /> */}
        </div>
        <div className="wordtry">
          <h1>已完成訂單</h1>
          <div className="putline">
            <button>回到首頁</button>

            <Link href="/cart/1CampingStore">
              <button>繼續選購</button>
            </Link>
          </div>
          <style jsx>{`
            .callback-body {
              display: flex;
          flex-direction: column;
          align-items: center;
            }
            .wordtry {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 300px;
            }
            .putline {
              display: flex;
              gap: 30px; /* 增加按鈕之間的空隙 */
              margin: 15px;
            }
            .putline button {
              padding: 15px 30px; /* 調整按鈕內部空間，讓按鈕變大 */
              font-size: 16px; /* 調整文字大小 */
              background-color: var(--BTN-CLOR, #fc9a84); /* 按鈕背景色 */
              color: white; /* 按鈕文字顏色 */
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
          `}</style>
        </div>
     
      {/* <Footer /> */}
    </>
  )
}

export default PaymentCallback
