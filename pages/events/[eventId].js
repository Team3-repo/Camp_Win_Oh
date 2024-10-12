import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'

export default function EventDetail() {
  const [eventDetail, setEventDetail] = useState(null)
  const [participants, setParticipants] = useState([])
  const [isJoined, setIsJoined] = useState(false)
  const [isEventFull, setIsEventFull] = useState(false)
  const [userId, setUserId] = useState(null)
  const router = useRouter()
  const { eventId } = router.query

  // 檢查 localStorage 中有沒有 user_id
  const checkLoginStatus = () => {
    const user = localStorage.getItem('user')
    if (user) {
      const parsedUser = JSON.parse(user)
      setUserId(parsedUser.user_id || null)
    }
  }

  // 定時檢查登入狀態Q_Q
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkLoginStatus()
    }, 1000) // 每秒檢查一次Q_Q

    return () => clearInterval(intervalId)
  }, [])

  // 活動詳情
  useEffect(() => {
    const fetchEventDetail = async () => {
      if (!eventId) return
      try {
        const response = await fetch(
          `http://localhost:3005/events/api/events/eventDetail/${eventId}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setEventDetail(data)
        setParticipants(data.participants)

        // 是否額滿
        if (data.participants.length >= data.event_people) {
          setIsEventFull(true)
        }

        // 是否已加入
        if (userId) {
          const hasJoined = data.participants.some(
            (participant) => participant.user_id === userId
          )
          setIsJoined(hasJoined)
        }
      } catch (error) {
        console.error('Error fetching event details:', error)
      }
    }

    fetchEventDetail()
  }, [eventId, userId])

  // 點參加活動時檢查登入
  const joinEvent = async () => {
    if (!userId) {
      alert('請先登入後再參加活動お')
      return
    }

    try {
      const response = await fetch(
        'http://localhost:3005/events/api/joinEvent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ eventId, userId }),
        }
      )

      const data = await response.json()

      if (response.ok && data.success) {
        setIsJoined(true)
        setParticipants([...participants, { user_id: userId }])
        alert('成功加入活動！（導向管理活動的畫面）')
      } else {
        console.error('Failed to join event:', data.message)
        alert(data.message || '加入活動失敗')
      }
    } catch (error) {
      console.error('Error joining event:', error)
      alert('伺服器錯誤，無法加入活動よ')
    }
  }

  // 退出活動
  const leaveEvent = async () => {
    try {
      const response = await fetch(
        'http://localhost:3005/events/api/leaveEvent',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ eventId, userId }),
        }
      )
      const data = await response.json()
      if (data.success) {
        setIsJoined(false)
        setParticipants(
          participants.filter((participant) => participant.user_id !== userId)
        )
        alert('已退出活動')
      }
    } catch (error) {
      console.error('Error leaving event:', error)
    }
  }

  if (!eventDetail) {
    return <h3 style={{ color: '#ff82d2' }}>活動資料載入中</h3>
  }

  return (
    <>
      <Navbar />
      <section className="ecsectionall2">
        <div className="ecsection-form">
          <div className="ecsection">
            <div className="ecsection-title">
              <h2>{eventDetail.event_title}</h2>
            </div>
            <div className="event-content">
              <img
                src={
                  eventDetail.event_pic || 'https://via.placeholder.com/800x400'
                }
                alt="Event image"
                className="event-image"
              />
            </div>
            <div className="ectitle">
              <h3 className="ech3">活動簡介</h3>
            </div>
            <div className="ecform-group">
              <p>{eventDetail.event_description}</p>
            </div>
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>
            <div className="event-info">
              <dl className="einfo-list">
                <dt className="einfo-label">主辦人</dt>
                <dd className="einfo-value">{eventDetail.organizer_nick}</dd>
                <dt className="einfo-label">報名截止</dt>
                <dd className="einfo-value">
                  {new Date(eventDetail.deadline).toLocaleDateString()}
                </dd>
                <dt className="einfo-label">活動日期</dt>
                <dd className="einfo-value">
                  {new Date(eventDetail.start_date).toLocaleDateString()} -{' '}
                  {new Date(eventDetail.end_date).toLocaleDateString()}
                </dd>
                <dt className="einfo-label">營地</dt>
                <dd className="einfo-value">{eventDetail.camp_name}</dd>
                <dt className="einfo-label">營地地址</dt>
                <dd className="einfo-value">{eventDetail.camp_address}</dd>
                <dt className="einfo-label">人數限制</dt>
                <dd className="einfo-value">{eventDetail.event_people} 人</dd>
                <dt className="einfo-label">住宿費用</dt>
                <dd className="einfo-value">{eventDetail.order_amount} 元</dd>
                <dt className="einfo-label">總費用</dt>
                <dd className="einfo-value">{eventDetail.total_cost} 元</dd>
                <dt className="einfo-label">每人費用</dt>
                <dd className="einfo-value">
                  {eventDetail.cost_per_person} 元
                </dd>
                <dt className="einfo-label">備註</dt>
                <dd className="einfo-value">{eventDetail.event_notes}</dd>
              </dl>
            </div>
          </div>

          {/* 參加活動按鈕 */}
          <div className="joinbtn">
            {isEventFull ? (
              <Button label="活動已額滿" disabled={true} />
            ) : isJoined ? (
              <Button label="退出活動" onClick={leaveEvent} />
            ) : (
              <Button label="參加活動" onClick={joinEvent} />
            )}
          </div>
        </div>

        {/* 參與成員 */}
        <div className="memfea">
          <div className="eventMember">
            <div className="ectitle">
              <h3 className="ech3">
                參與人數（{participants.length}/{eventDetail.event_people} 人）
              </h3>
            </div>
            <div className="eparticipant-list">
              {participants.map((participant) => (
                <div key={participant.user_id} className="eparticipant-item">
                  <img
                    src={
                      participant.avatar || 'https://via.placeholder.com/150'
                    }
                    alt={`User ${participant.user_id} avatar`}
                    className="eparticipant-avatar"
                  />
                  <p>會員編號｜{participant.user_id}</p>
                  {participant.is_organizer ? (
                    <span className="organizer-tag">主辦人</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  )
}
