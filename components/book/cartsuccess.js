import React, { useEffect, useState } from 'react'
import styles from '@/styles/BookCart.module.css'

// useEffect只能一個，所以訂單資訊抓取設元件，此頁面移至Detail，訂單訊息簡單抓取json資料即可

// 模擬 API 請求（用於示範，請替換為實際 API 調用）
const fetchEventDetails = async () => {
  // 模擬後端 API 回應的資料
  return {
    id: 1, // 活動 ID
    title: '夏日狂歡派對',
    description:
      '這是一場充滿歡笑和活力的夏日派對活動，讓我們一起盡情享受夏日的陽光和大自然的美好。',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/2c4f42695911ec327af3315bd4e177bdf625338dc60fd9748e07ebb6fc9deab6?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
    memberId: '兔兔',
    bookendDate: '2024-09-22', // 報名截止日期
    maxPeople: 6,
    fee: 1200,
    startDate: '2024-09-23',
    endDate: '2024-09-24',
    area: '東部',
    camp: '山Chill',
    campAdd: '台灣花蓮縣秀林鄉太魯閣村200號',
    notes: '儲存所有垃圾並帶走，參加者請自備帳篷等裝備，避免攜帶過量行李。',
    participants: [
      // 模擬參與者資料
      {
        id: 1,
        name: '小明',
        avatar:
          'https://i.postimg.cc/3Rs3YT9M/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp',
      },
      {
        id: 2,
        name: '小華',
        avatar:
          'https://i.postimg.cc/3Rs3YT9M/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp',
      },
      {
        id: 3,
        name: '小強',
        avatar:
          'https://i.postimg.cc/3Rs3YT9M/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp',
      },
    ],
  }
}

export default function CartSuccess() {
  const [eventDetails, setEventDetails] = useState(null)

  // 在組件載入時調用 API 並設置資料
  useEffect(() => {
    fetchEventDetails().then((data) => setEventDetails(data))
  }, [])

  // 如果資料尚未載入，顯示 Loading...
  if (!eventDetails) {
    return <p>Loading...</p>
  }

  return (
    <>
      <section className={styles.BCartContainer2}>
        <div className={styles.bookingForm2}>
          <h3>已付款完成</h3>
        </div>
        <div className={styles.bookingForm2}>
          {' '}
          {/* 活動資訊 */}
          <div className="ectitle">
            <h3 className="ech3">活動資訊</h3>
          </div>
          <div className="event-info">
            <dl className="einfo-list">
              <dt className="einfo-label">主辦人</dt>
              <dd className="einfo-value">{eventDetails.memberId}</dd>

              <dt className="einfo-label">報名截止</dt>
              <dd className="einfo-value">
                {eventDetails.registrationDeadline}
              </dd>

              <dt className="einfo-label">活動日期</dt>
              <dd className="einfo-value">
                {eventDetails.startDate} - {eventDetails.endDate}
              </dd>

              <dt className="einfo-label">區域</dt>
              <dd className="einfo-value">{eventDetails.area}</dd>

              <dt className="einfo-label">營地名稱</dt>
              <dd className="einfo-value">{eventDetails.camp}</dd>

              <dt className="einfo-label">營地地址</dt>
              <dd className="einfo-value">{eventDetails.campAdd}</dd>

              <dt className="einfo-label">人數限制</dt>
              <dd className="einfo-value">{eventDetails.maxPeople} 人</dd>

              <dt className="einfo-label">每人費用</dt>
              <dd className="einfo-value">{eventDetails.fee} 元</dd>

              <dt className="einfo-label">備註</dt>
              <dd className="einfo-value">{eventDetails.notes}</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
