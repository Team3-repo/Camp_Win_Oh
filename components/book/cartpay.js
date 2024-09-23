import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { useState } from 'react'
import SearchFilter from '@/components/book/SearchFilter'

const accordionData = [
  {
    title: '填寫資料',
    content: (
      <div className={styles.formSection}>
        <h4>預訂資訊</h4>
        <div className={styles.bookingInfo}>
          <img src="https://i.postimg.cc/Z5CgZDBY/4.jpg" alt="Campsite Image" />
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
    ),
  },
]

export default function CartPay() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  return (
    <>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              {item.title}
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? 'open' : ''
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.BCartContainer}>
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
          <div className={styles.combinePay}>
            <h5 className={styles.notice}>
              點擊「確認付款」，即表示您以確認訂單無誤且同意右方顯示的總金額，亦同意
              服務條款 和取消政策
            </h5>
            <div className={styles.paybtn}>
              <Button label="確認付款" />
            </div>
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
      <style jsx>
        {`
          .accordion {
            width: 80%;
            margin: 0 auto;
            padding-bottom: 10px;
          }

          .accordion-item {
            border-bottom: 1px solid #ddd;
          }

          .accordion-header {
            padding: 15px;
            cursor: pointer;
            background-color: #f5f5f5;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .accordion-header:hover {
            background-color: #e0e0e0;
          }

          .accordion-content {
            max-height: 0;
            overflow: hidden;
            padding: 0 15px;
            background-color: #fafafa;
            transition: max-height 0.3s ease;
          }

          .accordion-content.open {
            max-height: 200px; /* 根據內容的大小調整 */
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}
