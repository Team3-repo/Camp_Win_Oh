import React from 'react';
import styles from '../../styles/Button.module.css'; // 導入 CSS 模組

export default function Button({ label, onClick, className, type = 'btn' }) {
  // 始終應用 styles.btn，再根據 type 添加其他樣式
  const btnClass = `${styles.btn} ${styles[type] || ''}`;

  return (
    <button
      className={`${btnClass} ${className || ''}`} // 結合樣式模組與傳入的 className
      onClick={onClick}
    >
      {label}
    </button>
  );
}
