// 付款成功跳轉頁面
import Navbar from '@/components/event/navbar'
import styles from '@/styles/BookStyle.module.css'
import React, { useEffect, useState } from 'react'

export default function CartSuccess() {
  useEffect(() => {
    // 獲取 URL 中的查詢參數
    const urlParams = new URLSearchParams(window.location.search)

    // 10 秒後自動跳轉到首頁（或其他指定頁面）
    setTimeout(() => {
      window.location.href = '/' // 使用原生 window.location 進行跳轉
      localStorage.removeItem('cart'); // 清除localstorage
    }, 3000)
  }, [])

  return (
    <>
      <Navbar />
      <section className={styles.BCartContainer2}>
        <div className={styles.bookingForm2}>
          <h1>已付款完成</h1>
          <p>感謝您的購買，我們已收到您的付款。</p>
          <p>即將跳轉到首頁...</p>
        </div>
        <div className={styles.bookingForm2}>
          {/* 訂單資訊 */}
        </div>
      </section>
    </>
  )
}
