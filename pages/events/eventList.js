import React, { useEffect, useState } from 'react';
import Footer2 from '@/components/event/footer2';
import Navbar from '@/components/event/navbar';
import Button from '@/components/book/button';
import { FaArrowCircleRight } from 'react-icons/fa';
import FeatureSection2 from '@/components/event/featureSection2';
import Card from '@/components/event/card';
import Pagi from '@/components/event/pagi';
import SearchSection from '@/components/event/SearchSection';
import toast, { Toaster } from 'react-hot-toast';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // 現在頁數
  const pageSize = 8; // 每頁顯示8筆

  // 用來追蹤登入狀態
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 使用 useEffect 來初始化登入狀態
  useEffect(() => {
    // 從 localStorage 中獲取登入狀態，並將其設置到 isLoggedIn 狀態中
    const loginState = localStorage.getItem('loginState') === 'true';
    setIsLoggedIn(loginState);
  }, []); // 空依賴陣列，表示只在組件載入時執行一次

  // 創建活動的按鈕處理函數
  const handleCreate = () => {
    if (!isLoggedIn) {
      // 用戶未登入時顯示提示，並跳轉至登入頁面
      toast.error('請先登入再創建活動！', {
        duration: 3000,
        position: 'top-center',
      });
      // 延遲跳轉到登入頁面並附帶 redirect 參數
      setTimeout(() => {
        window.location.href = '/user/modal?redirect=/events/eventCreate'; // 加入 redirect 參數
      }, 3000);
    } else {
      // 用戶已登入時，跳轉到創建活動頁面
      window.location.href = '/events/eventCreate';
    }
  };

  // 獲取活動列表
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

  // 依日期過濾活動
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
    setCurrentPage(0); // 重設至第一頁
  };

  // 點擊卡片跳轉至活動詳情頁面，並傳遞 event_id 作為 URL 參數
  const handleCardClick = (eventId) => {
    window.location.href = `/events/eventDetail/${eventId}`;
  };

  return (
    <>
      <Navbar />
      <section className="notice-section">
        <FeatureSection2 />
        <div className="eventHoldingBtn">
          {/* 判斷登入狀態的按鈕邏輯 */}
          <Button
            label={
              <>
                舉辦活動&nbsp;
                <FaArrowCircleRight />
              </>
            }
            onClick={handleCreate} // 判斷登入狀態後決定跳轉
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
                content2={`開始日期：${new Date(event.start_date).toLocaleDateString()}`}
                content3={`結束日期：${new Date(event.end_date).toLocaleDateString()}`}
                imageUrl={event.event_pic}
                label="查看詳情"
                onClick={() => handleCardClick(event.event_id)} // 點擊卡片跳轉至詳情頁面
              />
            ))
          ) : (
            <h5 style={{ color: '#ff82d2' }}>目前沒有活動報名中</h5>
          )}
        </div>

        <Pagi
          currentIndex={currentPage}
          totalSlides={totalSlides}
          onDotClick={(index) => setCurrentPage(index)} // 切換
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} // 上一頁(不< 0)
          onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalSlides - 1))} // 下一頁(不>total)
        />
      </section>
      <Footer2 />
      <Toaster />
    </>
  );
}
