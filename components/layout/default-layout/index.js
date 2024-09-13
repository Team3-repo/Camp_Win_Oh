import Navbar from '../../event/navbar'
import Footer from '../../event/footer1'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
