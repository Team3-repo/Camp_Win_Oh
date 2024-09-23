import React, { useState, useEffect } from 'react'
import styles from '../../styles/component_style/SuggestCard.module.css'
import PaginationDots from '../book/pagi'

const images = [
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地1',
    text: '森林星宿營地',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地2',
    text: '松木童話社區',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地3',
    text: '藍湖野趣營',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地4',
    text: '另一個營地',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地5',
    text: '探索營地',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地6',
    text: '度假營地',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地7',
    text: '遠足營地',
  },
  {
    src: 'https://i.postimg.cc/66h28PMb/th-9.jpg',
    alt: '營地8',
    text: '森林探險',
  },
]

export default function SuggestCard() {
  const slidesToShow = 3
  const totalSlides = Math.ceil(images.length / slidesToShow)
  const [currentIndex, setCurrentIndex] = useState(0)

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
      <h4 className={styles.campCardH4}>熱門推薦營區</h4>
      <div className={styles.btnCard}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselWrapper}>
            {getVisibleSlides().map((image, index) => (
              <div key={index} className={styles.carolCard}>
                <img src={image.src} alt={image.alt} />
                <div className={styles.overlay}>{image.text}</div>
              </div>
            ))}
          </div>
          <PaginationDots onPrev={goToPrev} onNext={goToNext} />
        </div>
      </div>
    </>
  )
}
