import React from 'react'

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <h2 className="section-title"> 
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d91c7cc67ba51a18b583eaa83874fe1b31b4b85404c31d8460dd168c1b84a27?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f"
          className="title-icon"
          alt=""
        />
        選擇會營ㄛ的理由
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe2af81b128b8e7eefa63ea8bf1faa82e583797c4962525f7cb142f9c8ff190?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f"
          className="title-icon"
          alt=""
        />
      </h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3 className="feature-title">輕鬆揪團 快速出發</h3>
          <p className="feature-description">
            輕鬆找到適合你的露營夥伴，馬上出發吧！
          </p>
        </div>

        <div className="feature-item">
          <h3 className="feature-title">豐富活動選擇</h3>
          <p className="feature-description">
            本站提供多樣化的揪團活動選擇，滿足不同需求，讓每個人都能享受到屬於自己的露營時光
          </p>
        </div>

        <div className="feature-item">
          <h3 className="feature-title">探索新地點</h3>
          <p className="feature-description">
            透過揪團功能，發現那些隱藏的露營寶地，讓你每次都有新的驚喜
          </p>
        </div>
      </div>
    </section>
  )
}
