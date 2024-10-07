import styles from '@/styles/BookCart.module.css'
import Button from '@/components/book/button'
import { useState, useEffect } from 'react'
import Accordion from './accordion'

export default function CartPay({ setStep }) {
  const [activeIndex, setActiveIndex] = useState(null)

  // 手風琴fetch
  const [accordionData, setAccordionData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 使用 fetch 來從 public 資料夾中的 JSON 檔案讀取資料
    fetch('/book/accordionData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setAccordionData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div className={styles.BCartContainer}>
        <h3>已完成付款</h3>
        <div className={styles.paybtn}>
          <Button label="回首頁" onClick={() => setStep(1)} />
        </div>
      </div>

      <div className="BCartContainer">
        {/* 手風琴-注意事項*/}
        <Accordion data={accordionData} />
      </div>
    </>
  )
}
