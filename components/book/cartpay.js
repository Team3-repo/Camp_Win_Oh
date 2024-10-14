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
  const goECPay = async () => {
    // 從 localStorage 中抓取購物車資料
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart')) || []

    // 從 localStorage 中抓取會員資料
    const storedUser = JSON.parse(localStorage.getItem('user')) || {}

    // 確認是否有 user_id，若無則提示錯誤
    if (!storedUser.user_id) {
      alert('無法取得使用者資訊，請重新登入。')
      return
    }

    

    // 過濾出需要的欄位
    const filteredBookCart = storedBookCart.map((item) => ({
      r_type_id: item.id || '未定義的 r_type_id',  // 如果是 undefined，打印出問題
      username: item.username || '未定義的 username',
      phone: item.phone || '未定義的 phone',
      bookEmail: item.bookEmail || '未定義的 email',
      quantity: item.quantity || 1,  // 預設值
      price: item.price || 0,  // 預設值
      total_price: item.totalAmount || (item.price * item.quantity) || '未定義的總價',  // 確保有值
      adult: item.adult || 1,  // 預設值
      children: item.child !== undefined ? item.child : 0,  // 避免 undefined
      InOutDate: item.InOutDate || '未定義的日期',
    }));
    
    console.log('filteredBookCart:', filteredBookCart); // 確認是否傳遞正確的資料
    console.log('storedBookCart:', storedBookCart); // 檢查是否有問題

    
    console.log('User ID:', storedUser.user_id);
    
    // 將篩選過的資料傳送到後端儲存
    try {
      const response = await fetch(
        'http://localhost:3005/book/api/saveBookOrder',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: storedUser.user_id,
            bookCart: filteredBookCart,
          }), // 傳送過濾後的資料
        }
      )

      if (!response.ok) { // 檢查是否有錯誤狀態碼
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json()

      if (result.success) {
        // 資料成功儲存後，導向至 ECPay 的付款頁面
        window.location.href = `http://localhost:3005/ecpay/book?amount=${discountedTotal}`
      } else {
        alert('資料儲存失敗，請重試。')
      }
    } catch (error) {
      console.error('發送資料時發生錯誤:', error.message)
      alert('發生錯誤，無法送出購物車。')
    }
  }

  // // 初始化購物車資料
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
                    <p>電子郵件: {item.bookEmail}</p>
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
                <h5 style={{ fontWeight: 'bold', fontSize: '18px' }}>
                  {item.name}
                </h5>
                <h5>預訂日期</h5>
                <p style={{ textAlign: 'right' }}>{item.InOutDate}</p>
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
