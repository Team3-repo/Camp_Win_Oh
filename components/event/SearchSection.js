
import React, { useEffect } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import Button from '../book/button'
import { IoSearch } from 'react-icons/io5'

export default function SearchSection() {
  useEffect(() => {
    flatpickr('#date-range', {
      mode: 'range',
      dateFormat: 'm/d (D)',
      onClose: function (selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
          const startDate = selectedDates[0]
          const endDate = selectedDates[1]
          const nights = Math.round(
            (endDate - startDate) / (1000 * 60 * 60 * 24)
          )
          document.getElementById('date-range').value = `${instance.formatDate(
            startDate,
            'm/d (D)'
          )} - ${instance.formatDate(endDate, 'm/d (D)')}, ${nights}晚`
        }
      },
    })
  }, [])

  return (
    <div className='esearch-container'>
      <div className='esearch-title'>
        <h2 className='esearch-titleh2'>探索活動</h2>
      </div>
      <div className='esearch-filters'>
        <div className='edate-filter'>
          <label htmlFor="edate-range">開始及結束日期</label>
          <input
            type="text"
            id="date-range"
            placeholder="08/24 (Sat) - 08/25 (Sun), 1晚"
          />
        </div>
        <div className='eregion-filter'>
          <label htmlFor="eregion">區域</label>
          <select id="eregion">
            <option value="北部">北部</option>
            <option value="中部">中部</option>
            <option value="南部" selected>
              南部
            </option>
            <option value="東部">東部</option>
          </select>
        </div>
        <Button
          label={
            <>
              <IoSearch />
              &nbsp;搜索
            </>
          }
          onClick={() => alert('Button clicked!')}
        />
      </div>
    </div>
  )
}
