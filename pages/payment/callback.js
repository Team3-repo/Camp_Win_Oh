import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import StepIndicator from '@/components/OrderCompletion/StepIndicator'
import Navbar from '@/components/event/navbar'
import Footer from '@/components/event/footer2'
// 新增：導入 OrderDetails 組件
import OrderDetails from '@/components/OrderCompletion/OrderDetails'

const PaymentCallback = () => {
  // 新增：用於儲存訂單 ID 的 state
  const [orderId, setOrderId] = useState(null);

  // 新增：從 localStorage 獲取訂單 ID
  useEffect(() => {
    const lastOrderId = localStorage.getItem('lastOrderId');
    if (lastOrderId) {
      setOrderId(lastOrderId);
      localStorage.removeItem('lastOrderId'); // 清除儲存的訂單 ID
    }
  }, []);

  return (
    <>
       <Navbar />
      <div className="callback-body">
        <StepIndicator />
        <div className="wordtry">
          <h1>已完成訂單</h1>
          {/* 新增：如果有訂單 ID，顯示訂單詳情 */}
          {orderId && <OrderDetails orderId={orderId} />}
          <div className="putline">
            <Link href="/">
              <button>回到首頁</button>
            </Link>
            <Link href="/cart/1CampingStore">
              <button>繼續選購</button>
            </Link>
          </div>
        </div> 
        <div className="put-end">
        <Footer />
      </div>
      </div>
          <style jsx>{`
            .callback-body {
              display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
          justify-content: space-between; /* 保證內容和 footer 之間的距離 */
          min-height: 100vh; /* 讓內容佔滿整個視窗高度 */

            }
            .wordtry {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 50px;

            }
            .putline {
              display: flex;
              gap: 30px; /* 增加按鈕之間的空隙 */
              margin: 15px;
              margin-bottom:50px;
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
            .put-end {
            
            position: relative;

            width: 100%;
            bottom: 0;
            left: 0; */
          }
          `}</style>
     
         
      
    </>
  )
}

export default PaymentCallback
