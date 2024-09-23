import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

const accordionData = [
  {
    title: '已填寫資料',
    content: (<>
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
      </div><div className={styles.formSection}>
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
      </div></>
    )
  },
]

export default function CartPay({ setStep }) {
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

          <h5 className={styles.notice}>
            點擊「確認付款」，即表示您以確認訂單無誤且同意右方顯示的總金額，亦同意
            服務條款 和取消政策
          </h5>

          <div className={styles.combinePay}>
            <div className={styles.paybtn}>
              <Button label="返回上頁" onClick={() => setStep(1)} />
            </div>
            <div className={styles.paybtn}>
              <Button label="確認付款" onClick={() => setStep(3)} />
            </div>
          </div>
        </div>
        <div className={styles.orderSummary}>
          <h4>山林樂活露營區 | 標準營位 | 經典區露營 | A區</h4>
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
