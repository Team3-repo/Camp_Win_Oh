import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { useState } from 'react'
import SearchFilter from '@/components/book/SearchFilter'

export default function CartData({ setStep }) {
  // 優惠券
  const [showCoupon, setShowCoupon] = useState(false)

  const toggleCouponSearch = () => {
    setShowCoupon(!showCoupon)
  }
  return (
    <>
      <div className={styles.BCartContainer}>
        <div className={styles.bookingForm}>
          <h3>填寫資料</h3>
          <div className={styles.formSection}>
            <h4>預訂資訊</h4>
            <div className={styles.bookingInfo}>
              <img
                src="https://i.postimg.cc/Z5CgZDBY/4.jpg"
                alt="Campsite Image"
              />
              <div className={styles.bookingDetails}>
                <p>
                  [山林樂活露營區]
                  <br />
                  標準營位 | 經典區露營 | A區
                </p>
                <p>大人: 2人, 小孩: 2人</p>
              </div>
            </div>
          </div>
          <div className={styles.formSection}>
            <h4>訂購人資料</h4>
            <form>
              <label htmlFor="name">姓名 *</label>
              <input type="text" id="name" name="name" required="" />
              <label htmlFor="phone">手機號碼 *</label>
              <div className={styles.phoneInput}>
                <select name="country-code">
                  <option value={+886}>+886</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  maxLength="10"
                  required=""
                />
              </div>
              <label htmlFor="email">電子郵件(將收到預訂確認信)</label>
              <input type="email" id="email" name="email" required="" />
              <p className={styles.notice}>
                為了順利收到入場相關通知，請提供有效的聯絡方式，預訂後系統將自動發送電子郵件進行確認。
              </p>
            </form>
          </div>
          <div className={styles.formSection}>
            <h4>優惠折扣</h4>
            <Button
              label="套用優惠券"
              onClick={toggleCouponSearch}
              type="btn-coup"
            />
            {/* 優惠券搜尋區塊，根據狀態顯示或隱藏 */}
            {showCoupon && <SearchFilter />}
          </div>
          <div className={styles.formSection}>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" required="" />
              我已了解並同意 <a href="#">服務條款</a> 與<a href="#">隱私政策</a>
            </label>
          </div>
          <div className={styles.paybtn}>
            <Button label="前往付款" onClick={() => setStep(2)} />
          </div>
        </div>
        <div className={styles.orderSummary}>
          <h2>山林樂活露營區 | 標準營位 | 經典區露營 | A區</h2>
          <p>大人: 2人, 小孩: 2人</p>
          <p>日期: 2024年10月15日 - 2024年10月16日</p>
          <p>數量: 1</p>
          <p>小計: NT$1,500</p>
          <p>折扣: 七折折扣</p>
          <p>付款金額: NT$1,050</p>
        </div>
      </div>
    </>
  )
}
