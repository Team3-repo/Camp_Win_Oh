import React from 'react'
import styles from '../../styles/ProgressBar.module.css'

export default function ProgressBar() {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.step}>
        <div className={styles.circle}>1</div>
        <p>選擇方案</p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.step}>
        <div className={styles.circle}>2</div>
        <p>填寫資料</p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.step}>
        <div className={styles.circle}>3</div>
        <p>完成付款</p>
      </div>
    </div>
  )
}
