import { useState, useEffect } from 'react'
import styles from '../../styles/HomePage.module.css'
import Button from './button'
import { IoSearch } from 'react-icons/io5'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

export default function SearchFilter({ onSearch }) {
  const [filters, setFilters] = useState('') // 營位名稱過濾
  const [selectedRoomType, setSelectedRoomType] = useState('') // 房型選擇
  const [checkInOut, setCheckInOut] = useState('') // 入住和退房日期
  const [totalPersons, setTotalPersons] = useState('') // 總人數
  const [data, setData] = useState([]) // 儲存篩選後的房型資料

  // 初次加載時顯示所有結果
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3005/book/api/searchType?campsite_id=1`
        )
        const resultData = await response.json()
        setData(resultData) // 設置初始數據
        onSearch(resultData) // 傳遞結果給父組件
      } catch (error) {
        console.error('加載全部數據時發生錯誤:', error)
      }
    }
    fetchAllData()
  }, [onSearch])

  // 日期篩選
  useEffect(() => {
    flatpickr('#check-in-out', {
      mode: 'range',
      dateFormat: 'm/d (D)',
      minDate: 'today',
      onClose: function (selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
          const startDate = selectedDates[0]
          const endDate = selectedDates[1]
          const nights = Math.round(
            (endDate - startDate) / (1000 * 60 * 60 * 24)
          )
          const formattedDates = `${instance.formatDate(
            startDate,
            'm/d (D)'
          )} - ${instance.formatDate(endDate, 'm/d (D)')}, ${nights}夜`
          document.getElementById('check-in-out').value = formattedDates
          setCheckInOut(formattedDates) // 設置日期篩選條件
        }
      },
    })
  }, [])

  // 發送篩選條件到後端 API 並進行人數篩選
  const handleSearch = async () => {
    try {
      let url = `http://localhost:3005/book/api/searchType?campsite_id=1`

      if (filters) {
        url += `&filters=${encodeURIComponent(filters)}` // 添加篩選條件
      }

      if (checkInOut) {
        url += `&check_in_out=${encodeURIComponent(checkInOut)}` // 添加日期篩選條件
      }

      if (totalPersons) {
        url += `&persons=${totalPersons}` // 添加人數篩選條件
      }

      // 根據選中的房型添加篩選條件
      if (selectedRoomType === 'tent') {
        url += `&room_types_group1=10,11,12`
      } else if (selectedRoomType === 'cabin') {
        url += `&room_types_group2=7,8,9`
      } else if (selectedRoomType === 'camper') {
        url += `&room_types_group3=4,5,6`
      }

      const response = await fetch(url)
      const resultData = await response.json()

      // 過濾符合人數條件的房型
      const filteredData = resultData.filter(
        (room) => room.max_per >= totalPersons
      )

      setData(filteredData) // 更新篩選後的結果
      onSearch(filteredData) // 傳遞結果給父組件
    } catch (error) {
      console.error('發送篩選條件時發生錯誤:', error)
    }
  }

  // 更新篩選條件
  const handleFilterChange = (e) => {
    setFilters(e.target.value)
  }

  const handleRoomTypeChange = (roomType) => {
    setSelectedRoomType(roomType)
  }

  const handlePersonsChange = (e) => {
    setTotalPersons(e.target.value)
  }

  return (
    <div className={styles.AdvancedSearchContainer}>
      <div className={styles.filterContainer}>
        <h2>適合的房型方案</h2>

        <div className={styles.dateFilter}>
          {/* 日期篩選 */}
          <div className={styles.dateSection}>
            <div className={styles.combineCol}>
              <div className={styles.bookDateFilter}>
                <label htmlFor="check-in-out">入住及退房日期:</label>
                <input type="text" id="check-in-out" placeholder="請選擇日期" />
              </div>
            </div>
          </div>

          {/* 人數篩選 */}
          <div className={styles.guestSection}>
            <div className={styles.combineCol}>
              <div className={styles.bookDateFilter2}>
                <label htmlFor="ALLperson">總人數:</label>
                <input
                  type="number"
                  id="ALLperson"
                  value={totalPersons}
                  onChange={handlePersonsChange}
                  placeholder="請選擇人數"
                />
              </div>
            </div>
          </div>

          {/* 營位名稱篩選 */}
          <div className={styles.guestSection}>
            <div className={styles.combineCol}>
              <div className={styles.bookDateFilter}>
                <label htmlFor="filters">營位名稱篩選:</label>
                <input
                  type="text"
                  id="filters"
                  value={filters}
                  onChange={handleFilterChange}
                  placeholder="輸入篩選條件"
                />
              </div>
            </div>
          </div>

          {/* 搜索按鈕 */}
          <Button
            label={
              <>
                <IoSearch />
                &nbsp;搜索
              </>
            }
            onClick={handleSearch}
          />
        </div>

        {/* 房型選擇 */}
        <div className={styles.typeContainer}>
          <h5 style={{ color: '#2c3e50', paddingTop: '10px' }}>住宿類型</h5>

          <div className={styles.typeSection}>
            <label>
              <input
                type="radio"
                name="roomType"
                value="tent"
                checked={selectedRoomType === 'tent'}
                onChange={() => handleRoomTypeChange('tent')}
              />
              帳篷
            </label>
            <label>
              <input
                type="radio"
                name="roomType"
                value="cabin"
                checked={selectedRoomType === 'cabin'}
                onChange={() => handleRoomTypeChange('cabin')}
              />
              小木屋
            </label>
            <label>
              <input
                type="radio"
                name="roomType"
                value="camper"
                checked={selectedRoomType === 'camper'}
                onChange={() => handleRoomTypeChange('camper')}
              />
              露營車
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
