import React from 'react'

export default function ProgressBar() {
  return (
    <div className="progress-container">
      <div className="step">
        <div className="circle">1</div>
        <p>選擇方案</p>
      </div>

      <div className="line"></div>

      <div className="step">
        <div className="circle">2</div>
        <p>填寫資料</p>
      </div>

      <div className="line"></div>

      <div className="step">
        <div className="circle">3</div>
        <p>完成付款</p>
      </div>
    </div>
  )
}
