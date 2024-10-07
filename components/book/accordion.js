import React, { useState } from 'react'
import styles from '../../styles/component_style/Accordion.module.css'
import { IoIosArrowDown } from 'react-icons/io'

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeSubIndex, setActiveSubIndex] = useState(null)

  // 切換大標題
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
    setActiveSubIndex(null) // 當切換大標題時重置次級內容
  }

  // 切換次級內容
  const toggleSubAccordion = (subIndex) => {
    setActiveSubIndex(activeSubIndex === subIndex ? null : subIndex)
  }

  if (!data || data.length === 0) {
    return <div>沒有可顯示的內容</div>
  }

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div key={item.id} className={styles.accordionItem}>
          {/* 大標題按鈕 */}
          <button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <IoIosArrowDown
              className={`${styles.accordionIcon} ${
                activeIndex === index ? styles.rotate : ''
              }`}
              // 通過條件渲染的方式 (activeIndex === index ? styles.rotate : '')，當點擊展開時添加旋轉效果。
            />
          </button>

          {/* 展開大標題內容 */}
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              {item.content.map((subItem, subIndex) => (
                <div key={subItem.number} className={styles.subAccordionItem}>
                  {/* 次級標題按鈕 */}
                  <button
                    className={styles.subAccordionButton}
                    onClick={() => toggleSubAccordion(subIndex)}
                  >
                    <span>
                      {subItem.number}. {subItem.title}
                    </span>
                    <IoIosArrowDown
                      className={`${styles.subAccordionIcon} ${
                        activeSubIndex === subIndex ? styles.rotate : ''
                      }`}
                    />
                  </button>

                  {/* 展開次級內容 */}
                  {activeSubIndex === subIndex && (
                    <div className={styles.subAccordionContent}>
                      {subItem.subContent.map((detail, detailIndex) => (
                        <p key={detailIndex}>◆ {detail.description}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
