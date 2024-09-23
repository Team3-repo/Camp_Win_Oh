import { useEffect, useState } from 'react'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/BookStyle.module.css'
import CarouselBanner from '@/components/book/CarouselBanner'
import Accordion from '@/components/book/accordion'
import SuggestCard from '@/components/book/SuggestCard'
import SearchFilter from '@/components/book/SearchFilter'
import BookNav from '@/components/book/booknav'
import CampInfo from '@/components/book/CampInfo'
import QuickBooking from '@/components/book/QuickBooking'
import SearchResults from '@/components/book/SearchResults'
import Reviews from '@/components/book/Reviews'

export default function Index() {
  // 輪播大圖參數
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

  // 手風琴fetch
  const [accordionData, setAccordionData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 使用 fetch 來從 public 資料夾中的 JSON 檔案讀取資料
    fetch('/book/accordionData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setAccordionData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <Navbar />

      {/* 輪播圖 */}
      <div>
        <CarouselBanner images={images} titles={titles} />
      </div>

      {/* book-nav */}
      <BookNav />

      {/* info */}
      <CampInfo />

      {/* 推薦方案 */}
      <QuickBooking />

      {/* 篩選搜尋 */}
      <SearchFilter />
      <SearchResults />

      {/* 輪播圖:篩選結果 */}
      {/* <CarouselCard title="房型方案" /> */}

      {/* 手風琴-注意事項 */}
      <div className={styles.AccordCon}>
        <Accordion data={accordionData} />
      </div>

      {/* comment */}
      <Reviews />

      {/* 推薦相似營地 */}
      <SuggestCard />

      <Footer1 />
    </>
  )
}
