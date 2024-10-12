import React, { useEffect, useContext, useState } from 'react'
import Button from '@/components/book/button'
import { EventContext } from '@/context/event/EventContext'
import { useRouter } from 'next/router'

export default function EventPreForm() {
  const { eventData, setEventData } = useContext(EventContext)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleBack = () => {
    window.history.back() 
  }

  // 確保 eventData 有 user_id
  const ensureUserIdInEventData = () => {
    const storedUserData = localStorage.getItem('user')
    if (storedUserData) {
      const user = JSON.parse(storedUserData)
      if (!eventData.user_id) {
        setEventData((prev) => ({
          ...prev,
          user_id: user.user_id || '',
        }))
      }
    }
  }

  const uploadImage = async (base64Image) => {
    try {
      // 建立 formData，並將圖片轉換為 blob 上傳
      const blob = await fetch(base64Image).then((res) => res.blob())
      const formData = new FormData()
      formData.append('image', blob)

      // 發送 POST 請求到圖片上傳 API
      const response = await fetch(
        'http://localhost:3005/events/api/upload_image',
        {
          method: 'POST',
          body: formData,
        }
      )

      if (response.ok) {
        const data = await response.json()
        return data.imageUrl // 回傳上傳成功的圖片 URL
      } else {
        console.error('圖片上傳失敗')
        alert('圖片上傳失敗，請再試一次！')
        return null
      }
    } catch (error) {
      console.error('圖片上傳錯誤:', error)
      return null
    }
  }

  const handleSaveEvent = async () => {
    setIsLoading(true)

    // 確保所有必要資料欄位都已經存在
    const requiredFields = [
      'user_id',
      'organizerNick',
      'imageUrl',
      'eventDescription',
      'eventTitle',
      'eStartDate',
      'eEndDate',
      'camp_id',
      'campAdd',
      'orderQuantity',
      'eventPeople',
      'orderAmount',
      'eOtherFees',
      'costPerPerson',
      'eventNotes',
    ]

    // 確認所有必要欄位都有值
    const missingFields = requiredFields.filter(
      (field) =>
        (eventData[field] === undefined || eventData[field] === '') &&
        field !== 'eOtherFees'
    )

    if (missingFields.length > 0) {
      alert(`以下欄位缺少資料：${missingFields.join(', ')}`)
      setIsLoading(false)
      return
    }

    // 確認eOtherFees為0
    if (eventData.eOtherFees === undefined || eventData.eOtherFees === null) {
      handleChange('eOtherFees', 0) // 如eOtherFees為undefined或"">設為 0
    }

    // 如果圖片URL是Base64，則先進行圖片上傳
    let imageUrl = eventData.imageUrl
    if (imageUrl && imageUrl.startsWith('data:image/')) {
      imageUrl = await uploadImage(imageUrl)
      if (!imageUrl) {
        setIsLoading(false)
        return // 如果圖片上傳失敗>終止
      }
    }

    try {
      // 提取 selectedBookType 的 id，而不是整個物件
      const selectedBookTypeId = eventData.selectedBookType?.id || null

      const eventDataToSend = {
        ...eventData,
        event_pic: imageUrl, // 使用上傳後的圖片URL>event_pic
        selectedBookType: selectedBookTypeId, // 傳遞 selectedBookType的id，而不是整個物件
      }

      const response = await fetch(
        'http://localhost:3005/events/api/save_event',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventDataToSend),
        }
      )

      if (response.ok) {
        const savedEvent = await response.json()
        localStorage.setItem('createdEventData', JSON.stringify(savedEvent))
        localStorage.removeItem('eventPreviewData') // 活動建立成功刪除暫存
        router.push('/events/eventCSuccess') // 然後跳到活動建立成功頁面
      } else {
        console.error('活動儲存失敗')
        alert('活動儲存失敗，請再試一次！')
      }
    } catch (error) {
      console.error('Error saving event:', error)
      alert('伺服器錯誤，請稍後再試！')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const storedEventData = localStorage.getItem('eventPreviewData')
    if (storedEventData) {
      setEventData(JSON.parse(storedEventData))
    }
  }, [setEventData])

  if (!eventData) {
    return <h2 style={{ color: '#ff82d2' }}>資料載入中，請稍後</h2>
  }

  return (
    <section className="ecsectionall2">
      <div className="ecsection-form">
        {/* 活動圖片 */}
        <div className="ecsection">
          <div className="ecsection-title">
            <h2>活動預覽</h2>
          </div>
          <div className="event-content">
            <img
              src={eventData.imageUrl || 'https://via.placeholder.com/400x200'}
              alt="Event image"
              className="event-image"
            />
          </div>
          {/* 活動簡介 */}
          <div className="ectitle">
            <h3 className="ech3">活動簡介</h3>
          </div>
          <div className="ecform-group">
            <p>{eventData.eventDescription}</p>
          </div>

          {/* 活動資訊 */}
          <div className="ectitle">
            <h3 className="ech3">活動資訊</h3>
          </div>
          <div className="event-info">
            <dl className="einfo-list">
              <dt className="einfo-label">活動名稱</dt>
              <dd className="einfo-value">{eventData.eventTitle}</dd>

              <dt className="einfo-label">主辦人</dt>
              <dd className="einfo-value">{eventData.organizerNick}</dd>

              <dt className="einfo-label">開始日期</dt>
              <dd className="einfo-value">{eventData.eStartDate}</dd>

              <dt className="einfo-label">結束日期</dt>
              <dd className="einfo-value">{eventData.eEndDate}</dd>

              <dt className="einfo-label">營地名稱</dt>
              <dd className="einfo-value">
                {eventData.campName || '尚未選擇營地'}
              </dd>

              <dt className="einfo-label">營地地址</dt>
              <dd className="einfo-value">{eventData.campAdd}</dd>

              <dt className="einfo-label">住宿選擇</dt>
              <dd className="einfo-value">
                {eventData.selectedBookType?.name || '尚未選擇住宿'}
              </dd>

              <dt className="einfo-label">活動人數</dt>
              <dd className="einfo-value">{eventData.eventPeople} 人</dd>

              <dt className="einfo-label">負擔費用（每人）</dt>
              <dd className="einfo-value">
                {parseInt(eventData.costPerPerson)} 元
              </dd>

              <dt className="einfo-label">訂購數量</dt>
              <dd className="einfo-value">{eventData.orderQuantity} 間</dd>

              <dt className="einfo-label">總費用</dt>
              <dd className="einfo-value">
                {eventData.orderAmount + eventData.eOtherFees} 元
              </dd>

              <dt className="einfo-label">備註</dt>
              <dd className="einfo-value">{eventData.eventNotes}</dd>
            </dl>
          </div>
        </div>
        <div className="joinbtn1">
          {/* 返回上一頁與確認送出按鈕 */}
          <Button label="回上一頁" onClick={handleBack} />
          <Button
            label={isLoading ? '儲存中...' : '確認送出'}
            onClick={handleSaveEvent}
            disabled={isLoading}
          />
        </div>
      </div>
    </section>
  )
}
