import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { useState } from 'react'
import SearchFilter from '@/components/book/SearchFilter'
import ProgressBar from './ProgressBar'

export default function CartData({ setStep }) {
  // 優惠券
  const [showCoupon, setShowCoupon] = useState(false)

  const toggleCouponSearch = () => {
    setShowCoupon(!showCoupon)
  }
  return (
    <>
      {/* step-by-step */}
      <ProgressBar />
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
                <h5>山林樂活露營區</h5>
                <p>標準營位 | 經典區露營 | A區</p>
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
          <div htmlFor="terms" className={styles.checkContainer2}>
            <input
              type="checkbox"
              id="terms"
              required=""
              className={styles.checkContainer}
            />
            我已了解並同意 <a href="#">服務條款</a> 與<a href="#">隱私政策</a>
          </div>
          <div className={styles.combinePay}>
            <div className={styles.paybtn}>
              <Button label="返回上頁" onClick={() => setStep(1)} />
            </div>
            <div className={styles.paybtn}>
              <Button label="前往付款" onClick={() => setStep(2)} />
            </div>
          </div>
        </div>
        {/* order detail */}
        <div className={styles.orderContainer}>
          <div className={styles.orderSummary}>
            <h4>山林樂活露營區</h4>
            <h5>標準營位 ｜ 帳篷區露營 ｜ A 區</h5>
            <h5>
              日期: <p>2024年10月15日 - 2024年10月16日</p>
            </h5>
            <hr />
            <h5>
              大人: <p>2人</p>
            </h5>
            <h5>
              小孩: <p>2人</p>
            </h5>
            <hr />
            <h5>
              房型: <p>帳篷</p>
            </h5>
            <h5>
              單價: <p>NT$1,500</p>
            </h5>
            <h5>
              數量: <p>1</p>
            </h5>
            <hr />
            <h5>
              小計: <p>NT$1,500</p>
            </h5>
          </div>
          <div className={styles.orderSummary2}>
            <h5>
              總金額: <p>NT$1,500</p>
            </h5>
            <h5>
              優惠券: <p className={styles.couponP}>七折折扣</p>
            </h5>
            <h5>
              付款金額: <p className={styles.totalP}>NT$1,050</p>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
