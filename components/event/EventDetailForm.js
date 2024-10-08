import React, { useState } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import Button from '@/components/book/button'
import CampingFeatures from '@/components/event/CampingFeatures'

// 預設活動資料
const eventDetails = {
  id: 1,
  title: '夏日狂歡派對',
  description:
    '這是一場充滿歡笑和活力的夏日派對活動，讓我們一起盡情享受夏日的陽光和大自然的美好。',
  imageUrl:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/2c4f42695911ec327af3315bd4e177bdf625338dc60fd9748e07ebb6fc9deab6?placeholderIfAbsent=true&apiKey=917a01bb4dc8469db872546ae2709b5f',
  memberid: '兔兔',
  registrationDeadline: '2024-09-22',
  maxPeople: 6,
  fee: 1200,
  startDate: '2024-09-23',
  endDate: '2024-09-24',
  area: '東部',
  camp: '山Chill',
  campAdd: '台灣花蓮縣秀林鄉太魯閣村200號',
  notes:
    '儲存所有垃圾並帶走，參加者請自備帳篷等裝備，避免攜帶過量行李。',
  participants: [
    {
      id: 1,
      name: '小明',
      avatar:
        'https://i.postimg.cc/3Rs3YT9M/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp',
    },
    {
      id: 2,
      name: '小華',
      avatar:
        'https://i.postimg.cc/3Rs3YT9M/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp',
    },
    {
      id: 3,
      name: '小強',
      avatar:
        'https://i.postimg.cc/3Rs3YT9M/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp',
    },
  ],
}

export default function EventDetailForm() {
  return (
    <>
      <div className="ecsection-title">
        <h2>{eventDetails.title}</h2>
      </div>
      <section className="ecsectionall2">
        <div className="ecsection-form">
          {/* 圖片 */}
          <div className="ecsection">
            <div className="event-content">
              <img
                src={eventDetails.imageUrl}
                alt="Event image"
                className="event-image"
              />
            </div>
            {/* 活動簡介 */}
            <div className="ectitle">
              <h3 className="ech3">活動簡介</h3>
            </div>
            <div className="ecform-group">
              <p>{eventDetails.description}</p>
            </div>

            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>
            <div className="event-info">
              <dl className="einfo-list">
                <dt className="einfo-label">主辦人</dt>
                <dd className="einfo-value">{eventDetails.memberid}</dd>

                <dt className="einfo-label">報名截止</dt>
                <dd className="einfo-value">
                  {eventDetails.registrationDeadline}
                </dd>

                <dt className="einfo-label">活動日期</dt>
                <dd className="einfo-value">
                  {eventDetails.startDate} - {eventDetails.endDate}
                </dd>

                <dt className="einfo-label">區域</dt>
                <dd className="einfo-value">{eventDetails.area}</dd>

                <dt className="einfo-label">營地名稱</dt>
                <dd className="einfo-value">{eventDetails.camp}</dd>

                <dt className="einfo-label">營地地址</dt>
                <dd className="einfo-value">{eventDetails.campAdd}</dd>

                <dt className="einfo-label">人數限制</dt>
                <dd className="einfo-value">{eventDetails.maxPeople} 人</dd>

                <dt className="einfo-label">每人費用</dt>
                <dd className="einfo-value">{eventDetails.fee} 元</dd>

                <dt className="einfo-label">備註</dt>
                <dd className="einfo-value">{eventDetails.notes}</dd>
              </dl>
            </div>
          </div>

          {/* 參與者聲明 */}
          <div className="ecsection">
            <div className="ectitle">
              <h3 className="ech3">活動參與條款</h3>
            </div>
            <div className="ecdeclaragree">
              <p>
                我了解並同意，作為參與活動者，我必須遵守所有活動規範及安全指引，並尊重主辦人及其他參與者的權利。在活動過程中，我需自行評估活動的風險，並對自己的行為負責。任何因我不當行為造成的損害或傷害，均由我自行承擔。本網站對於因參與該活動所引起的任何事故、損失或法律責任不承擔任何連帶責任。
              </p>
            </div>
            <div className="eccheckbox">
              <input type="checkbox" id="ecagree" required />{' '}
              我已閱讀並同意上述聲明
            </div>
          </div>
          <div className="joinbtn">
            {/* 提交按鈕 */}
            <Button label="參加活動" onClick={() => alert('Button clicked!')} />
          </div>
        </div>

        <div className="memfea">
          <div className="eventMember">
            <div className="ectitle">
              <h3 className="ech3">
                參與成員（{eventDetails.participants.length}/
                {eventDetails.maxPeople}人）
              </h3>
            </div>
            <div className="eparticipant-list">
              {eventDetails.participants.map((participant) => (
                <div key={participant.id} className="eparticipant-item">
                  <img
                    src={participant.avatar}
                    alt={`${participant.name}的大頭貼`}
                    className="eparticipant-avatar"
                  />
                </div>
              ))}
            </div>
          </div>
          <CampingFeatures />
        </div>
      </section>
    </>
  )
}
