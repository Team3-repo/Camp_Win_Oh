import '@/styles/globals.css'
// import '@/styles/text.css'
import '@/styles/Card.css'
import '@/styles/Navbar.css'
import '@/styles/Pagi.css'
import '@/styles/Footer.css'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
