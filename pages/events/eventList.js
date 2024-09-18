import React from 'react'
import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'
import { FaArrowCircleRight } from 'react-icons/fa'
import FeatureSection2 from '@/components/event/featureSection2'
import Card from '@/components/book/card'
import Pagi from '@/components/event/pagi'

export default function EventList() {
  return (
    <>
      <Navbar />
      <section className="notice-section">
        <FeatureSection2 />
        <div className="eventHoldingBtn">
          <Button
            label={
              <>
                舉辦活動&nbsp;
                <FaArrowCircleRight />
              </>
            }
            onClick={() => alert('Button clicked!')}
          />
        </div>
      </section>
      <section className="ehilight-topics">
        <h3 className="esection-title">活動報名中</h3>
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

        <Pagi />
      </section>

      <Footer2 />
    </>
  )
}
1
