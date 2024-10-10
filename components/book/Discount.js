import styles from '../../styles/HomePage.module.css'
import Button from './button'
import { IoSearch } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import CarouselCards from './carouselCard'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

export default function Discount() {
  return (
    <>
      <div className={styles.AdvancedSearchContainer}>
        <div className={styles.filterContainer}>
          <h2>優惠券</h2>

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
    </>
  )
}
