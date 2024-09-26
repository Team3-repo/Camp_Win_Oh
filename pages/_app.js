import '@/styles/globals.css';
import '@/styles/Navbar.css';
import '@/styles/Pagi.css';
import '@/styles/Footer.css';
import '@/styles/EventStyle.css';
import { CartProvider } from '@/context/CartContext'; // 確保路徑正確

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
