import React from 'react'
import Footer from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'
import Card from '@/components/book/card'
import FeatureSection1 from '@/components/event/featureSection1'

export default function EIndex() {
  return (
    <>
      <Navbar />
      <section className="ehot-topics">
        <h3 className="esection-title">熱門主題</h3>
        <div className="efilter-buttons">
          <Button
            label="全部地區"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="北部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="中部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="南部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="東部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
        </div>
        <div className="">
          <>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://i.postimg.cc/Rh0b3ckd/camping-6882479-1280.jpg")',
              }}
            >
              <div className="card-content">
                <h3>高山健行</h3>
                <p>雲海仙境</p>
                <span>2024-08-31</span>
              </div>
            </div>
            <div
              className="card"
              style={{ backgroundImage: 'url("camp3.jpg")' }}
            >
              <div className="card-content">
                <h3>輕鬆一夏</h3>
                <p>Uchill</p>
                <span>2024-08-31</span>
              </div>
            </div>
            <button className="arrow right">&gt;</button>
          </>
        </div>
      </section>
      <section>
        <FeatureSection1 />
      </section>
      <section className="ehilight-topics">
        <h3 className="esection-title">精選活動</h3>
        <div className="ehilight-cards">
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
        </div>
        <Button
          label="探索更多"
          type="btn-more"
          onClick={() => alert('Button clicked!')}
        />
      </section>
      <Footer />
    </>
  )
}
