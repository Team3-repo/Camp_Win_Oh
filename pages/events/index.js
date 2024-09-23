import React from 'react'
import Footer from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'
import Card from '@/components/book/card'
import FeatureSection1 from '@/components/event/featureSection1'
import CarouselBanner from '@/components/book/CarouselBanner'

import CarouselCards from '@/components/book/carouselCard'

export default function EIndex() {
  const images = [
    'https://i.postimg.cc/9f7MBgC9/camp-2650359-1280-0.jpg',
    'https://i.postimg.cc/Gmgdjy70/camping-6882479-1280-0.jpg',
    'https://i.postimg.cc/xdkYp1hX/istockphoto-1148431349-1024x1024-0.jpg',
  ]

  const titles = [
    '一緒にキャンプにいきましょう!',
    '大自然でリラックスしましょう',
    '忘れられない思い出を作りましょう',
  ]
  return (
    <>
      <Navbar/>
      <div>
        <CarouselBanner images={images} titles={titles} interval={5000} />
        {/* 可以傳入不同的圖片和標題 */}
      </div>
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
          <CarouselCards />
          <div
            className="card"
            style={{ backgroundImage: 'url("camp3.jpg")' }}
          ></div>
        </div>
      </section>

      <FeatureSection1 />

      <section className="ehilight-topics1">
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
