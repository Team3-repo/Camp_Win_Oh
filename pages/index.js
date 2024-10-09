import Card from '@/components/book/card'
import SearchBox from '@/components/book/SearchBox'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import styles from '@/styles/HomePage.module.css'
import Button from '@/components/book/button'
import NewActivity from '@/components/book/NewActivity'
import CarouselBanner from '@/components/book/CarouselBanner'
import QuickBooking from '@/components/book/QuickBooking'
import SuggestCard from '@/components/book/SuggestCard'

export default function Index() {
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
  return (
    <>
      <Navbar />

      {/* 輪播圖 */}
      <div>
        <CarouselBanner images={images} titles={titles} />
      </div>

      {/* 篩選搜尋 */}
      <SearchBox />
      
      {/* 熱門推薦營地 */}
      <SuggestCard />

      {/* 懶人包 */}
      <QuickBooking />

      {/* 熱門推薦活動 */}

      <Footer1 />
    </>
  )
}
