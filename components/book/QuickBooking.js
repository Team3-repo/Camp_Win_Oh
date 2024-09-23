import React from 'react'
import Card from './card'
import styles from '@/styles/component_style/quickbooking.module.css'

export default function QuickBooking() {
  return (
    <>
      <section className={styles.quickBooking}>
        <h4 className={styles.sectionTitle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a76208ec5e035b1d9a1d13b4090401c440bcecd0746f830c0db9ac781edceb74?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
            alt=""
            className={styles.titleIcon}
          />
          懶人包 -- 快速訂房
        </h4>
        <div className={styles.QBookContainer}>
          <div className={styles.bookingDescription}>
            <h3>營區：山林樂活露營區</h3>
            <p>
              豪華帳篷露營區，專為追求極致享受的您打造。在這裡，您將體驗到頂級的舒適設施與大自然的完美融合。寬敞的帳篷內配有豪華床鋪、專屬衛浴和私密的戶外休息區，讓您在星空下盡享奢華與寧靜，重新定義露營體驗！
            </p>
            <p>位置：靠近湖邊或景觀區域，環境優美</p>
            <p>適合人數： 2-6人</p>
          </div>
          <div className={styles.bookingOptions}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Card
                PCol="cardPrice"
                price="NT$ 12344/晚"
                cardLike="cardLike"
                cardLikeIcon="cardLikeIcon"
                showIcon={true}
                title="山林樂活露營區"
                content="房型： 小木屋"
                content2="容納人數： 最多可容納8人"
                imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
                label="立即前往預訂"
                onClick={() => alert('Button Clicked!')}
              />
              <Card
                PCol="cardPrice"
                price="NT$ 12344/晚"
                cardLike="cardLike"
                cardLikeIcon="cardLikeIcon"
                showIcon={true}
                title="山林樂活露營區"
                content="房型： 小木屋"
                content2="容納人數： 最多可容納8人"
                imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
                label="立即前往預訂"
                onClick={() => alert('Button Clicked!')}
              />
              <Card
                PCol="cardPrice"
                price="NT$ 12344/晚"
                cardLike="cardLike"
                cardLikeIcon="cardLikeIcon"
                showIcon={true}
                title="山林樂活露營區"
                content="房型： 小木屋"
                content2="容納人數： 最多可容納8人"
                imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
                label="立即前往預訂"
                onClick={() => alert('Button Clicked!')}

              />
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
