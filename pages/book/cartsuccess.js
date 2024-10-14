// 付款成功跳轉頁面
import Navbar from '@/components/event/navbar'
import styles from '../../styles/BookCart.module.css'
import React, { useEffect } from 'react'
import BookDetail from '@/components/book/BookDetail'
import Footer2 from '@/components/event/footer2'

export default function CartSuccess() {
  useEffect(() => {
    // 10 秒後自動跳轉到首頁（或其他指定頁面）
    setTimeout(() => {
      window.location.href = '/' // 使用原生 window.location 進行跳轉
    }, 10000)
  }, [])

  return (
    <>
      <Navbar />
      <section className={styles.BCartContainer2}>
        <div className={styles.bookingForm2}>
          <h4>已完成付款，訂單成功確認信已傳送至您的郵箱</h4>
        </div>
        <h5>感謝您的預訂購買，即將跳轉回首頁，祝您有個美好的一天...</h5>

        <BookDetail />
      </section>
      <Footer2/>
    </>
  )
}
