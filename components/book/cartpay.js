import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { IoIosArrowDown } from 'react-icons/io'
import { useState, useEffect } from 'react'
import ProgressBar2 from './ProgressBar2'

export default function CartPay({ setStep }) {
  // 儲存購物車資料
  const [BookCartItems, setBookCartItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(null) // 手風琴控制
  const [selectedOption, setSelectedOption] = useState('creditCard') // 預設付款方式
  const [discountAmount] = useState(0.7) // 折扣比例

  // 計算最終金額
  const finalTotal = BookCartItems.reduce(
    (BookTotal, item) => BookTotal + item.price * item.quantity,
    0
  )
  const discountedTotal = Math.floor(finalTotal * discountAmount)

  // 導向ECPay
  const goECPay = () => {
    if (window.confirm('確認要導向至 ECPay 進行付款?')) {
      // 先連到 Node 伺服器後，導向至 ECPay 付款頁面
      window.location.href = `http://localhost:3005/ecpay/book?amount=${discountedTotal}`
    }
  }

  // 初始化購物車資料
  useEffect(() => {
    // 從 localStorage 中獲取購物車資料（假設已存在）
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart')) || []
    setBookCartItems(storedBookCart)
  }, [])

  // 手風琴切換控制
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // 定義手風琴的資料結構
  const accordionData = [
    {
      title: '已填寫資料',
      content: (
        <>
          {/* 迭代 cartItems 資料並顯示所有商品 */}
          {BookCartItems.length > 0 ? (
            BookCartItems.map((item) => (
              <div key={item.id}>
                <h4 className={styles.formSectionTitle}>訂購人資訊</h4>
                <div className={styles.bookingInfo}>
                  <img
                    src={item.photos || 'https://via.placeholder.com/150'}
                    alt="Campsite Image"
                  />
                  <div className={styles.bookingDetails}>
                    <h5>{item.name}</h5>
                    <p>姓名: {item.username}</p>
                    <p>手機號碼: {item.phone}</p>
                    <p>電子郵件: {item.date}</p>
                    
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>沒有已填寫的資料</p>
          )}
        </>
      ),
    },
  ]

  return (
    <>
      {/* 顯示步驟進度條 */}
      <ProgressBar2 />

      <div className={styles.BCartContainer3}>
        {/* 左側表單與付款方式 */}
        <div className={styles.bookingForm}>
          <h3>完成付款</h3>
          <div className={styles.formSection2}>
            {/* 手風琴區域：顯示已填寫資料 */}
            {accordionData.map((accordion, index) => (
              <div key={index} className={styles.accordionItem}>
                <div
                  className={styles.accordionHeader}
                  onClick={() => handleToggle(index)}
                >
                  <h4>{accordion.title}</h4>
                  <IoIosArrowDown
                    className={`${styles.accordionIcon} ${
                      activeIndex === index ? styles.rotate : ''
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <div className={styles.accordionContent}>
                    {accordion.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.formSection3}>
            <h4 className={styles.formSectionTitle}>付款方式</h4>
            <form>
              <div className={styles.payWay}>
                <label>
                  <input
                    type="radio"
                    value="creditCard"
                    name="payment"
                    checked={selectedOption === 'creditCard'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  信用卡付款
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="linePay"
                    name="payment"
                    checked={selectedOption === 'linePay'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Line Pay
                </label>
              </div>
            </form>
          </div>

          <p className={styles.notice}>
            點擊「確認付款」，即表示您已確認訂單無誤且同意右方顯示的總金額，亦同意
            服務條款 和取消政策
          </p>

          {/* 付款按鈕區塊 */}
          <div className={styles.combinePay}>
            <div className={styles.paybtn}>
              <Button label="返回上頁" onClick={() => setStep(1)} />
            </div>
            <div className={styles.paybtn}>
              <Button label="確認付款" onClick={goECPay} />
            </div>
          </div>
        </div>

        {/* 右側訂單摘要區域 */}
        <div className={styles.orderContainer}>
          <div className={styles.orderSummary}>
            <h4>訂單摘要</h4>
            {/* 顯示來自 cartItems 的摘要資料 */}
            {BookCartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <h5>{item.name}</h5>
                <h5>
                  入住日期<p>{item.inDate}人</p>
                </h5>
                <h5>
                  退房日期 <p>{item.endDate}人</p>
                </h5>
                <hr />
                <h5>
                  大人 <p>{item.adult}人</p>
                </h5>
                <h5>
                  小孩<p>{item.child}人</p>
                </h5>
                <h5>
                  單價<p>NT${item.price}</p>
                </h5>
                <hr />
              </div>
            ))}
            {/* 總金額計算 */}
            <h5>
              總金額
              <p>
                NT$
                {finalTotal}
              </p>
            </h5>
            <h5>
              優惠券 <p className={styles.couponP}>七折折扣</p>
            </h5>
            <h5>
              付款金額
              <p>
                NT$
                {discountedTotal}
              </p>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
