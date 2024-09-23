import '@/styles/globals.css'
import '@/styles/component_style/pagi.css'
import '@/styles/component_style/Footer.css'
import '@/styles/EventStyle.css'


export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
