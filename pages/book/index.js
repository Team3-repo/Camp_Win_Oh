import Card from '@/components/book/card'
import SearchBox from '@/components/book/SearchBox'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '../../styles/HomePage.module.css'

export default function Index() {
  return (
    <>
      <Navbar />
      {/* 篩選搜尋 */}
      <SearchBox />

      <h3>イ~ Book-card</h3>
      <div className={styles.bookCard}>
        <Card
          PCol="cardPrice"
          price="NT$ 137/晚"
          cardLike="cardLike"
          cardLikeIcon="cardLikeIcon" // 確保這裡使用的名稱與 CSS 模組中的 class 名稱一致
          showIcon={true}
          title="標準營位"
          content="場地區域： A區"
          content2="房型： 小木屋"
          content3="適合人數： 2-6人"
          imageUrl="https://i.postimg.cc/Xq9nC33y/4.jpg"
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
          price="NT$ 137/晚"
          cardLike="cardLike"
          cardLikeIcon="cardLikeIcon" // 確保這裡使用的名稱與 CSS 模組中的 class 名稱一致
          showIcon={true}
          title="標準營位"
          content="場地區域： A區"
          content2="房型： 小木屋"
          content3="適合人數： 2-6人"
          imageUrl="https://i.postimg.cc/Xq9nC33y/4.jpg"
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
      <br />

      <Footer1 />
    </>
  )
}
