import React from 'react'
import styles from '../../styles/HomePage.module.css'

export default function NewActivity() {
  return (
    <>
    <h4 className={styles.carolNewsH4}>最新消息</h4>
      <div className={styles.carolNewsContainer}>
        <div className={styles.carolCardNews}>
          <img
            src="https://camp.travel.rakuten.co.jp/campaign-files/banners/outdoor_coupon_600x300.jpg"
            alt="營地1"
          />
        </div>
        <div className={styles.carolCardNews}>
          <img
            src="https://camp.travel.rakuten.co.jp/campaign-files/banners/outdoor_coupon_600x300.jpg"
            alt="營地2"
          />
        </div>
        <div className={styles.carolCardNews}>
          <img
            src="https://camp.travel.rakuten.co.jp/campaign-files/banners/outdoor_coupon_600x300.jpg"
            alt="營地3"
          />
        </div>
      </div>
    </>
  )
}
