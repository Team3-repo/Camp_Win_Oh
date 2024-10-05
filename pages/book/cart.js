import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import styles from '../../styles/BookCart.module.css'
import { useState } from 'react'
import CartData from '@/components/book/cartdata'
import CartPay from '@/components/book/cartpay'
import CartSuccess from '@/components/book/cartsuccess'

export default function BookCart() {
  // 使用狀態來追蹤當前的步驟
  const [step, setStep] = useState(1)

  // 渲染購物車頁面
  const renderCart = () => (
    <div>
      {/* 傳遞 setStep 給 CartData */}
      <CartData setStep={setStep} />
    </div>
  )

  const renderPayment = () => (
    <div>
      <CartPay setStep={setStep} />
    </div>
  )

  const renderConfirmation = () => (
    <div>
      <CartSuccess setStep={setStep} />
      <button onClick={() => alert('付款成功！')}></button>
    </div>
  )

  return (
    <>
      <Navbar />
      <div>
        {step === 1 && renderCart()}
        {step === 2 && renderPayment()}
        {step === 3 && renderConfirmation()}
      </div>
      <Footer2 />
    </>
  )
}
