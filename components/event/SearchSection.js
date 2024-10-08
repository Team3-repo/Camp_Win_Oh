import React, { useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Button from '../book/button';
import { IoSearch } from 'react-icons/io5';

export default function SearchSection({ onFilter }) {
  const [startDate, setStartDate] = useState(null); // 管理開始日期的 state
  const [endDate, setEndDate] = useState(null); // 管理結束日期的 state

  useEffect(() => {
    // 初始化開始日期的日期選擇器
    flatpickr('#start-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: (selectedDates) => {
        setStartDate(selectedDates[0]); // 更新開始日期
      },
    });

    // 初始化結束日期的日期選擇器
    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: (selectedDates) => {
        setEndDate(selectedDates[0]); // 更新結束日期
      },
    });
  }, []);

  // 處理搜索按鈕點擊事件
  const handleSearch = () => {
    if (startDate && endDate) {
      onFilter(startDate, endDate); // 將選擇的日期傳遞給父組件
    } else {
      alert('請選擇開始日期和結束日期');
    }
  };

  return (
    <div className="esearch-container">
      <div className="esearch-title">
        <h2 className="esearch-titleh2">探索活動</h2>
      </div>
      <div className="esearch-filters">
        {/* 開始日期篩選 */}
        <div className="edate-filter">
          <label htmlFor="start-date">開始日期</label>
          <input
            type="text"
            id="start-date"
            placeholder="請選擇開始日期"
            readOnly
          />
        </div>

        {/* 結束日期篩選 */}
        <div className="edate-filter">
          <label htmlFor="end-date">結束日期</label>
          <input
            type="text"
            id="end-date"
            placeholder="請選擇結束日期"
            readOnly
          />
        </div>

        <Button
          label={
            <>
              <IoSearch />
              &nbsp;搜索
            </>
          }
          onClick={handleSearch} // 點擊搜索按鈕時執行篩選
        />
      </div>
    </div>
  );
}
