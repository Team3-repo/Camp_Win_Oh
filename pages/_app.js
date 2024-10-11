import '@/styles/globals.css'
import '@/styles/component_style/pagi.css'
import '@/styles/EventStyle.css'
// import '@/styles/Navbar.css';
// import '@/styles/Pagi.css';
// import '@/styles/Footer.css';
import '@/styles/EventStyle.css'
import { CartProvider } from '@/context/CartContext' // 確保路徑正確
import { AuthProvider } from '@/hooks/use-auth' // 引入 AuthProvider
import { OrderProvider } from '@/context/OrderContext' // 引入 OrderProvider
import { ToastContainer } from 'react-toastify'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3300' // Express API URL

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <AuthProvider>
        {' '}
        {/* 包裹 AuthProvider 來處理會員認證 */}
        <CartProvider>
          {' '}
          {/* 保留 CartProvider */}
          <OrderProvider>
            {' '}
            {/* 新增 OrderProvider */}
            <Component {...pageProps} />
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  )
}
