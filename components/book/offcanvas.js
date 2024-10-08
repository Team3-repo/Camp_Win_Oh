// 購物車
import React, { useContext } from 'react'
import styles from '../../styles/component_style/offcanvas.module.css'
import { BookCartContext } from '../../context/book/BookCartContext.js'
import Link from 'next/link'

export default function OffcanvasCart({ isOpen, toggleOffcanvas }) {
  // 使用 useContext 來獲取購物車狀態和操作
  const { bookCart, BookTotal, dispatch } = useContext(BookCartContext)

  // 購物車增減數量功能
  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }

  const handleIncreaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item })
  }

  const handleDecreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item })
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
            onClick={toggleOffcanvas}
          >
            &times;
          </button>
          <h5 className={styles.offcanvasTitle}>購物車</h5>
        </div>

        {/* Offcanvas 主體內容 */}
        <div className={styles.offcanvasBody}>
          {bookCart.length === 0 ? (
            <p>購物車是空的</p>
          ) : (
            <div className={styles.cartItems}>
              <ul>
                {bookCart.map((item) => (
                  <li key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemDetails}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>${item.price}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                      <span className={styles.itemQuantity}>
                        {item.quantity}
                      </span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <button
                        className={styles.removeButton}
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        移除
                      </button>
                    </div>
                    <div className={styles.cartItemActions}></div>
                  </li>
                ))}
              </ul>

              {/* 顯示總金額 */}
              <h3 className={styles.totalAmount}>總金額: ${BookTotal}</h3>
            </div>
          )}

          {/* 當購物車不為空時顯示「前往付款」按鈕 */}
          {bookCart.length > 0 && (
            <div className={styles.checkoutButtonContainer}>
              <Link href="/book/cart">
                <button className={styles.checkoutButton}>前往付款</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
