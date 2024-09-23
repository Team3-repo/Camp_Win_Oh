import React, { useState, useEffect } from 'react';
import styles from '../../styles/component_style/Carousel.module.css';

export default function CarouselBanner({ images, titles, interval = 1500 }) {
  const totalSlides = images.length; // 根據圖片數量決定總頁數
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動輪播
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval); // 使用傳入的輪播間隔
    return () => clearInterval(slideInterval); // 清理定時器
  }, [interval, totalSlides]);

  // 手動切換功能
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.carouselBanner}>
      <img
        src={images[currentIndex]} // 根據 props 傳入的圖片數組動態設置圖片
        alt={`Slide ${currentIndex}`}
        className={styles.carouselImage}
      />
      <div className={styles.carouselContent}>
        <h2 className={styles.carouselTitle}>{titles[currentIndex]}</h2> {/* 根據 props 傳入的標題數組動態設置標題 */}
        <div className={styles.pageDots}>
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`${styles.pageDot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)} // 點擊切換到指定圖片
            />
          ))}
        </div>
      </div>
    </section>
  );
}
