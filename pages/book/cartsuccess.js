// 付款成功跳轉頁面
import Navbar from '@/components/event/navbar'
import styles from '../../styles/BookCart.module.css'
import React, { useEffect } from 'react'

export default function CartSuccess() {
  useEffect(() => {
    // 10 秒後自動跳轉到首頁（或其他指定頁面）
    setTimeout(() => {
      window.location.href = '/' // 使用原生 window.location 進行跳轉
      // localStorage.removeItem('bookCart'); // 清除localstorage
    }, 3000)
  }, [])

  return (
    <>
      <Navbar />
      <section className={styles.BCartContainer2}>
        <div className={styles.bookingForm2}>
          <h3>已付款完成</h3>
        </div>
        <h5>感謝您的購買，我們已收到您的付款。即將跳轉到首頁...</h5>
        {/* <div className={styles.bookingForm2}>
          訂單資訊 
        </div> */}
      </section>
    </>
  )
}