import { useState } from 'react'
import styles from '@/styles/BookStyle.module.css'

export default function BookNav() {
  const [activeItem, setActiveItem] = useState('home') // 設置預設 active 項目

  const handleItemClick = (item) => {
    setActiveItem(item) // 更新 active 項目
  }
  return (
    <>
      <section className={styles.carouselSection}>
        <nav className={styles.breadcrumb}>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'home' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('home')}
          >
            概述
          </h4>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'book' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('book')}
          >
            查找空位
          </h4>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'comment' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('comment')}
          >
            評價
          </h4>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'aware' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('aware')}
          >
            行前提醒
          </h4>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'service' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('service')}
          >
            服務與設施
          </h4>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'info' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('info')}
          >
            入住資訊
          </h4>
          <h4
            className={`${styles.breadcrumbItem} ${
              activeItem === 'cancel' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('cancel')}
          >
            退訂政策
          </h4>
        </nav>
      </section>
    </>
  )
}
