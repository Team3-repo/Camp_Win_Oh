import React, { useEffect, useState } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import Button from '@/components/book/button'
import CampingFeatures from '@/components/event/CampingFeatures'

export default function EventDetail() {
  const [eventDetails, setEventDetails] = useState(null)

  // 在組件載入時從 localStorage 獲取資料
  useEffect(() => {
    const storedData = localStorage.getItem('eventPreviewData')
    if (storedData) {
      const eventData = JSON.parse(storedData)
      setEventDetails(eventData)
    }
  }, [])

  // 如果資料尚未載入，顯示 Loading...
  if (!eventDetails) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <Navbar />
      <div className="ecsection-title">
        <h2>預覽</h2>
      </div>
      <section className="ecsectionall2">
        <div className="ecsection-form">
          {/* 圖片（此處未使用圖片上傳功能，因此不顯示） */}
          <div className="ecsection">
            <div className="event-content">
              <img
                src={
                  eventDetails.imageUrl || 'https://via.placeholder.com/400x200'
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
              <p>{eventDetails.description}</p>
            </div>

            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>
            <div className="event-info">
              <dl className="einfo-list">
                <dt className="einfo-label">活動名稱</dt>
                <dd className="einfo-value">{eventDetails.title}</dd>
                <dt className="einfo-label">主辦人</dt>
                <dd className="einfo-value">{eventDetails.organizerNick}</dd>

                <dt className="einfo-label">報名截止</dt>
                <dd className="einfo-value">
                  {eventDetails.registrationDeadline || 'N/A'}
                </dd>

                <dt className="einfo-label">開始日期</dt>
                <dd className="einfo-value">{eventDetails.startDate}</dd>

                <dt className="einfo-label">結束日期</dt>
                <dd className="einfo-value">{eventDetails.endDate}</dd>

                <dt className="einfo-label">區域</dt>
                <dd className="einfo-value">{eventDetails.area}</dd>

                <dt className="einfo-label">營地名稱</dt>
                <dd className="einfo-value">{eventDetails.camp}</dd>

                <dt className="einfo-label">營地地址</dt>
                <dd className="einfo-value">{eventDetails.campAdd}</dd>

                <dt className="einfo-label">住宿類型</dt>
                <dd className="einfo-value">
                  {eventDetails.selectedAccommodation?.name || '尚未選擇住宿'}
                </dd>

                <dt className="einfo-label">活動人數</dt>
                <dd className="einfo-value">{eventDetails.eventPeople} 人</dd>

                <dt className="einfo-label">
                  負擔費用<p>（每人）</p>
                </dt>
                <dd className="einfo-value">
                  {parseInt(eventDetails.costPerPerson)} 元
                </dd>

                <dt className="einfo-label">其他支出</dt>
                <dd className="einfo-value">
                  {parseInt(eventDetails.otherFees)} 元
                </dd>

                <dt className="einfo-label">備註</dt>
                <dd className="einfo-value">{eventDetails.notes}</dd>
              </dl>
            </div>
          </div>
          <div className="joinbtn1">
            {/* 提交按鈕 */}
            <Button
              label="回上一頁"
              onClick={() => (window.location.href = '/create.html')}
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
