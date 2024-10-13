// 填寫資料
import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Discount from './Discount'
import CartDetail from './cartDetail'

export default function CartData({ setStep }) {
  const router = useRouter()

  // 儲存購物車資料
  const [BookCartItems, setBookCartItems] = useState([])
  const [BookTotal, setBookTotal] = useState(0)

  const [showCoupon, setShowCoupon] = useState(false) // 優惠券顯示狀態
  const [isDiscountApplied, setIsDiscountApplied] = useState(false) // 控制優惠狀態
  const discountAmount = 0.7

  // 回上一步，預防跳轉錯誤
  const [campsiteId, setCampsiteId] = useState(2)

  // 儲存會員資料
  const [userData, setUserData] = useState({
    user_name: '',
    phone: '',
    email: '',
  })

  // 從 localStorage 中獲取資料
  useEffect(() => {
    // 購物車
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart')) || []
    setBookCartItems(storedBookCart)

    // 計算總金額
    const totalAmount = storedBookCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    setBookTotal(totalAmount)
  }, [])

  // 填入會員資料到表單
  const fillInUserData = () => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {
      user_name: '',
      phone: '',
      email: '',
    }

    setUserData((prevData) => ({
      user_name: prevData.user_name || storedUser.user_name,
      phone: prevData.phone || storedUser.phone,
      email: prevData.email || storedUser.email,
    }))
  }

  // 切換顯示優惠券搜尋區塊
  const toggleCouponSearch = () => {
    setShowCoupon(!showCoupon)
  }
  // 接收來自 Discount 組件的狀態更新
  const handleDiscountApply = (applied) => {
    setIsDiscountApplied(applied)
  }

  return (
    <>
      {/* 顯示步驟進度條 */}
      <ProgressBar />
      <div className={styles.BCartContainer}>
        {/* 左側填寫資料區域 */}
        <div className={styles.bookingForm}>
          <h3>填寫資料</h3>
          {/* 使用購物車資料顯示商品的詳細資訊 */}

          <CartDetail />

          {/* 訂購人資料填寫區域 */}
          <div className={styles.formSection}>
            <div className={styles.userSection}>
              <h4>訂購人資料</h4>
              {/* 自動填入資料按鈕 */}
              <Button label="同步會員資料" onClick={fillInUserData} />
            </div>
            <form>
              <label htmlFor="name">
                姓名 <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="請輸入姓名"
                value={userData.user_name} // 綁定會員姓名狀態
                onChange={(e) =>
                  setUserData({ ...userData, user_name: e.target.value })
                }
                required={true}
              />
              <label htmlFor="phone">
                手機號碼 <span style={{ color: 'red' }}>*</span>
              </label>
              <div className={styles.phoneInput}>
                <select name="country-code">
                  <option value={+886}>+886</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  maxLength="10"
                  pattern="\d{10}"
                  placeholder="請輸入手機號碼"
                  value={userData.phone} // 綁定會員電話狀態
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  required={true}
                />
              </div>
              <label htmlFor="email">
                電子郵件 <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="請輸入電子郵件"
                value={userData.email} // 綁定會員電子郵件狀態
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required={true}
              />
              <p className={styles.notice}>
                為了順利收到入場相關通知，請提供有效的聯絡方式，預訂後系統將自動發送電子郵件進行確認。
              </p>
            </form>
          </div>

          {/* 優惠折扣區域 */}
          <div className={styles.formSection}>
            <h4 className={styles.formSectionTitle}>優惠折扣</h4>
            <div className={styles.couponSection}>
              <Button
                label="套用優惠券"
                onClick={toggleCouponSearch}
                type="btn-coup"
              />
              {isDiscountApplied && (
                <span className={styles.appliedDiscount}>已套用七折優惠</span>
              )}
            </div>
            {/* 根據狀態顯示/隱藏優惠券區塊 */}
            {showCoupon && <Discount onApply={handleDiscountApply} />}
          </div>

          <div htmlFor="terms" className={styles.checkContainer2}>
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">我已了解並同意服務條款和隱私政策</label>
          </div>
          <div className={styles.combinePay}>
            {/* 返回按鈕，使用 router.back() 返回上一頁 */}
            <div className={styles.paybtn}>
              <Button
                label="返回上頁"
                onClick={() => router.push(`/book?campsite=${campsiteId}`)}
              />
            </div>
            <div className={styles.paybtn}>
              <Button
                label="前往付款"
                onClick={() => {
                  setStep(2)
                }}
              />
            </div>
          </div>
        </div>

        {/* 右側訂單摘要區域 */}
        <div className={styles.orderContainer}>
          <div className={styles.orderSummary}>
            <h4>訂單摘要</h4>
            <hr />
            {/* 顯示所有購物車商品的詳細資訊 */}
            {BookCartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <h5>
                  房型方案 <p>{item.name}</p>
                </h5>
                <h5>
                  大人<p>{item.adult}人</p>
                </h5>
                <h5>
                  小孩<p>{item.child}人</p>
                </h5>
                <h5>
                  單價<p>NT${item.price}</p>
                </h5>
                <hr />
                <h5>
                  小計<p>NT${item.price}</p>
                </h5>
              </div>
            ))}
            {/* 顯示購物車總金額和折扣後金額 */}

            {isDiscountApplied && (
              <h5>
                優惠券<p className={styles.couponP}>七折折扣</p>
              </h5>
            )}

            <h5>
              付款金額
              {isDiscountApplied ? (
                <h5 className={styles.totalP}>
                NT${Math.floor((BookTotal * discountAmount).toFixed(2))}
                </h5>
              ) : (
                <p className={styles.totalP}>NT${Math.floor(BookTotal)}</p>
              )}
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
