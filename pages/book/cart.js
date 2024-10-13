import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import styles from '../../styles/BookCart.module.css'
import { useState } from 'react'
import CartData from '@/components/book/cartdata'
import CartPay from '@/components/book/cartpay'

export default function BookCart() {
  // 使用狀態來追蹤當前的步驟
  const [step, setStep] = useState(1)

  // 渲染購物車頁面
  const renderCart = () => (
    <div>
      {/* 填寫資料 */}
      <CartData setStep={setStep} />
    </div>
  )

  const renderPayment = () => (
    <div>
      <CartPay setStep={setStep} />
    </div>
  )

  return (
    <>
      <Navbar />
      {step === 1 && renderCart()}
      {step === 2 && renderPayment()}

      <Footer2 />
    </>
  )
}
