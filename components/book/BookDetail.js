import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function BookDetail() {
  const [bookOrderData, setBookOrderData] = useState(null) // 用來存訂單資料
  const [bookCartData, setBookCartData] = useState(null) // 抓取bookCart
  const [loading, setLoading] = useState(true) // 使用 loading 狀態來追蹤資料是否加載中
  const [error, setError] = useState(null) // 用來追蹤是否有錯誤發生
  const [currentDate, setCurrentDate] = useState('') // 狀態來保存當前日期
  const router = useRouter() // 使用 useRouter 來獲取當前路由資訊

  // 抓取後端b_order_items資料表
  useEffect(() => {
    setLoading(true) // 設置為加載中
    const fetchOrderData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3005/book/api/BookOrderData'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch order data')
        }
        const data = await response.json()
        setBookOrderData(data) // 更新訂單資料
        setLoading(false) // 資料加載完成
      } catch (err) {
        setError(err.message) // 設置錯誤訊息
        setLoading(false) // 無論成功或失敗，都設置 loading 狀態為 false
      }
    }

    const intervalId = setInterval(() => {
      fetchOrderData() 
    }, 500)

    return () => clearInterval(intervalId) // 組件卸載時清除定時器
  }, [])

  // 抓取 LocalStorage 中的資料
  useEffect(() => {
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart'))
    if (storedBookCart) {
      setBookCartData(storedBookCart) // 將資料存入狀態
    }

    // 設置當前日期
    const today = new Date()
    const formattedDate =
      today.getFullYear() +
      ('0' + (today.getMonth() + 1)).slice(-2) + // 確保月份是兩位數
      ('0' + today.getDate()).slice(-2) // 確保日期是兩位數
    setCurrentDate(formattedDate)
  }, [])

  // 當資料加載中時顯示載入中的提示
  if (loading) return <p>資料載入中...</p>

  // 如果發生錯誤，顯示錯誤訊息
  if (error) return <p>發生錯誤: {error}</p>

  // 當資料為空或沒有訂單資料時，顯示提示
  if (!bookOrderData || bookOrderData.length === 0) return <h5>無訂單資料。</h5>

  return (
    <div className={styles.bookingForm3}>
      <h3>訂單詳情</h3>
      <div className={styles.BDformSection}>
        <h4 className={styles.BDformSectionTitle}>訂單資訊</h4>
        <div className={styles.bOrderInfo}>
          <dl className={styles.bInfoList}>
            <dt className={styles.bInfoLabel}>訂單編號</dt>
            <dd className={styles.bInfoValue}>
              BO{currentDate}0{bookOrderData[0].r_type_id}
            </dd>
            <dt className={styles.bInfoLabel}>訂購人</dt>
            <dd className={styles.bInfoValue}>{bookOrderData[0].username}</dd>

            <dt className={styles.bInfoLabel}>聯絡電話</dt>
            <dd className={styles.bInfoValue}>{bookOrderData[0].phone}</dd>

            <dt className={styles.bInfoLabel}>付款狀態</dt>
            <dd className={styles.bInfoValue}>已付款</dd>

            <dt className={styles.bInfoLabel}>訂單成立時間</dt>
            <dd className={styles.bInfoValue}>{bookOrderData[0].created_at}</dd>
          </dl>
        </div>
      </div>

      <div className={styles.BDformSection}>
        <h4 className={styles.BDformSectionTitle}>預訂資訊</h4>
        <div className={styles.bOrderInfo}>
          <dl className={styles.bInfoList}>
            <dt className={styles.bInfoLabel}>預訂日期</dt>
            <dd className={styles.bInfoValue}>{bookOrderData[0].InOutDate}</dd>

            <dt className={styles.bInfoLabel}>房型方案</dt>
            <dd className={styles.bInfoValue}>
              {bookCartData && (
                <div className={styles.orderDetails}>
                  {bookCartData.map((item, index) => (
                    <div key={index}>
                      <h5 style={{ fontWeight: 'normal' }}>{item.name}</h5>
                    </div>
                  ))}
                </div>
              )}
            </dd>

            <dt className={styles.bInfoLabel}>大人</dt>
            <dd className={styles.bInfoValue}>{bookOrderData[0].adult} 人</dd>

            <dt className={styles.bInfoLabel}>小孩</dt>
            <dd className={styles.bInfoValue}>
              {bookOrderData[0].children} 人
            </dd>

            <dt className={styles.bInfoLabel}>總金額</dt>
            <dd className={styles.bInfoValue}>
              NT$ {bookOrderData[0].total_price}
            </dd>
          </dl>
        </div>
      </div>

      {/* 付款按鈕區塊 */}
      <div className={styles.bOrderBtn}>
        <div className={styles.OBtn}>
          <Button label="返回首頁" onClick={() => router.push('/')} />
        </div>
      </div>
    </div>
  )
}
