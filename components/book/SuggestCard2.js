import React, { useState, useEffect } from 'react'
import styles from '../../styles/component_style/SuggestCard.module.css'
import PaginationDots from './pagi'

export default function SuggestCard2() {
  const slidesToShow = 3
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const baseURL = typeof window !== 'undefined' ? window.location.origin : ''

  // 從後端 API 取得營地資料
  useEffect(() => {
    const fetchCampsiteData = async () => {
      try {
        const response = await fetch('http://localhost:3005/book/api/CampsiteData')
        if (response.ok) {
          const data = await response.json()
          const formattedData = data.slice(5, 11).map((item) => ({
            src: item.img,
            alt: item.id,
            text: item.name,
          }))
          setImages(formattedData)
        } else {
          console.error('資料獲取失敗:', response.status)
        }
      } catch (error) {
        console.error('資料獲取錯誤:', error)
      }
    }

    fetchCampsiteData()
  }, [])

  const totalSlides = Math.ceil(images.length / slidesToShow)

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const getVisibleSlides = () => {
    const start = currentIndex * slidesToShow
    return images.slice(start, start + slidesToShow)
  }

  return (
    <>
      <h4 className={styles.campCardH4} id="section5">熱門推薦營區</h4>
      <div className={styles.btnCard}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselWrapper}>
            {getVisibleSlides().map((image, index) => (
              <div key={index} className={styles.carolCard}>
                <img src={image.src} alt={image.alt} />
                <div
                  className={styles.overlay}
                  onClick={() => {
                    window.location.href = `${baseURL}/book?campsite=${image.alt}`
                  }}
                >
                  {image.text}
                </div>
              </div>
            ))}
          </div>
          <PaginationDots onPrev={goToPrev} onNext={goToNext} />
        </div>
      </div>
    </>
  )
}
