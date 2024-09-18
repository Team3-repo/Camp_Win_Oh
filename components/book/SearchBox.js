import { useState } from 'react'
import { TbCategoryPlus } from 'react-icons/tb'
import SearchFilter from './SearchFilter'
import styles from '../../styles/HomePage.module.css'
import SearchInput from '../SearchInput'
import Button from './button'

export default function SearchBox() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false) // 控制進階搜尋區塊的顯示狀態

  // 切換按鈕顯示狀態
  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch)
  }

  return (
    <>
      <div className={styles.SearchContainer}>
        {/* 搜尋框 */}
        <SearchInput placeholder="請輸入搜尋關鍵字" />
        {/* 按鈕 */}
        <Button label="搜索" onClick={() => alert('Button clicked!')} />
        {/* 進階篩選按鈕 */}
        <div
          className={styles.AdvancedSearchBtn}
          onClick={toggleAdvancedSearch}
        >
          <TbCategoryPlus style={{ fontSize: '20px' }} />
        </div>
      </div>



      {/* 進階搜尋區塊，根據狀態顯示或隱藏 */}
      {showAdvancedSearch && <SearchFilter />}
    </>
  )
}
