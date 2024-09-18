import Card from '@/components/book/card'
import SearchBox from '@/components/book/SearchBox'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/HomePage.module.css'
import Button from '@/components/book/button'
import CarouselCards from '@/components/book/carouselCard'
import CarouseBanner from '@/components/book/CarouselBanner'
import Pagi from '@/components/event/pagi'
import NewActivity from '@/components/book/NewActivity'

export default function Index() {
  return (
    <>
      <Navbar />
      <CarouseBanner />
      {/* 篩選搜尋 */}
      <SearchBox />

      {/* 標籤:地區篩選 */}
      <div className={styles.regSearch}>
        <Button
          label="全部地區"
          onClick={() => alert('Button clicked!')}
          type="btn-reg"
        />
        <Button
          label="北部"
          onClick={() => alert('Button clicked!')}
          type="btn-reg"
        />
        <Button
          label="中部"
          onClick={() => alert('Button clicked!')}
          type="btn-reg"
        />
        <Button
          label="南部"
          onClick={() => alert('Button clicked!')}
          type="btn-reg"
        />
        <Button
          label="東部"
          onClick={() => alert('Button clicked!')}
          type="btn-reg"
        />
      </div>
      <CarouselCards />
      <Pagi />

      <section className="ehilight-topics">
        <h3 className="esection-title">精選活動</h3>
        <div className="ehilight-cards">
        <Card
            PCol="cardPrice"
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" 
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
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" 
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
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" 
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
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" 
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
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" 
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
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" 
            showIcon={true}
            title="標準營位"
            content="場地區域： A區"
            content2="房型： 小木屋"
            content3="適合人數： 2-6人"
            imageUrl="https://i.postimg.cc/Xq9nC33y/4.jpg"
            label="立即前往預訂"
            onClick={() => alert('Button Clicked!')}
          />
        </div>
        <Button label="探索更多" type="btn-more" onClick={() => alert('Button clicked!')} />
      </section>

      {/* 熱門活動 */}
      
      {/* 最新消息 */}
      <NewActivity />
      <Footer1 />
    </>
  )
}