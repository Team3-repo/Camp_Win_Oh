import styles from '../../styles/HomePage.module.css'
import Button from './button'
import { IoSearch } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

export default function SearchFilter2() {
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

            {/* 人數篩選 */}
          <div className={styles.guestSection}>
            <div className={styles.combineCol}>
              <div className={styles.bookDateFilter2}>
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
        </div>
      </div>
    </>
  )
}
