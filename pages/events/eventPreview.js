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

  // 返回至活動創建頁面
  const handleBack = () => {
    window.location.href = '/events/eventCreate'
  }

  // 提交活動資料至後端
  const handleSaveEvent = async () => {
    const eventData = {
      event_id: Date.now().toString(), // 使用時間戳作為活動ID
      user_id: 1, // 假設使用者ID為1，實際情況應取決於登入的使用者ID
      organizer_nick: eventPreview.organizerNick,
      event_pic: eventPreview.imageUrl,
      event_description: eventPreview.eventDescription,
      event_title: eventPreview.eventTitle,
      start_date: eventPreview.eStartDate,
      end_date: eventPreview.eEndDate,
      camp_id: eventPreview.camp_id, // 營地ID
      camp_address: eventPreview.campAdd,
      selected_book_type: eventPreview.selectedBookType?.id, // 房型ID
      order_quantity: eventPreview.orderQuantity,
      event_people: eventPreview.eventPeople,
      order_amount: eventPreview.orderAmount,
      other_fees: eventPreview.eOtherFees,
      total_cost: parseInt(eventPreview.orderAmount) + parseInt(eventPreview.eOtherFees),
      cost_per_person: parseInt(eventPreview.costPerPerson),
      event_notes: eventPreview.eventNotes,
      created_at: new Date().toISOString(),
      deadline: new Date().toISOString(), // 您可以根據需求調整 deadline 的值
    }

    try {
      const response = await fetch('http://localhost:3001/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      if (response.ok) {
        alert('恭喜お～活動建立成功')
        window.location.href = '/events' // 成功儲存後返回...哪裡？恩災
      } else {
        alert('儲存活動時出錯，請稍後再試！')
        console.error('儲存活動時出錯')
      }
    } catch (error) {
      console.error('出現錯誤', error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="ecsection-title">
        <h2>活動預覽</h2>
      </div>
      <section className="ecsectionall2">
        <div className="ecsection-form">
          {/* 活動圖片 */}
          <div className="ecsection">
            <div className="event-content">
              <img
                src={eventPreview.imageUrl || 'https://via.placeholder.com/400x200'}
                alt="Event image"
                className="event-image"
              />
            </div>
            {/* 活動簡介 */}
            <div className="ectitle">
              <h3 className="ech3">活動簡介</h3>
            </div>
            <div className="ecform-group">
              <p>{eventPreview.eventDescription}</p>
            </div>

            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>
            <div className="event-info">
              <dl className="einfo-list">
                <dt className="einfo-label">活動名稱</dt>
                <dd className="einfo-value">{eventPreview.eventTitle}</dd>

                <dt className="einfo-label">主辦人</dt>
                <dd className="einfo-value">{eventPreview.organizerNick}</dd>

                <dt className="einfo-label">開始日期</dt>
                <dd className="einfo-value">{eventPreview.eStartDate}</dd>

                <dt className="einfo-label">結束日期</dt>
                <dd className="einfo-value">{eventPreview.eEndDate}</dd>

                <dt className="einfo-label">營地名稱</dt>
                <dd className="einfo-value">{eventPreview.campName || '尚未選擇營地'}</dd>

                <dt className="einfo-label">營地地址</dt>
                <dd className="einfo-value">{eventPreview.campAdd}</dd>

                <dt className="einfo-label">住宿選擇</dt>
                <dd className="einfo-value">{eventPreview.selectedBookType?.name || '尚未選擇住宿'}</dd>

                <dt className="einfo-label">活動人數</dt>
                <dd className="einfo-value">{eventPreview.eventPeople} 人</dd>

                <dt className="einfo-label">負擔費用（每人）</dt>
                <dd className="einfo-value">{parseInt(eventPreview.costPerPerson)} 元</dd>

                <dt className="einfo-label">訂購數量</dt>
                <dd className="einfo-value">{eventPreview.orderQuantity} 間</dd>

                <dt className="einfo-label">總費用</dt>
                <dd className="einfo-value">{eventPreview.orderAmount + eventPreview.eOtherFees} 元</dd>

                <dt className="einfo-label">備註</dt>
                <dd className="einfo-value">{eventPreview.eventNotes}</dd>
              </dl>
            </div>
          </div>
          <div className="joinbtn1">
            {/* 返回上一頁與確認送出按鈕 */}
            <Button label="回上一頁" onClick={handleBack} />
            <Button label="確認送出" onClick={handleSaveEvent} />
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
