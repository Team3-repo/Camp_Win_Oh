// 購物車
import React, { useContext, useState, useEffect } from 'react'
import styles from '../../styles/component_style/offcanvas.module.css'
import { BookCartContext } from '../../context/book/BookCartContext.js'
import Link from 'next/link'

import toast, { Toaster } from 'react-hot-toast'

export default function OffcanvasCart({ isOpen, toggleOffcanvas }) {
  // 使用 useContext 來獲取購物車狀態和操作
  const { bookCart, BookTotal, BookAdult, BookChild, dispatch } =
    useContext(BookCartContext)
  const [SaveBCart, setSaveBCart] = useState([])

  // 用來追蹤登入狀態
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 使用 useEffect 來初始化登入狀態
  useEffect(() => {
    // 從 localStorage 中獲取登入狀態，並將其設置到 isLoggedIn 狀態中
    const loginState = localStorage.getItem('loginState') === 'true'
    setIsLoggedIn(loginState)

    if (SaveBCart.length === 0) {
      const defaultBookCart = [
        {
          adult: 1,
          child: 0,
        },
      ]
      // 將預設資料存儲到 LocalStorage
      localStorage.setItem('bookCart', JSON.stringify(defaultBookCart))
      setSaveBCart(defaultBookCart) // 將預設資料保存到狀態中
    } else {
      // 如果有資料，則初始化狀態
      const initializedBookCart = SaveBCart.map((item) => ({
        ...item,
        adult: item.adult || 0,
        child: item.child || 0,
      }))
      setSaveBCart(initializedBookCart) // 初始化狀態
    }
  }, [])

  // 點擊「前往付款」的處理函數
  const handleCheckout = () => {
    if (!isLoggedIn) {
      // 用戶未登入時顯示提示，並跳轉至登入頁面
      toast.error('請先登入以進行付款！', {
        duration: 3000,
        position: 'top-center',
      })
      setTimeout(() => {
        window.location.href = '/user/modal'
      })
    } else {
      // 用戶已登入，跳轉至付款頁面
      window.location.href = '/book/cart'
    }
  }

  // 購物車增減數量功能
  const handleIncreaseAdult = (item) => {
    dispatch({ type: 'INCREASE_ADULT', payload: item })
  }

  const handleDecreaseAdult = (item) => {
    dispatch({ type: 'DECREASE_ADULT', payload: item })
  }

  const handleIncreaseChild = (item) => {
    dispatch({ type: 'INCREASE_CHILD', payload: item })
  }

  const handleDecreaseChild = (item) => {
    dispatch({ type: 'DECREASE_CHILD', payload: item })
  }

  // 當 OffcanvasCart 被關閉時清空購物車
  const handleCloseOffcanvas = () => {
    dispatch({ type: 'CLEAR_CART' }) // 清空購物車
    toggleOffcanvas() // 呼叫 toggleOffcanvas 關閉 Offcanvas
  }

  return (
    <>
      {/* 背景遮罩層，當 Offcanvas 顯示時顯示遮罩 */}
      {isOpen && (
        <div className={styles.overlay} onClick={toggleOffcanvas}></div>
      )}

      {/* Offcanvas 元素 */}
      <div
        className={`${styles.offcanvas} ${isOpen ? styles.show : ''}`}
        role="dialog"
      >
        <div className={styles.offcanvasHeader}>
          {/* 關閉 Offcanvas 的按鈕 */}
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleCloseOffcanvas}
          >
            &times;
          </button>
          <h5 className={styles.offcanvasTitle}>預約詳情</h5>
        </div>

        {/* Offcanvas 主體內容 */}
        <div className={styles.offcanvasBody}>
          {bookCart.length === 0 ? (
            <p>購物車是空的</p>
          ) : (
            <div className={styles.cartItems}>
              <ul>
                {bookCart.map((item) => (
                  <li key={item.id} className={styles.cartItem2}>
                    <div className={styles.cartItemDetails}>
                      <div className={styles.detailsCtl}>
                        <span className={styles.itemName2}>{item.name}</span>
                        <span className={styles.itemPrice}>
                          單價: NT${item.price}
                        </span>
                      </div>
                    </div>
                    <div className={styles.cartItemActions}></div>
                  </li>
                ))}
              </ul>
              <div className={styles.cartItems}>
                <div className={styles.detailsCtl}>
                  <div className={styles.imgSection}>
                    {bookCart.map((item) => (
                      <div key={item.id}>
                        <img
                          src={item.photos || 'https://via.placeholder.com/150'} // 顯示圖片，若無則顯示佔位圖
                          alt="Campsite Image"
                        />
                      </div>
                    ))}
                  </div>

                  <div className={styles.PeopleSection}>
                    {/* 大人 */}
                    {bookCart.map((item) => (
                      <h5
                        key={item.id}
                        className={styles.cartItem3}
                        style={{ fontSize: '20px', paddingTop: '20px' }}
                      >
                        {item.InOutDate}
                      </h5>
                    ))}
                    <ul>
                      {bookCart.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                          <div className={styles.cartItemDetails}>
                            <div className={styles.detailsCtl}>
                              <span className={styles.itemName}>大人</span>
                              <div className={styles.quantityCtl}>
                                <button
                                  className={styles.quantityButton}
                                  onClick={() => handleDecreaseAdult(item)}
                                >
                                  -
                                </button>
                                <span className={styles.itemQuantity}>
                                  {item.adult || 1}
                                </span>
                                <button
                                  className={styles.quantityButton}
                                  onClick={() => handleIncreaseAdult(item)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className={styles.cartItemActions}></div>
                        </li>
                      ))}
                    </ul>
                    {/* 小孩 */}
                    <ul>
                      {bookCart.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                          <div className={styles.cartItemDetails}>
                            <div className={styles.detailsCtl}>
                              <span className={styles.itemName}>小孩</span>
                              <div className={styles.quantityCtl}>
                                <button
                                  className={styles.quantityButton}
                                  onClick={() => handleDecreaseChild(item)}
                                >
                                  -
                                </button>
                                <span className={styles.itemQuantity}>
                                  {item.child || 0}
                                </span>
                                <button
                                  className={styles.quantityButton}
                                  onClick={() => handleIncreaseChild(item)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className={styles.cartItemActions}></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.cartItems3}>
                <div className={styles.cartItmDetails2}>
                  {/* 顯示總金額 */}
                  <div className={styles.totalAmount}>
                    <h3>小計: NT${BookTotal}</h3>
                    <Link
                      href={{
                        pathname: '/book/cart/',
                        query: { BookAdult: BookAdult, BookChild: BookChild }, // 傳遞 BookAdult 作為參數
                      }}
                    ></Link>

                    {/* 當購物車不為空時顯示「前往付款」按鈕 */}
                    {bookCart.length > 0 && (
                      <div className={styles.checkoutButtonContainer}>
                        <Link href="/book/cart">
                          <button
                            className={styles.checkoutButton}
                            onClick={handleCheckout}
                          >
                            前往付款
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Toaster />
    </>
  )
}
