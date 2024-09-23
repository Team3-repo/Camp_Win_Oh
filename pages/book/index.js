import SearchBox from '@/components/book/SearchBox'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/BookStyle.module.css'
import Button from '@/components/book/button'
import CarouselCard from '@/components/book/carouselCard'
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


      {/* 最新消息 */}
      <NewActivity />

      <Footer1 />
    </>
  )
}
