import React, { useEffect, useState } from 'react'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import Button from '@/components/book/button'
import CampingFeatures from '@/components/event/CampingFeatures'

export default function EventDetail() {
  const [eventPreview, seteventPreview] = useState(null)

  // 在組件載入時從 localStorage 獲取資料
  useEffect(() => {
    const storedData = localStorage.getItem('eventPreviewData')
    if (storedData) {
      const eventData = JSON.parse(storedData)
      seteventPreview(eventData)
    }
  }, [])

  // 如果資料尚未載入，顯示 Loading...
  if (!eventPreview) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <Navbar />
      <div className="ecsection-title">
        <h2>活動預覽</h2>
      </div>
      <section className="ecsectionall2">
        <div className="ecsection-form">
          {/* 活動圖片 (若無上傳圖片則使用佔位符圖片) */}
          <div className="ecsection">
            <div className="event-content">
              <img
                src={
                  eventPreview.imageUrl || 'https://via.placeholder.com/400x200'
                }
                alt="Event image"
                className="event-image"
              />
            </div>
            {/* 活動簡介 */}
            <div className="ectitle">
              <h3 className="ech3">活動簡介</h3>
            </div>
            <div className="ecform-group">
              <p>{eventPreview.description}</p>
            </div>

            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>
            <div className="event-info">
              <dl className="einfo-list">
                <dt className="einfo-label">活動名稱</dt>
                <dd className="einfo-value">{eventPreview.title}</dd>
                <dt className="einfo-label">主辦人</dt>
                <dd className="einfo-value">{eventPreview.organizerNick}</dd>

                <dt className="einfo-label">開始日期</dt>
                <dd className="einfo-value">{eventPreview.startDate}</dd>
                <dt className="einfo-label">結束日期</dt>
                <dd className="einfo-value">{eventPreview.endDate}</dd>

                <dt className="einfo-label">營地名稱</dt>
                <dd className="einfo-value">{eventPreview.name}</dd>

                <dt className="einfo-label">營地地址</dt>
                <dd className="einfo-value">{eventPreview.campAdd}</dd>

                <dt className="einfo-label">住宿選擇</dt>
                <dd className="einfo-value">
                  {eventPreview.selectedBookType?.name || '尚未選擇住宿'}
                </dd>

                <dt className="einfo-label">活動人數</dt>
                <dd className="einfo-value">{eventPreview.eventPeople} 人</dd>

                <dt className="einfo-label">負擔費用（每人）</dt>
                <dd className="einfo-value">
                  {parseInt(eventPreview.costPerPerson)} 元
                </dd>

                <dt className="einfo-label">訂購數量</dt>
                <dd className="einfo-value">{eventPreview.orderQuantity} 間</dd>

                <dt className="einfo-label">總費用</dt>
                <dd className="einfo-value">
                  {eventPreview.orderAmount + eventPreview.otherFees} 元
                </dd>

                <dt className="einfo-label">備註</dt>
                <dd className="einfo-value">{eventPreview.notes}</dd>
              </dl>
            </div>
          </div>
          <div className="joinbtn1">
            {/* 返回上一頁與確認送出按鈕 */}
            <Button
              label="回上一頁"
              onClick={() => (window.location.href = '/events/eventCreate')}
            />
            <Button
              label="確認送出"
              onClick={() => alert('活動已確認送出！')}
            />
          </div>
        </div>

        <div className="memfea">
          <CampingFeatures />
        </div>
      </section>
      <Footer2 />
    </>
  )
}
