import React, { useState, useEffect } from 'react'
import styles from '@/styles/BookStyle.module.css'
import { useRouter } from 'next/router'

const CampInfo = () => {
  const [campData, setCampData] = useState(null) 
  const [loading, setLoading] = useState(true) // 使用 loading 狀態來追蹤資料是否加載中
  const router = useRouter() // 使用 useRouter 來獲取當前路由資訊

  useEffect(() => {
    const { campsite } = router.query // 從路由中獲取 campsite 查詢參數
    if (router.isReady && campsite) {
      // 當 router 準備就緒並且獲取到 campsite 參數時，進行 API 請求
      setLoading(true) // 設置 loading 為 true，表示開始加載資料
      fetch(`http://localhost:3001/api/CampsiteData?campsite_id=${campsite}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            const filteredData = data.find((camp) => camp.id.toString() === campsite)
            setCampData(filteredData || null) // 設置符合 id 的資料，若無則為 null
          } else {
            setCampData(null) // 如果沒有獲取到資料，設為 null
          }
          setLoading(false) // 資料加載完成後設置 loading 為 false
        })
        .catch((error) => {
          console.log('獲取資料錯誤:', error)
          setCampData(null)
          setLoading(false)
        })
    }
  }, [router.isReady, router.query]) // 當 router 準備就緒及 query 變更時重新執行 useEffect

  // 當資料加載中時顯示載入中的提示
  if (loading) return <p>資料載入中...</p>

  // 當資料為 null 或找不到對應的資料時顯示提示
  if (!campData) return <p>找不到對應的營地資料。</p>

  // 渲染符合條件的單一營地資料
  return (
    <section className={styles.campInfo}>
      <div className={styles.campTitle}>
        {/* 營地名稱 */}
        <h1 className={styles.campName}>{campData.name}</h1>
      </div>
      <h4 className={styles.campDetails}>開放時間：{campData.open_time || '未提供開放時間'}</h4>
      <div className={styles.campAddress}>
        <h4 className={styles.addressText}>地址: {campData.address || '詳細地址待更新中'}</h4>
        <div className={styles.mapLink}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.googleMapLink}>
            在Google地圖上
          </a>
          {/* 圖標改為使用其他 Icon */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb243c725ec86f422698f5b837e7194bb25a2952c40aa0cb0346bcbdd68a54a?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
            className={styles.mapIcon}
            alt="Map icon"
          />
        </div>
      </div>
      <h3 className={styles.campDescription}>{campData.title || '無標題'}</h3>
      <h5 className={styles.campDetails}>{campData.info || '無詳細資料'}</h5>
    </section>
  )
}

export default CampInfo
