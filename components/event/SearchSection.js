import React, { useEffect, useState } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import Button from '../book/button'
import { IoSearch } from 'react-icons/io5'

export default function SearchSection({ onFilter }) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    flatpickr('#start-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: (selectedDates) => {
        setStartDate(selectedDates[0]) // 更新 startDate
      },
    })

    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: (selectedDates) => {
        setEndDate(selectedDates[0]) // 更新 endDate
      },
    })
  }, [])

  // 處理搜尋邏輯
  const handleSearch = () => {
    if (startDate && endDate) {
      onFilter(startDate, endDate)
    } else {
      alert('請選擇開始日期和結束日期')
    }
  }

  // 新增的清除篩選功能
  const handleClear = () => {
    setStartDate(null)
    setEndDate(null)

    // 清空日期輸入框
    document.getElementById('start-date').value = ''
    document.getElementById('end-date').value = ''

    // 將篩選條件設置為全部活動
    onFilter(null, null)
  }

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

        <div className='esearchbtn'>
          {/* 搜尋按鈕 */}
          <Button
            label={
              <>
                <IoSearch />
                &nbsp;搜尋
              </>
            }
            onClick={handleSearch}
          />

          {/* 清除篩選按鈕 */}
          <Button
            label="一鍵清除"
            onClick={handleClear} // 新增的清除功能
          />
        </div>
      </div>
    </div>
  )
}
