import React from 'react';
import Button from './button';
import { IoMdHeartEmpty } from 'react-icons/io';
import styles from '../../styles/Card.module.css'; // 导入 CSS 模块

export default function Card({
  title,
  content,
  content2,
  content3,
  imageUrl,
  Estate,
  alt,
  ESCol = 'e-s-col1', // 设置默认值为 'e-s-col1'
  label,
  price,
  showIcon = false,
  icon = <IoMdHeartEmpty />,
  cardLike,
  cardLikeIcon,
  PCol,
  className = '' // 默认值为空字符串
}) {
  // 始终应用 e-s-col1 样式，再根据 ESCol 添加其他样式
  const ESColClass = `${styles['e-s-col1']} ${styles[ESCol] || ''}`;

  return (
    <div className={styles.card}>
      {showIcon && (
        <div className={styles[cardLike]}>
          <div className={styles[cardLikeIcon]}>{icon}</div>
        </div>
      )}
      <div className={`${ESColClass} ${className}`}>
        <h5 className={styles.ctState}>{Estate}</h5>
      </div>
      <div className={styles[PCol]}>
        <h4 className={styles.ctPrice}>{price}</h4>
      </div>
      <img src={imageUrl} className={styles.cardImage} alt={alt} />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardContent}>{content}</p>
        <p className={styles.cardContent}>{content2}</p>
        <p className={styles.cardContent}>{content3}</p>

        <Button
          label={label}
          onClick={() => alert('Button clicked!')}
        />
      </div>
    </div>
  );
}
