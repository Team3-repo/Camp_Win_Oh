import styles from '../../styles/HomePage.module.css'
import { IoSearch } from 'react-icons/io5'
import { useState } from 'react'

export default function Discount({ onApply }) {
  // 當優惠券被選取
  const [isDiscountApplied, setIsDiscountApplied] = useState(false)

  const handleCheckboxChange = () => {
    const newState = !isDiscountApplied;
    setIsDiscountApplied(newState);
    onApply(newState); // 通知父組件cartData優惠券狀態變化
  }

  return (
    <>
      {/* 搜索btn */}
      <div className={styles.couponContainer}>
        <input
          type="text"
          id="coupon"
          name="coupon"
          placeholder="請輸入優惠代碼"
        />
        <button className={styles.couponBtn}>
          <IoSearch />
          &nbsp;搜索
        </button>
      </div>
      <div className={styles.couponContainer3}>
        <div className={styles.couponContainer2}>
          <div className={styles.couDraw}>
            <p className={styles.couDrawP}>會營お</p>
            <h2 className={styles.couDrawH2}>
              30% off
              <p className={styles.couDrawP2}>代碼: CampA30off</p>
            </h2>
            <p className={styles.couDrawP2}>全通路皆可使用</p>
          </div>
        </div>
        <div className={styles.couponContainer2}>
          <div className={styles.couDraw2}>
            <p className={styles.couDrawT}>【秋季限定優惠】</p>
            <p className={styles.couDrawT2}>優惠期限:</p>
            <p className={styles.couDrawT2}>2024/09/25 - 2024/10/31</p>
            <p>
              現在預訂即享
              8折優惠！無論是露營體驗還是住宿，都可使用此優惠。免費提供燒烤器具，並可享露營專屬活動。
            </p>
          </div>
        </div>
        <div className={styles.couDraw3}>
          <input type="radio" value="coupCheck" name="coupCheck"  onChange={handleCheckboxChange} />
        </div>
      </div>
    </>
  )
}
