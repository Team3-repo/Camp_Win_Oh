// 填寫資料
import styles from '@/styles/BookCart.module.css';
import Button from '@/components/book/button';
import { useState, useEffect } from 'react';
import SearchFilter from '@/components/book/SearchFilter';
import ProgressBar from './ProgressBar';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CartData({ setStep }) {
  const router = useRouter();

  // 儲存來自 localStorage 的購物車資料
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCoupon, setShowCoupon] = useState(false); // 優惠券顯示狀態
  const discountAmount = 0.7; // 例如：七折折扣

  // 從 localStorage 中獲取購物車資料
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);

    // 計算總金額
    const totalAmount = storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, []);

  // 切換顯示優惠券搜尋區塊
  const toggleCouponSearch = () => {
    setShowCoupon(!showCoupon);
  };

  return (
    <>
      {/* 顯示步驟進度條 */}
      <ProgressBar />
      <div className={styles.BCartContainer}>
        {/* 左側填寫資料區域 */}
        <div className={styles.bookingForm}>
          <h3>填寫資料</h3>
          {/* 使用購物車資料顯示商品的詳細資訊 */}
          <div className={styles.formSection}>
            <h4>預訂資訊</h4>
            {/* 使用 map 迭代顯示所有購物車商品 */}
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className={styles.bookingInfo}>
                  <img
                    src={item.photos || 'https://via.placeholder.com/150'} // 顯示圖片，若無則顯示佔位圖
                    alt="Campsite Image"
                  />
                  <div className={styles.bookingDetails}>
                    <h5>{item.name}</h5> {/* 顯示商品名稱 */}
                    <p>{item.info}</p> {/* 顯示商品詳細資訊 */}
                    <p>單價: ${item.price}</p> {/* 顯示單價 */}
                    <p>數量: {item.quantity}</p> {/* 顯示數量 */}
                    <p>小計: ${item.price * item.quantity}</p> {/* 顯示小計 */}
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>購物車是空的</p>
            )}
          </div>

          {/* 訂購人資料填寫區域 */}
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

          {/* 優惠折扣區域 */}
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
            {/* 返回按鈕，使用 router.back() 返回上一頁 */}
            <div className={styles.paybtn}>
              <Button label="返回上頁" onClick={() => router.back()} />
            </div>
            <div className={styles.paybtn}>
            <Button label="前往付款" onClick={() => setStep(2)} />
            </div>
          </div>
        </div>

        {/* 右側訂單摘要區域 */}
        <div className={styles.orderContainer}>
          <div className={styles.orderSummary}>
            <h4>訂單摘要</h4>
            <hr />
            {/* 顯示所有購物車商品的詳細資訊 */}
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <h5>{item.name}</h5>
                <p>
                  單價: ${item.price} ｜ 數量: {item.quantity}
                </p>
                <p>小計: ${item.price * item.quantity}</p>
                <hr />
              </div>
            ))}
            {/* 顯示購物車總金額和折扣後金額 */}
            <h5>總金額: ${total}</h5>
            <h5>優惠券: <p className={styles.couponP}>七折折扣</p></h5>
            <h5>付款金額: <p className={styles.totalP}>${(total * discountAmount).toFixed(2)}</p></h5>
          </div>
        </div>
      </div>
    </>
  );
}
