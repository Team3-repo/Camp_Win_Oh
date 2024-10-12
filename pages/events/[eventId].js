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
  const [isOrganizer, setIsOrganizer] = useState(false) // 判斷使用者是否為主辦人
  const [userId, setUserId] = useState(null)
  const [comments, setComments] = useState([]) // 留言板
  const [newComment, setNewComment] = useState('') // 新留言內容
  const router = useRouter()
  const { eventId } = router.query

  const checkLoginStatus = () => {
    const user = localStorage.getItem('user')
    if (user) {
      const parsedUser = JSON.parse(user)
      setUserId(parsedUser.user_id || null)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkLoginStatus()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const fetchEventDetail = async () => {
      if (!eventId) return
      try {
        const response = await fetch(
          `http://localhost:3005/events/api/events/eventDetail/${eventId}`
        )
        const data = await response.json()
        setEventDetail(data)
        setParticipants(data.participants)

        if (userId) {
          const userParticipation = data.participants.find(
            (participant) => participant.user_id === userId
          )
          setIsJoined(!!userParticipation)
        }

        // Fetch留言
        const commentResponse = await fetch(
          `http://localhost:3005/events/api/comments/${eventId}`
        )
        const commentData = await commentResponse.json()
        setComments(commentData)
      } catch (error) {
        console.error('Error fetching event details or comments:', error)
      }
    }

    fetchEventDetail()
  }, [eventId, userId])

  const postComment = async () => {
    if (!isJoined) {
      alert('只有參與者可以留言')
      return
    }

    if (!newComment) {
      alert('請輸入留言內容')
      return
    }

    try {
      const response = await fetch(
        `http://localhost:3005/events/api/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ eventId, userId, comment: newComment }),
        }
      )

      if (response.ok) {
        const commentData = await response.json()
        setComments([...comments, commentData])
        setNewComment('') // 清空輸入欄位
      } else {
        alert('留言失敗')
      }
    } catch (error) {
      console.error('Error posting comment:', error)
      alert('伺服器錯誤，無法留言')
    }
  }

  const joinEvent = async () => {
    if (!userId) {
      alert('請先登入後再參加活動')
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
        alert('成功加入活動')
      } else {
        console.error('Failed to join event:', data.message)
        alert(data.message || '加入活動失敗')
      }
    } catch (error) {
      console.error('Error joining event:', error)
      alert('伺服器錯誤，無法加入活動')
    }
  }

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

  const deleteEvent = async () => {
    if (confirm('確定要刪除此活動嗎？這會影響所有參與者。')) {
      try {
        const response = await fetch(
          `http://localhost:3005/events/api/deleteEvent/${eventId}`,
          {
            method: 'DELETE',
          }
        )
        if (response.ok) {
          alert('活動已刪除')
          router.push('/events') // 跳轉至活動列表頁
        } else {
          alert('刪除活動失敗')
        }
      } catch (error) {
        console.error('Error deleting event:', error)
        alert('伺服器錯誤，無法刪除活動')
      }
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
                <dt className="einfo-label">報名截止</dt>
                <dd className="einfo-value">
                  {new Date(eventDetail.deadline).toLocaleDateString()}
                </dd>
                <dt className="einfo-label">備註</dt>
                <dd className="einfo-value">{eventDetail.event_notes}</dd>
              </dl>
            </div>
          </div>

          {/* 參加活動按鈕 */}
          <div className="joinbtn">
            {isOrganizer ? (
              <Button label="刪除活動" onClick={deleteEvent} />
            ) : isEventFull ? (
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
                目前人數（{participants.length}/{eventDetail.event_people} 人）
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
            {/* 留言板區域 */}
            <div className="comment-section">
              <h3>留言板</h3>
              <div className="comment-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <p>
                      <strong style={{ color: '#FF5833' }}>
                        會員編號 {comment.user_id}  說：
                      </strong>
                      {comment.comment}

                      <br />
                      <small>
                        留言時間：
                        {new Date(comment.created_at).toLocaleString()}
                      </small>
                    </p>
                  </div>
                ))}
              </div>

              {/* 留言 */}
              {isJoined && (
                <div className="comment-input">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="輸入留言...請勿送出敏感資訊"
                  ></textarea>
                  <Button label="發表留言" onClick={postComment} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  )
}
