import React from 'react'
import styles from '../../styles/component_style/CarouselBanner.module.css'

export default function CarouseBanner() {
  return (
    <section className={styles.carouseBanner}>
      <img
        src='https://i.postimg.cc/9f7MBgC9/camp-2650359-1280-0.jpg'
        alt="Camping scenery"
        className={styles.carouseImage}
      />
      <div className={styles.carouseContent}>
        <h2 className={styles.carouseTitle}>
          一緒にキャンプにいきましょう!
        </h2>
        <div className={styles.pageDots}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${styles.pageDot} ${index === 3 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
