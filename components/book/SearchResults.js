import { useState, useEffect, useContext } from 'react'
import Button from './button'
import styles from '@/styles/BookStyle.module.css'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import OffcanvasCart from './offcanvas'
import { BookCartContext } from '../../context/book/BookCartContext.js'

// 單個搜索結果組件
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
    <article className={styles.searchResult}>
      <div className={styles.resultNumber}>
        <h2>{index + 1}</h2>
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
            AddOffcanvas({ id, name, price, photos, max_per, adult, children })
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
  )
}

// 搜索結果列表
const SearchResults = ({ results }) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)
  const { dispatch } = useContext(BookCartContext)

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen)
  }

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const handleDElToCart = (product) => {
    dispatch({ type: 'CLEAR_CART', payload: product })
  }

  const AddOffcanvas = (product) => {
    handleDElToCart(product)
    handleAddToCart(product)
    toggleOffcanvas()
  }

  return (
    <>
      <OffcanvasCart
        isOpen={isOffcanvasOpen}
        toggleOffcanvas={toggleOffcanvas}
      />

      <section className={styles.searchResults}>
        <h5 className={styles.resultsCount}>
          符合條件的房型 (共 {results.length} 筆)
        </h5>
        {/* 如果篩選結果為空，顯示 "無符合" */}
        {results.length === 0 ? (
          <h3 className={styles.noResultsMessage}>無符合條件的房型方案</h3>
        ) : (
          results.map((result, index) => (
            <SearchResult
              key={result.id}
              index={index}
              {...result}
              AddOffcanvas={AddOffcanvas}
            />
          ))
        )}
      </section>
    </>
  )
}

export default SearchResults
