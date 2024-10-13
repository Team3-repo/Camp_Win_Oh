// 預定資訊
import styles from '@/styles/BookCart.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CartDetail() {
  const router = useRouter()

  // 儲存購物車資料
  const [BookCartItems, setBookCartItems] = useState([])

  // 從 localStorage 中獲取資料
  useEffect(() => {
    // 購物車
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart')) || []
    setBookCartItems(storedBookCart)
  }, [])

  return (
    <>
          {/* 使用購物車資料顯示商品的詳細資訊 */}
          <div className={styles.formSection}>
            <h4 className={styles.formSectionTitle}>預訂資訊</h4>
            {/* 使用 map 迭代顯示所有購物車商品 */}
            {BookCartItems.length > 0 ? (
              BookCartItems.map((item) => (
                <div key={item.id} className={styles.bookingInfo}>
                  <img
                    src={item.photos || 'https://via.placeholder.com/150'} // 顯示圖片，若無則顯示佔位圖
                    alt="Campsite Image"
                  />
                  <div className={styles.bookingDetails}>
                    <h5>{item.name}</h5> {/* 顯示商品名稱 */}
                    <p>單價: ${item.price}</p> {/* 顯示單價 */}
                    <p>大人: {item.adult} 人</p> 
                    <p>小孩: {item.child} 人</p> 
                    {/* <p>小計: ${item.price * item.quantity}</p> */}
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <h5>購物車是空的</h5>
            )}
          </div>
    </>
  )
}
