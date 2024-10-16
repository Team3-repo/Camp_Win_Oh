import React, { useState, useEffect } from 'react'
import { GiCampingTent } from 'react-icons/gi'
import { IoMdHappy } from 'react-icons/io'

const OrdersTableWithThemes = () => {
  const [bookOrderData, setBookOrderData] = useState(null) // 用來存訂單資料
  const [eventOrderData, setEventOrderData] = useState(null) // 用來存活動資料
  const [loading, setLoading] = useState(true) // 使用 loading 狀態來追蹤資料是否加載中
  const [error, setError] = useState(null) // 用來追蹤是否有錯誤發生
  const [user_id, setUserId] = useState(null) // 存儲使用者的 user_id

  const [selectedTheme, setSelectedTheme] = useState('booking') // 預設主題為 'booking'（訂單）

  // 從 localStorage 中的 'user' 抓取 user_id
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        if (parsedUser && parsedUser.user_id) {
          setUserId(parsedUser.user_id) // 設置 user_id
        } else {
          setError('無法取得使用者 ID，請重新登入')
        }
      } catch (err) {
        setError('解析使用者資料時發生錯誤，請重新登入') // 捕獲解析錯誤
      }
    } else {
      setError('使用者資料不存在，請重新登入')
    }
  }, [])

  // 抓取訂單資料的處理函數
  const handleFetchBookingData = async () => {
    if (!user_id) return // 如果沒有 user_id，不執行 fetch

    setLoading(true) // 設置為加載中
    try {
      const response = await fetch(
        `http://localhost:3005/userData/api/user-book/${user_id}`
      )
      if (!response.ok) {
        throw new Error('無歷史紀錄。')
      }
      const data = await response.json()
      setBookOrderData(data) // 更新訂單資料
    } catch (err) {
      setError(err.message) // 設置錯誤訊息
    } finally {
      setLoading(false) // 無論成功或失敗，都設置 loading 狀態為 false
    }
  }

  // 抓取活動資料的處理函數
  const handleFetchEventData = async () => {
    if (!user_id) return // 如果沒有 user_id，不執行 fetch

    setLoading(true) // 設置為加載中
    try {
      const response = await fetch(
        `http://localhost:3005/userData/api/user-events/${user_id}`
      )
      if (!response.ok) {
        throw new Error('無活動資料。')
      }
      const data = await response.json()
      setEventOrderData(data) // 更新活動資料
    } catch (err) {
      setError(err.message) // 設置錯誤訊息
    } finally {
      setLoading(false) // 無論成功或失敗，都設置 loading 狀態為 false
    }
  }

  // 切換主題並觸發對應的資料抓取
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme)
    if (theme === 'booking') {
      handleFetchBookingData() // 抓取訂單資料
    } else if (theme === 'events') {
      handleFetchEventData() // 抓取活動資料
    }
  }

  // 初次進入頁面時預設抓取訂單資料
  useEffect(() => {
    if (user_id) {
      handleFetchBookingData() // 預設顯示訂單資料
    }
  }, [user_id])

  // 當資料加載中時顯示載入中的提示
  if (loading) return <p>資料載入中...</p>

  // 如果發生錯誤，顯示錯誤訊息
  if (error) return <p>{error}</p>

  return (
    <>
      <div className="order-page">
        <div className="theme-buttons">
          <h4
            onClick={() => handleThemeChange('booking')}
            style={{ cursor: 'pointer' }}
          >
            <GiCampingTent />
            訂單資訊
          </h4>
          <h4
            onClick={() => handleThemeChange('events')}
            style={{ cursor: 'pointer' }}
          >
            <IoMdHappy />
            活動資訊
          </h4>
        </div>

        {/* 依據 selectedTheme 來顯示對應的資料 */}
        {selectedTheme === 'booking' ? (
          <>
            {bookOrderData && bookOrderData.length > 0 ? (
              <table className="event-table2">
                <thead>
                  <tr className="event-table-container">
                    <th>房型方案ID</th>
                    <th>預訂日期</th>
                    <th>總金額</th>
                    <th>付款狀態</th>
                    <th>訂單成立時間</th>
                  </tr>
                </thead>
                <tbody>
                  {bookOrderData.map((book, index) => (
                    <tr key={index} className="event-table-container">
                      <td>RT0{book.r_type_id}</td>
                      <td>{book.InOutDate}</td>
                      <td>{book.total_price}</td>
                      <td>已付款</td>
                      <td style={{ color: '#e74c3c', textAlign: 'left' }}>
                        {book.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h5>無訂單資料。</h5>
            )}
          </>
        ) : (
          <>
            {eventOrderData && eventOrderData.length > 0 ? (
              <table className="event-table2">
                <thead>
                  <tr className="event-table-container">
                    <th>活動ID</th>
                    <th>活動名稱</th>
                    <th>開始日期</th>
                    <th>結束日期</th>
                    <th>是否為主辦人</th>
                    <th>加入時間</th>
                  </tr>
                </thead>
                <tbody>
                  {eventOrderData.map((event, index) => (
                    <tr key={index} className="event-table-container">
                      <td>{event.event_id}</td>
                      <td>{event.event_title}</td>
                      <td>{event.start_date}</td>
                      <td>{event.end_date}</td>
                      <td>{event.is_organizer ? '主辦人' : ''}</td>
                      <td>{event.join_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h5>無活動資料。</h5>
            )}
          </>
        )}
      </div>
      <style jsx>{`
        .event-table-container {
          font-family: 'Poetsen One', 'Zen Maru Gothic', sans-serif;

          margin: 40px auto;
          padding: 30px;
          max-width: 1000px;
          border-radius: 4px;
        }

        /* 標題樣式 */
        .event-table-container h2 {
          text-align: center;
          color: #4c3a30;
          font-size: 32px;
          margin-bottom: 30px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* 表格樣式 */
        .event-table2 {
          width: 100%;
          border-collapse: collapse;
          border-radius: 12px;
          overflow: hidden;
        }

        /* 表格頭部 */
        .event-table2 th,
        .event-table2 td {
          padding: 10px 8px;
          text-align: left;
          border-bottom: 1px solid #eaeaea;
          font-size: 14px;
        }

        .event-table2 th {
          background-color: #98d293;
          color: #fff;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* 表格行樣式 */
        .event-table2 td {
          background-color: #f9fbfd;
          color: #4c3a30;
          font-size: 12px;
        }

        .event-table2 tr:nth-child(even) {
          background-color: #f4f6f8;
        }

        .event-table2 tr:hover {
          background-color: #ecf5fc;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        /* 特別的樣式：主辦人列 */
        .event-table2 td:last-child {
          text-align: center;
          font-weight: bold;
        }

        /* 主辦人標示 */
        .event-table2 td:nth-child(6) {
          color: #e74c3c;
          font-weight: bold;
        }

        .event-table2 td:nth-child(6):before {
          content: '';
        }

        /* 無資料狀態 */
        .event-table2 td[colspan='4'] {
          text-align: center;
          color: #7f8c8d;
          font-size: 14px;
          padding: 40px;
        }

        /* 載入中與未登入狀態 */
        .loading-message,
        .not-logged-message {
          text-align: center;
          font-size: 14px;
          padding: 20px;
          color: #2c3e50;
          background-color: #ecf5fc;
          border-radius: 8px;
          margin: 30px 0;
        }

        .theme-buttons{
          display:flex;
          gap:20px;
          margin-bottom:10px;
        }

        .theme-buttons h4:hover{
          color: #4282b7;
        }

      `}</style>
    </>
  )
}

export default OrdersTableWithThemes
