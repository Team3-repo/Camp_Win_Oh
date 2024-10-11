// 房型方案清單列表
import { useState, useEffect, useContext } from 'react'
import Button from './button'
import styles from '@/styles/BookStyle.module.css'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import { useRouter } from 'next/router' // 引入 useRouter 來獲取當前路由資訊
import { BookCartContext } from '../../context/book/BookCartContext.js'
import OffcanvasCart from './offcanvas'

const SearchResult = ({
  id,
  index,
  photos,
  name,
  info,
  max_per,
  price,
  bed_opt,
  adult,
  children,
  AddOffcanvas,
}) => {
  return (
    <>
      <article className={styles.searchResult}>
        <div className={styles.resultNumber}>
          {/* 使用 index 參數，從 1 開始編號 */}
          <h2>{index+1}</h2>
        </div>
        <img src={photos} alt={name} className={styles.resultImage} />
        <div className={styles.resultDetails}>
          <h3 className={styles.resultTitle}>{name}</h3>
          <h5 className={styles.resultDescription}>{info}</h5>
          <h5 className={styles.resultCapacity}>
            適合人數: 最多可容納{max_per}人
          </h5>
          <h5 className={styles.resultPrice}>
            價格: <span className={styles.priceHighlight}>{price}/晚</span>
          </h5>
          <h5 className={styles.resultFacilities}>床型: {bed_opt}</h5>
        </div>
        <div className={styles.resultActions}>
          <Button
            label="前往預約"
            onClick={() =>
              AddOffcanvas({
                id,
                name,
                price,
                photos,
                max_per,
                adult,
                children,
              })
            }
          />
          <Button
            label={
              <>
                <FaHeartCirclePlus />
                &nbsp;加入收藏
              </>
            }
            onClick={() => alert('Button clicked!')}
          />
        </div>
      </article>
    </>
  )
}

const SearchResults = () => {
  const [data, setData] = useState([])
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false) // 管理 Offcanvas 顯示狀態
  const router = useRouter() // 使用 useRouter 來獲取當前路由資訊
  const { dispatch } = useContext(BookCartContext)

  useEffect(() => {
    const { campsite } = router.query // 從路由中獲取 campsite 查詢參數
    if (campsite) {
      // 如果獲取到 campsite 參數，則進行 API 請求
      fetch(`http://localhost:3005/book/api/BookData?campsite_id=${campsite}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))
    }
  }, [router.query]) // 當 router.query 變化時重新執行 useEffect

  // 控制 Offcanvas 的顯示與隱藏
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen)
  }

  // 處理加入購物車的函數
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
    // alert(`已將 【${product.name}】 加入購物車！`)
  }

  // 合併函數：同時處理「加入購物車」和「開啟 Offcanvas」
  const AddOffcanvas = (product) => {
    handleAddToCart(product) // 執行加入購物車功能
    toggleOffcanvas() // 開啟 Offcanvas
  }

  return (
    <>
      <OffcanvasCart
        isOpen={isOffcanvasOpen}
        toggleOffcanvas={toggleOffcanvas}
      />

      <section className={styles.searchResults}>
        <h5 className={styles.resultsCount}>
          符合條件的房型 (共 {data.length} 筆)
        </h5>
        {data.map((result, index) => (
          <SearchResult
            key={result.id} // 使用後端返回的 id 作為 key
            index={index}
            {...result}
            AddOffcanvas={AddOffcanvas}
          />
        ))}
      </section>
    </>
  )
}

export default SearchResults
