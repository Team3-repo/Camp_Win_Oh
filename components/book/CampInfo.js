import React from 'react'
import styles from '@/styles/BookStyle.module.css'

export default function CampInfo() {
  return (
    <section className={styles.campInfo}>
      <div className={styles.campTitle}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aea3433d966e2b464b1ae2cbda3cf47c96b8b03ac23f8f8e7ed412fb3de6d60?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
          className={styles.campIcon}
          alt=""
        />
        <h1 className="campName">山林樂活露營區</h1>
      </div>
      <div className={styles.campAddress}>
        <h4 className={styles.addressText}>
          編號： 319-2106 台灣花蓮縣秀林鄉太魯閣村200號
        </h4>
        <div className={styles.mapLink}>
          <h4
            href="https://www.google.com/maps/search/?api=1&query=36.50222964999376,140.4140038031799"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleMapLink}
          >
            在Google地圖上
          </h4>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb243c725ec86f422698f5b837e7194bb25a2952c40aa0cb0346bcbdd68a54a?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
            className={styles.mapIcon}
            alt="Map icon"
          />
        </div>
      </div>
      <h3 className={styles.campDescription}>
        感受山林的靜謐與悠然，盡在山林樂活
      </h3>
      <h5 className={styles.campDetails}>
        山林樂活露營區位於壯麗的太魯閣山脈之中，是一處讓人遠離塵囂、享受大自然的理想場所。這裡擁有優美的自然景觀和豐富的生態環境，適合各類露營愛好者。不論是喜愛探險的背包客，還是喜歡舒適享受的家庭旅行者，都能在這裡找到最適合的露營方式。
      </h5>
    </section>
  )
}
