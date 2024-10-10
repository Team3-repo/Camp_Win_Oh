import React, { useEffect, useContext } from 'react';
import Button from '@/components/book/button';
import { EventContext } from '@/context/event/EventContext';

export default function EventPreForm() {
  const { eventData, setEventData } = useContext(EventContext);

  const handleBack = () => {
    window.history.back(); // 回上頁不重載
  };

  useEffect(() => {
    const storedEventData = localStorage.getItem('eventPreviewData');
    if (storedEventData) {
      setEventData(JSON.parse(storedEventData)); // 用setEventData設定Context資料
    }
  }, [setEventData]);

  if (!eventData) {
    return <h2 style={{ color: '#ff82d2' }}>資料載入中，請稍後</h2>
    ;
  }

  return (
    <section className="ecsectionall2">
      <div className="ecsection-form">
        {/* 活動圖片 */}
        <div className="ecsection">
          <div className="ecsection-title">
            <h2>活動預覽</h2>
          </div>
          <div className="event-content">
            <img
              src={eventData.imageUrl || 'https://via.placeholder.com/400x200'}
              alt="Event image"
              className="event-image"
            />
          </div>
          {/* 活動簡介 */}
          <div className="ectitle">
            <h3 className="ech3">活動簡介</h3>
          </div>
          <div className="ecform-group">
            <p>{eventData.eventDescription}</p>
          </div>

          {/* 活動資訊 */}
          <div className="ectitle">
            <h3 className="ech3">活動資訊</h3>
          </div>
          <div className="event-info">
            <dl className="einfo-list">
              <dt className="einfo-label">活動名稱</dt>
              <dd className="einfo-value">{eventData.eventTitle}</dd>

              <dt className="einfo-label">主辦人</dt>
              <dd className="einfo-value">{eventData.organizerNick}</dd>

              <dt className="einfo-label">開始日期</dt>
              <dd className="einfo-value">{eventData.eStartDate}</dd>

              <dt className="einfo-label">結束日期</dt>
              <dd className="einfo-value">{eventData.eEndDate}</dd>

              <dt className="einfo-label">營地名稱</dt>
              <dd className="einfo-value">
                {eventData.campName || '尚未選擇營地'}
              </dd>

              <dt className="einfo-label">營地地址</dt>
              <dd className="einfo-value">{eventData.campAdd}</dd>

              <dt className="einfo-label">住宿選擇</dt>
              <dd className="einfo-value">
                {eventData.selectedBookType?.name || '尚未選擇住宿'}
              </dd>

              <dt className="einfo-label">活動人數</dt>
              <dd className="einfo-value">{eventData.eventPeople} 人</dd>

              <dt className="einfo-label">負擔費用（每人）</dt>
              <dd className="einfo-value">
                {parseInt(eventData.costPerPerson)} 元
              </dd>

              <dt className="einfo-label">訂購數量</dt>
              <dd className="einfo-value">{eventData.orderQuantity} 間</dd>

              <dt className="einfo-label">總費用</dt>
              <dd className="einfo-value">
                {eventData.orderAmount + eventData.eOtherFees} 元
              </dd>

              <dt className="einfo-label">備註</dt>
              <dd className="einfo-value">{eventData.eventNotes}</dd>
            </dl>
          </div>
        </div>
        <div className="joinbtn1">
          {/* 返回上一頁與確認送出按鈕 */}
          <Button label="回上一頁" onClick={handleBack} />
          {/* <Button label="確認送出" onClick={handleSaveEvent} /> */}
        </div>
      </div>

      {/* <div className="memfea">
        <CampingFeatures />
      </div> */}
    </section>
  )
}
