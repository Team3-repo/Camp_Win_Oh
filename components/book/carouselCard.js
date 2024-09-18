import React from 'react'
import styles from '../../styles/HomePage.module.css'

export default function CarouselCards() {
  return (
    <>
      <div className={styles.carolContainer}>
        <div className={styles.carolCard}>
          <img src="https://i.postimg.cc/66h28PMb/th-9.jpg" alt="營地1" />
          <div className={styles.overlay}>森林星宿營地</div>
        </div>
        <div className={styles.carolCard}>
          <img src="https://i.postimg.cc/66h28PMb/th-9.jpg" alt="營地2" />
          <div className={styles.overlay}>松木童話社區</div>
        </div>
        <div className={styles.carolCard}>
          <img src="https://i.postimg.cc/66h28PMb/th-9.jpg" alt="營地3" />
          <div className={styles.overlay}>藍湖野趣營</div>
        </div>
      </div>
    </>
  )
}
