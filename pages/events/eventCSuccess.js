import React, { useEffect, useState } from 'react';
import Footer2 from '@/components/event/footer2';
import Navbar from '@/components/event/navbar';
import Button from '@/components/book/button';

export default function EventCSuccess() {
  const [createdEvent, setCreatedEvent] = useState(null);

  useEffect(() => {
    const eventData = localStorage.getItem('createdEventData');
    if (eventData) {
      setCreatedEvent(JSON.parse(eventData)); // 從 localStorage 中讀取創建的活動資料
    }
  }, []);

  if (!createdEvent) {
    return <h3>資料載入中...</h3>;
  }

  return (
    <>
      <Navbar />
      <section className="ecssuccess-message">
        <h3>活動建立成功</h3>
      </section>
      <section className="ecsevent-list">
        <div className="ecsevent-card">
          <h2>活動資訊一覽</h2>
          {/* <img src={createdEvent.imageUrl || 'https://via.placeholder.com/400x200'} alt="Event" /> */}
          <div className="ecsevent-details">
            <p>
              <strong>主辦人:</strong> {createdEvent.organizerNick}
            </p>
            <p>
              <strong>活動名稱:</strong> {createdEvent.eventTitle}
            </p>
            <p>
              <strong>人數限制:</strong> {createdEvent.eventPeople} 人
            </p>
            <p>
              <strong>費用:</strong> {createdEvent.orderAmount} 元
            </p>
            <p>
              <strong>開始日期:</strong> {createdEvent.eStartDate}
            </p>
            <p>
              <strong>結束日期:</strong> {createdEvent.eEndDate}
            </p>
          </div>
        </div>
      </section>
      {/* <div className="entmorebtn">
        <Button label="探索更多" onClick={() => alert('Button clicked!')} />
      </div> */}
      <Footer2 />
    </>
  );
}
