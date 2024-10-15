import React, { useState, useEffect } from 'react'
import { GiCampingTent } from 'react-icons/gi'
import { IoMdHappy } from 'react-icons/io'

const OrdersTableWithThemes = () => {
  const [bookOrderData, setBookOrderData] = useState(null) // 用來存訂單資料
  const [eventOrderData, setEventOrderData] = useState(null) // 用來存活動資料
  const [loading, setLoading] = useState(true) // 使用 loading 狀態來追蹤資料是否加載中
  const [error, setError] = useState(null) // 用來追蹤是否有錯誤發生
  const [user_id, setUserId] = useState(null) // 存儲使用者的 user_id

  const [selectedTheme, setSelectedTheme] = useState('訂單') // 預設主題

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

  // 抓取後端 b_order_items 資料表
  useEffect(() => {
    if (!user_id) return // 如果沒有 user_id，不執行 fetch

    const fetchOrderData = async () => {
      setLoading(true) // 設置為加載中
      try {
        const response = await fetch(
          `http://localhost:3005/userData/api/user-book/${user_id}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch order data')
        }
        const data = await response.json()
        setBookOrderData(data) // 更新訂單資料
      } catch (err) {
        setError(err.message) // 設置錯誤訊息
      } finally {
        setLoading(false) // 無論成功或失敗，都設置 loading 狀態為 false
      }
    }

    fetchOrderData()
  }, [user_id])

  // 抓取後端 event 資料表
  useEffect(() => {
    if (!user_id) return // 如果沒有 user_id，不執行 fetch

    const fetchEOrderData = async () => {
      setLoading(true) // 設置為加載中
      try {
        const response = await fetch(
          `http://localhost:3005/userData/api/user-events/${user_id}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch event data')
        }
        const data = await response.json()
        setEventOrderData(data) // 更新活動資料
      } catch (err) {
        setError(err.message) // 設置錯誤訊息
      } finally {
        setLoading(false) // 無論成功或失敗，都設置 loading 狀態為 false
      }
    }

    fetchEOrderData()
  }, [user_id])

  // 當資料加載中時顯示載入中的提示
  if (loading) return <p>資料載入中...</p>

  // 如果發生錯誤，顯示錯誤訊息
  if (error) return <p>發生錯誤: {error}</p>

  // 當資料為空或沒有訂單資料時，顯示提示
  if (!bookOrderData || bookOrderData.length === 0) return <h5>無訂單資料。</h5>

  // 當資料為空或沒有活動資料時，顯示提示
  if (!eventOrderData || eventOrderData.length === 0)
    return <h5>無活動資料。</h5>

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme)
  }

  return (
    <div className="order-page">
      <div className="theme-buttons">
        <button
          onClick={() => handleThemeChange('訂單')}
          className="btn btn-secondary"
        >
          <h3><GiCampingTent /></h3>
        </button>
        <button
          onClick={() => handleThemeChange('活動')}
          className="btn btn-primary"
        >
          <IoMdHappy />
        </button>
      </div>
      

      <h3>{selectedTheme}資訊</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            {selectedTheme === '訂單' ? (
              <tr>
                <th>房型ID</th>
                <th>預訂日期</th>
                <th>總金額</th>
                <th>創建時間</th>
              </tr>
            ) : (
              <tr>
                <th>活動ID</th>
                <th>活動名稱</th>
                <th>開始日期</th>
                <th>結束日期</th>
                <th>是否為主辦人</th>
                <th>加入時間</th>
              </tr>
            )}
          </thead>
          <tbody>
            {selectedTheme === '訂單'
              ? bookOrderData.map((book, index) => (
                  <tr key={index}>
                    <td>{book.r_type_id}</td>
                    <td>{book.InOutDate}</td>
                    <td>{book.total_price}</td>
                    <td>{book.created_at}</td>
                  </tr>
                ))
              : eventOrderData.map((event, index) => (
                  <tr key={index}>
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
      )}
    </div>
  )
}

export default OrdersTableWithThemes
