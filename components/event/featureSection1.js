import React from 'react'

export default function FeatureSection1() {
  return (
    <section className="feature-section1">
      <h2 className="section-title1"> 
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d91c7cc67ba51a18b583eaa83874fe1b31b4b85404c31d8460dd168c1b84a27?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f"
          className="title-icon"
          alt=""
        />
        選擇會營お的理由
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe2af81b128b8e7eefa63ea8bf1faa82e583797c4962525f7cb142f9c8ff190?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f"
          className="title-icon"
          alt=""
        />
      </h2>
      <div className="feature-list1">
        <div className="feature-item1">
          <h3 className="feature-title1">輕鬆揪團 快速出發</h3>
          <p className="feature-description1">
            輕鬆找到適合你的露營夥伴，馬上出發
          </p>
        </div>

        <div className="feature-item1">
          <h3 className="feature-title1">豐富活動選擇</h3>
          <p className="feature-description1">
          找到適合你的揪團，享受獨特露營時光
          </p>
        </div>

        <div className="feature-item1">
          <h3 className="feature-title1">探索新地點</h3>
          <p className="feature-description1">
          揪團探索隱藏露營地，每次都有新驚喜
          </p>
        </div>
      </div>
    </section>
  )
}
