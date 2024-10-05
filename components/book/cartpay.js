import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { IoIosArrowDown } from 'react-icons/io'
import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'

const accordionData = [
  {
    title: '已填寫資料',
    content: (
      <>
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
      </>
    ),
  },
]

export default function CartPay({ setStep }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')

  // 滾動到頁首功能
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeIndex]) // 每次切換 accordion 項目或步驟時滾動到頁首

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handlePaymentConfirmation = () => {
    // 滾動到頁首並跳轉到下一步
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep(3) // 跳轉至下一頁
  }

  return (
    <>
      {/* step-by-step */}
      <ProgressBar />
      <div className={styles.accordionPay}>
        {accordionData.map((item, index) => (
          <div className={styles.accordionItem} key={index}>
            <div
              className={styles.accordionHeader}
              onClick={() => handleToggle(index)}
            >
              <h3>{item.title}</h3>
              <IoIosArrowDown
                className={`${styles.accordionIcon} ${
                  activeIndex === index ? styles.rotate : ''
                }`}
              />
            </div>
            {activeIndex === index && (
              <div className={styles.accordionContent}>{item.content}</div>
            )}
          </div>
        ))}
      </div>

      <section className={styles.BCartContainer}>
        <div className={styles.bookingForm}>
          <h3>完成付款</h3>
          <div className={styles.formSection}>
            <h4>付款方式</h4>
            <form>
              <div>
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                  />
                  信用卡付款
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                  />
                  Line Pay
                </label>
              </div>
            </form>
          </div>

          <h5 className={styles.notice}>
            點擊「確認付款」，即表示您以確認訂單無誤且同意右方顯示的總金額，亦同意
            服務條款 和取消政策
          </h5>

          <div className={styles.combinePay}>
            <div className={styles.paybtn}>
              <Button label="返回上頁" onClick={() => setStep(1)} />
            </div>
            <div className={styles.paybtn}>
              <Button label="確認付款" onClick={handlePaymentConfirmation} />
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
      </section>
    </>
  )
}
