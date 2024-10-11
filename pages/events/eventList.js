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
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0); // 現在頁數
  const pageSize = 8; // 每頁顯示8筆

  const handleCreate = () => {
    window.location.href = '/events/eventCreate';
  };


  useEffect(() => {
    fetch('http://localhost:3005/events/api/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data); 
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const startIndex = currentPage * pageSize;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + pageSize);
  const totalSlides = Math.ceil(filteredEvents.length / pageSize); // total

 
  const handleFilter = (startDate, endDate) => {
    const filtered = events.filter((event) => {
      const eventStartDate = new Date(event.start_date);
      const eventEndDate = new Date(event.end_date);

      return (
        (!startDate || eventStartDate >= startDate) &&
        (!endDate || eventEndDate <= endDate)
      );
    });
    setFilteredEvents(filtered);
    setCurrentPage(0); // 重設p1
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
        <SearchSection onFilter={handleFilter} />
      </section>
      <section className="ehilight-topics2">
        <h3 className="esection-title">活動報名中</h3>
        <div className="ehilight-cards">
          {/* render篩選卡片 */}
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

        <Pagi
          currentIndex={currentPage}
          totalSlides={totalSlides}
          onDotClick={(index) => setCurrentPage(index)} // 切換
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} // 上一頁(不< 0)
          onNext={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalSlides - 1))
          } // 下一頁(不>total)
        />
      </section>
      <Footer2 />
    </>
  );
}
