import Card from '@/components/book/card'
import SearchBox from '@/components/book/SearchBox'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/HomePage.module.css'
import Button from '@/components/book/button'
import CarouselCard from '@/components/book/carouselCard'
import Pagi from '@/components/event/pagi'
import NewActivity from '@/components/book/NewActivity'
import CarouselBanner from '@/components/book/CarouselBanner'

export default function Index() {
  const images = [
    'https://i.postimg.cc/9f7MBgC9/camp-2650359-1280-0.jpg',
    'https://i.postimg.cc/Gmgdjy70/camping-6882479-1280-0.jpg',
    'https://i.postimg.cc/xdkYp1hX/istockphoto-1148431349-1024x1024-0.jpg',
  ]

  const titles = [
    '一緒にキャンプにいきましょう!',
    '大自然でリラックスしましょう',
    '忘れられない思い出を作りましょう',
  ]
  return (
    <>
      <Navbar />

      {/* 輪播圖 */}
      <div>
        <CarouselBanner images={images} titles={titles} />
      </div>

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
      {/* 輪播圖:篩選結果 */}
      <CarouselCard />

      {/* 熱門推薦活動 */}

      {/* 熱門推薦活動 */}
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
        </div>
        <Button
          label="探索更多"
          type="btn-more"
          onClick={() => alert('Button clicked!')}
        />
      </section>

      {/* 最新消息 */}
      <NewActivity />

      <Footer1 />
    </>
  )
}
