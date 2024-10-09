import React from 'react'
import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'

export default function eventCSuccess() {
  return (
    <>
      <Navbar />
      <section className="ecssuccess-message">
        <h3>活動建立成功</h3>
      </section>
      <section className="ecsevent-list">
        <div className="ecsevent-card">
          <h2>活動資訊一覽</h2>
          <img
            src="https://i.postimg.cc/dQCvrjvh/camping-7947056-1280.jpg"
            alt="Campfire"
          />
          <div className="ecsevent-details">
            <p>
              <strong>主辦人:</strong> 小八
            </p>
            <p>
              <strong>活動名稱:</strong> 營火晚會派對
            </p>
            <p>
              <strong>人數限制:</strong> 6 人
            </p>
            <p>
              <strong>費用:</strong> 1200
            </p>
            <p>
              <strong>開始日期:</strong> 2024年9月28日
            </p>
            <p>
              <strong>結束日期:</strong> 2024年9月29日
            </p>
          </div>
        </div>
      </section>
      <div className="entmorebtn">
        <Button label="探索更多" onClick={() => alert('Button clicked!')} />
      </div>
      <Footer2 />
    </>
  )
}
