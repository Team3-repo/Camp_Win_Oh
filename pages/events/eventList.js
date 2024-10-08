import React, { useEffect, useState } from 'react';
import Footer2 from '@/components/event/footer2';
import Navbar from '@/components/event/navbar';
import Button from '@/components/book/button';
import { FaArrowCircleRight } from 'react-icons/fa';
import FeatureSection2 from '@/components/event/featureSection2';
import Card from '@/components/event/card';
import Pagi from '@/components/event/pagi';
import SearchSection from '@/components/event/SearchSection';

export default function EventList() {
  // 定義state存放活動資料、當前頁數和每頁顯示筆數
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // 當前頁數，從0開始
  const pageSize = 8; // 每頁顯示

  // useEffect取得資料
  useEffect(() => {
    // Fetch API>後端取得活動資料
    fetch('http://localhost:3005/events/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  // 計算目前要顯示的活動資料
  const startIndex = currentPage * pageSize;
  const currentEvents = events.slice(startIndex, startIndex + pageSize);
  const totalSlides = Math.ceil(events.length / pageSize); // 計算總頁數

  return (
    <>
      <Navbar />
      <section className="notice-section">
        <FeatureSection2 />
        <div className="eventHoldingBtn">
          <Button
            label={
              <>
                舉辦活動&nbsp;
                <FaArrowCircleRight />
              </>
            }
            onClick={() => alert('Button clicked!')}
          />
        </div>
      </section>
      <section className="searchsection">
        <SearchSection />
      </section>
      <section className="ehilight-topics2">
        <h3 className="esection-title">活動報名中</h3>
        <div className="ehilight-cards">
          {/* 動態渲染當前頁面的 Card 組件 */}
          {currentEvents.length > 0 ? (
            currentEvents.map((event) => (
              <Card
                key={event.event_id} // 使用 event_id 作為每個卡片的唯一 key
                Estate="報名中"
                title={event.event_title}
                content={`活動人數：${event.event_people}人`}
                content2={`開始日期：${new Date(event.start_date).toLocaleDateString()}`}
                content3={`結束日期：${new Date(event.end_date).toLocaleDateString()}`}
                imageUrl={event.event_pic} // 使用資料庫中提供的圖片 URL
                label="立即參加"
                onClick={() => alert(`參加活動：${event.event_title}`)}
              />
            ))
          ) : (
            <p>目前沒有活動資料。</p>
          )}
        </div>

        {/* 分頁功能 */}
        <Pagi
          currentIndex={currentPage} // 傳遞當前頁數
          totalSlides={totalSlides} // 傳遞總頁數
          onDotClick={(index) => setCurrentPage(index)} // 點擊頁數時切換頁面
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} // 上一頁，確保頁數不小於 0
          onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalSlides - 1))} // 下一頁，確保頁數不超過總頁數
        />
      </section>
      <Footer2 />
    </>
  );
}
