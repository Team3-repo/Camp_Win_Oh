import { useState, useEffect } from 'react'
import Button from './button'
import styles from '@/styles/BookStyle.module.css'
import { FaHeartCirclePlus } from 'react-icons/fa6'

const SearchResult = ({ id, photos, name, info, max_per, price, bed_opt }) => {
  return (
    <>
      <article className={styles.searchResult}>
        <div className={styles.resultNumber}>
          <h2>{id}</h2>
        </div>
        <img src={photos} alt={name} className={styles.resultImage} />
        <div className={styles.resultDetails}>
          <h3 className={styles.resultTitle}>{name}</h3>
          <h5 className={styles.resultDescription}>{info}</h5>
          <h5 className={styles.resultCapacity}>適合人數: 最多可容納{max_per}人</h5>
          <h5 className={styles.resultPrice}>
            價格: <span className={styles.priceHighlight}>{price}</span>
          </h5>
          <h5 className={styles.resultFacilities}>床型: {bed_opt}</h5>
        </div>
        <div className={styles.resultActions}>
          <Button label="前往預約" onClick={() => alert('Button clicked!')} />
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

const SearchResults = ({ campsiteId }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/BookData?campsite_id=${campsiteId}`) // 根據傳遞的 campsiteId 改變請求
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [campsiteId]) // 當 campsiteId 改變時重新請求

  return (
    <>
      <section className={styles.searchResults}>
        <h5 className={styles.resultsCount}>
          符合條件的房型 (共 {data.length} 筆)
        </h5>
        {data.map((result, index) => (
          <SearchResult key={index} {...result} />
        ))}
      </section>
    </>
  )
}

export default SearchResults
