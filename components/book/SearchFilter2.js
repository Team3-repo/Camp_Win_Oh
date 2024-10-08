import styles from '../../styles/HomePage.module.css'
import Button from './button'
import { IoSearch } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

export default function SearchFilter() {

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

  // 搜索btn

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
          document.getElementById(
            'check-in-out'
          ).value = `${instance.formatDate(
            startDate,
            'm/d (D)'
          )} - ${instance.formatDate(endDate, 'm/d (D)')},  ${nights}夜`
        }
      },
    })
  }, [])

  return (
    <>
      <div className={styles.AdvancedSearchContainer}>
        <div className={styles.filterContainer}>
          <h2>適合的房型方案</h2>
          <div className={styles.dateFilter}>
            {/* 日期 */}
            <div className={styles.dateSection}>
              <div className={styles.combineCol}>
                <div className={styles.bookDateFilter}>
                  <label htmlFor="check-in-out">入住及退房日期:</label>
                  <input
                    type="text"
                    id="check-in-out"
                    placeholder="請選擇日期"
                  />
                </div>
              </div>
            </div>

            {/* 人數 */}
            <div className={styles.guestSection}>
              <div className={styles.combineCol}>
                <div className={styles.bookDateFilter}>
                  <label htmlFor="ALLperson">總人數:</label>
                  <input
                    type="number"
                    id="ALLperson"
                    placeholder="請選擇人數"
                  />
                </div>
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
            />
          </div>

{/* 分組顯示篩選選項 */}
{Object.keys(filterOptions).map((group) => (
            <div key={group} className={styles.typeSection}>
              <label>{group}</label>
              <div className={styles.typeOption}>
                {filterOptions[group].map((option) => (
                  <div key={option.id}>
                    <label>
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={selectedFilters.includes(option.id)}
                        onChange={(e) => {
                          const newFilters = [...selectedFilters];
                          if (e.target.checked) {
                            newFilters.push(option.id);
                          } else {
                            const index = newFilters.indexOf(option.id);
                            if (index > -1) {
                              newFilters.splice(index, 1);
                            }
                          }
                          setSelectedFilters(newFilters);
                        }}
                      />
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* 已選擇的選項顯示 */}
          {/* <div style={{ marginTop: '20px' }}>
            <strong>選擇的設施與服務:</strong>
            {selectedFilters.length > 0 ? selectedFilters.join(', ') : '未選擇'}
          </div> */}
        </div>
      </div>
    </>
  )
}