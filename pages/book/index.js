import { useEffect, useState, useRef } from 'react'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/BookStyle.module.css'
import CarouselBanner from '@/components/book/CarouselBanner'
import Accordion from '@/components/book/accordion'
import BookNav from '@/components/book/booknav'
import CampInfo from '@/components/book/CampInfo'
import QuickBooking from '@/components/book/QuickBooking'
import SearchResults from '@/components/book/SearchResults'
import Reviews from '@/components/book/Reviews'
import { BookCartProvider } from '@/context/book/BookCartContext'
import SuggestCard2 from '@/components/book/SuggestCard2'
import OffcanvasCart from '@/components/book/offcanvas'
import SearchFilter2 from '@/components/book/SearchFilter2'

export default function Index() {
  // 輪播大圖參數
  const images = [
    'https://blogger.googleusercontent.com/img/a/AVvXsEgsgrEeSaTmv-Cp0Weq_uwhGPCqmMH1fEpJ9H2j610RC6feq5XcWDjvt50iegowU-Xad_LD5ruoUCaGmdnHLXjx4gtvzRutskogqsHOF6P0EUa_Am5PH7LW_HQuWFxyqlj5IK9VXd4umvLgTudK8Qot7UcJEK3XoNk7gE8H6J2PIq1rwt5eD_t_QlOZ4uIQ',
    'https://blogger.googleusercontent.com/img/a/AVvXsEhRfyv-EMgbxjRICabPdF2FcH7HLsCga5uuHEZ0Wht4reo6oUhKCueG1NuUWO6MDSbOHGEvWY7x1caom7Sgs9Nv8rFv0VYHM1gBskh5qrt1rzgySQDbxGUTmUsnWIs_obOjXgN7ODgbkyB-G97c71CZI8_eN1Kh7hbgLXvP59Sv5KN8NX01uD2CTuJTCqtd',
    'https://blogger.googleusercontent.com/img/a/AVvXsEjb3t5eyq9en2kqn05QXQbvHYInnJ-UbrJM1pGyNmQh1xMJfuh-Pd4zVsbu2gpfq3c3KOpuk0j-W32fhl-ui2uWHa2SE5JnQd_VlUB4VlatV7K9hco6SBbP4rEFUZtZK9sCqxFnAVMV1IJFr5HKRwrL21wzhjaDGFeXB3CN1loZgMqm898WHeexSbXmfHmA',
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

  // 設定當前的 campsites_id
  const [campsiteId, setCampsiteId] = useState(1) // 預設為 1

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
      
      {/* 篩選搜尋 */}
      <SearchFilter2 />

      <BookCartProvider>
        <OffcanvasCart />
      </BookCartProvider>

      {/* 輪播圖:篩選結果 */}
      <BookCartProvider>
        <SearchResults campsiteId={campsiteId} />
      </BookCartProvider>

      {/* 手風琴-注意事項 */}
      <div className={styles.AccordCon}>
        <Accordion data={accordionData} />
      </div>

      {/* comment */}
      <Reviews />
      {/* 推薦相似營地 */}
      <SuggestCard2 />
      <Footer1 />
    </>
  )
}
