import styles from '../../styles/HomePage.module.css'
import Button from './button'
import { IoSearch } from 'react-icons/io5'
import { useState } from 'react'
import CarouselCards from './carouselCard'

export default function SearchFilter() {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [accordionOpen, setAccordionOpen] = useState(false)
  const [showResults, setShowResults] = useState(false) // 新增狀態

  const filterOptions = {
    房型: [
      { id: 'bedType', label: '全部' },
      { id: 'camp', label: '帳篷區' },
      { id: 'campCar', label: '露營車' },
      { id: 'house', label: '小木屋' },
    ],
    區域: [
      { id: 'campArea', label: '全部' },
      { id: 'campA', label: 'A' },
      { id: 'campB', label: 'B' },
      { id: 'campC', label: 'C' },
    ],
  }

  const [selectedFilters, setSelectedFilters] = useState([
    'bedType',
    'campArea',
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilterChange = (event) => {
    const { id, checked } = event.target
    if (checked) {
      setSelectedFilters((prev) => [...prev, id])
    } else {
      setSelectedFilters((prev) => prev.filter((filter) => filter !== id))
    }
  }

  const filterVisibleOptions = (options) => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm)
    )
  }

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value
    setCheckInDate(selectedDate)
    if (!selectedDate || new Date(selectedDate) >= new Date(checkOutDate)) {
      setCheckOutDate('')
    }
  }

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value)
  }

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen)
  }

  const incrementAdults = () => setAdults((prev) => prev + 1)
  const decrementAdults = () =>
    setAdults((prev) => (prev > 1 ? prev - 1 : prev))
  const incrementChildren = () => setChildren((prev) => prev + 1)
  const decrementChildren = () =>
    setChildren((prev) => (prev > 0 ? prev - 1 : prev))

  const handleSearchClick = () => {
    setShowResults(true) // 點擊時顯示篩選結果區塊
  }

  return (
    <>
      <div className={styles.AdvancedSearchContainer}>
        <div className={styles.filterContainer}>
          <h2>適合的房型方案</h2>
          <div className={styles.dateFilter}>
            {/* 日期 */}
            <div className={styles.dateSection}>
              <div className={styles.combineCol}>
                <label htmlFor="check-in">選擇的入住日期:</label>
                <input
                  type="date"
                  id="check-in"
                  placeholder="年/月/日"
                  value={checkInDate}
                  onChange={handleCheckInChange}
                  min={new Date().toISOString().split('T')[0]} // 禁用過去的日期
                />
              </div>
            </div>
            <div className={styles.dateSection}>
              <div className={styles.combineCol}>
                <label htmlFor="check-out">選擇的退房日期:</label>
                <input
                  type="date"
                  id="check-out"
                  value={checkOutDate}
                  onChange={handleCheckOutChange}
                  min={
                    checkInDate
                      ? new Date(checkInDate).toISOString().split('T')[0]
                      : new Date().toISOString().split('T')[0]
                  } // 退房日期最小值為入住日期
                  disabled={!checkInDate} // 如果沒有選擇入住日期，禁用退房日期選擇
                />
              </div>
            </div>
            {/* 人數 */}
            <div className={styles.guestSection}>
              <div className={styles.combineCol}>
                {/* 手風琴-標題:顯示大人和小孩數量 */}
                <label>選擇人數:</label>
                <div
                  onClick={toggleAccordion}
                  style={{
                    cursor: 'pointer',
                    padding: '0px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '5px',
                  }}
                >
                  <span>
                    <p style={{ marginLeft: '10px' }}>
                      {adults} 大人, {children} 小孩
                    </p>
                  </span>
                </div>
                {/* 手風琴-內容 */}
                {accordionOpen && (
                  <div
                    style={{
                      position: 'absolute', // 懸浮位置設置為絕對定位
                      top: '119px', // 你可以根據需求調整位置
                      right: '165px', // 應用在頁面右側
                      width: '200px', // 固定寬度，防止內容擴展
                      padding: '10px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '5px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 添加陰影效果
                      zIndex: 1000, // 確保懸浮區塊在所有其他元素之上
                    }}
                  >
                    <div>
                      <label style={{ marginRight: '20px' }}>大人數量: </label>
                      <button onClick={decrementAdults}>-</button>
                      <span style={{ margin: '0 10px' }}>{adults}</span>
                      <button onClick={incrementAdults}>+</button>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                      <label style={{ marginRight: '20px' }}>小孩數量:</label>
                      <button onClick={decrementChildren}>-</button>
                      <span style={{ margin: '0 10px' }}>{children}</span>
                      <button onClick={incrementChildren}>+</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 搜索btn */}
            <Button
              label={
                <>
                  <IoSearch />
                  &nbsp;搜索
                </>
              }
              onClick={handleSearchClick}
            />
          </div>

          {/* 分組顯示篩選選項 */}
          {Object.keys(filterOptions).map((group) => (
            <div key={group} className={styles.typeSection}>
              <label>{group}</label>
              <div className={styles.typeOption}>
                {filterVisibleOptions(filterOptions[group]).map((option) => (
                  <div key={option.id}>
                    <label>
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={selectedFilters.includes(option.id)}
                        onChange={handleFilterChange}
                      />
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 已選擇的選項顯示 */}
          <div style={{ marginTop: '20px' }}>
            <strong>選擇的設施與服務:</strong>{' '}
            {selectedFilters.length > 0 ? selectedFilters.join(', ') : '未選擇'}
          </div>
        </div>
      </div>

      {/* 將篩選結果區塊移到篩選器的外部 */}
      {showResults && (
        <div>
          {/* 標籤:地區篩選 */}
          <div className={styles.regSearch}>
            <Button
              label="全部地區"
              onClick={() => alert('Button clicked!')}
              type="btn-reg"
            />
            <Button
              label="北部"
              onClick={() => alert('Button clicked!')}
              type="btn-reg"
            />
            <Button
              label="中部"
              onClick={() => alert('Button clicked!')}
              type="btn-reg"
            />
            <Button
              label="南部"
              onClick={() => alert('Button clicked!')}
              type="btn-reg"
            />
            <Button
              label="東部"
              onClick={() => alert('Button clicked!')}
              type="btn-reg"
            />
          </div>

          {/* 輪播圖:篩選結果 */}
          <div className={styles.carolCard}>
            <CarouselCards title="營區" />
          </div>
        </div>
      )}
    </>
  )
}
