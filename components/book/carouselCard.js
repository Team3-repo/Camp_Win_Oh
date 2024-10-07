import React, { useState } from 'react'
import styles from '../../styles/component_style/CarouselCard.module.css'
import PaginationDots from '../event/pagi'

// 在每個圖像對象中添加 `campsite_id`
const images = [
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地1',
    text: '森林星宿營地',
    campsite_id: 1, // 添加 campsite_id
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地2',
    text: '松木童話社區',
    campsite_id: 2,
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地3',
    text: '藍湖野趣營',
    campsite_id: 3,
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地4',
    text: '另一個營地',
    campsite_id: 4,
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地5',
    text: '探索營地',
    campsite_id: 5,
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地6',
    text: '度假營地',
    campsite_id: 6,
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地7',
    text: '遠足營地',
    campsite_id: 7,
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地8',
    text: '森林探險',
    campsite_id: 8,
  },
]

export default function CarouselCards({ title }) {
  const slidesToShow = 3
  const totalSlides = Math.ceil(images.length / slidesToShow)
  const [currentIndex, setCurrentIndex] = useState(0)

  const baseURL = typeof window !== 'undefined' ? window.location.origin : ''

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

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
      <h5 className={styles.campCardH5}>
        找到<strong style={{ color: '#ff82d2' }}> {images.length} </strong>
        個符合篩選條件的{title}
      </h5>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          {getVisibleSlides().map((image, index) => (
            <div key={index} className={styles.carolCard}>
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => {
                  // 正確構建 URL，使用 `campsite_id` 作為查詢參數的鍵
                  window.location.href = `${baseURL}/book?campsite_id=${image.campsite_id}`
                }}
              />

              <div className={styles.overlay}>{image.text}</div>
            </div>
          ))}
        </div>
        <PaginationDots
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onDotClick={goToSlide}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      </div>
    </>
  )
}
