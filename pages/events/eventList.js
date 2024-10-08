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
  // 定義 state 來存放活動資料、篩選後的資料、當前頁數和每頁顯示筆數
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // 儲存篩選後的活動資料
  const [currentPage, setCurrentPage] = useState(0); // 當前頁數，從 0 開始
  const pageSize = 8; // 每頁顯示 8 筆

  const handleCreate = () => {
    window.location.href = '/events/eventCreate';
  };

  // useEffect 取得所有活動資料
  useEffect(() => {
    fetch('http://localhost:3005/events/api/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data); // 預設所有資料都顯示在篩選結果中
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  // 根據當前頁數計算要顯示的活動資料
  const startIndex = currentPage * pageSize;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + pageSize);
  const totalSlides = Math.ceil(filteredEvents.length / pageSize); // 計算總頁數

  // 處理篩選條件的函式
  const handleFilter = (startDate, endDate) => {
    // 篩選符合日期區間的活動
    const filtered = events.filter((event) => {
      const eventStartDate = new Date(event.start_date);
      const eventEndDate = new Date(event.end_date);

      return (
        (!startDate || eventStartDate >= startDate) &&
        (!endDate || eventEndDate <= endDate)
      );
    });
    setFilteredEvents(filtered);
    setCurrentPage(0); // 篩選後重設當前頁數為第一頁
  };

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
            onClick={handleCreate}
          />
        </div>
      </section>
      <section className="searchsection">
        {/* 傳遞 handleFilter 函式作為 prop 給 SearchSection */}
        <SearchSection onFilter={handleFilter} />
      </section>
      <section className="ehilight-topics2">
        <h3 className="esection-title">活動報名中</h3>
        <div className="ehilight-cards">
          {/* 動態渲染篩選後的活動卡片 */}
          {currentEvents.length > 0 ? (
            currentEvents.map((event) => (
              <Card
                key={event.event_id}
                Estate="報名中"
                title={event.event_title}
                content={`活動人數：${event.event_people}人`}
                content2={`開始日期：${new Date(
                  event.start_date
                ).toLocaleDateString()}`}
                content3={`結束日期：${new Date(
                  event.end_date
                ).toLocaleDateString()}`}
                imageUrl={event.event_pic}
                label="立即參加"
                onClick={() => alert(`參加活動：${event.event_title}`)}
              />
            ))
          ) : (
            <p>目前沒有活動資料。</p>
          )}
        </div>

        {/* 分頁功能，根據篩選結果變動 */}
        <Pagi
          currentIndex={currentPage}
          totalSlides={totalSlides}
          onDotClick={(index) => setCurrentPage(index)} // 點擊頁數時切換頁面
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} // 上一頁，確保頁數不小於 0
          onNext={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalSlides - 1))
          } // 下一頁，確保頁數不超過總頁數
        />
      </section>
      <Footer2 />
    </>
  );
}
