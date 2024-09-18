import Card from '@/components/book/card'
import SearchBox from '@/components/book/SearchBox'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/BookStyle.module.css'
import Button from '@/components/book/button'
import CarouselCards from '@/components/book/carouselCard'
import CarouseBanner from '@/components/book/CarouselBanner'
import Pagi from '@/components/event/pagi'

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

      <Footer1 />
    </>
  )
}
