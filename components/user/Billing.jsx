import React, { useState, useEffect } from 'react'
import OverlayLoginRegister from './OverlayLoginRegister'
import Button from '../book/button'
import axios from 'axios'

function Billing() {
  const [selectedTheme, setSelectedTheme] = useState('Theme 1') // 預設選擇的主題
  const [orders, setOrders] = useState([]) // 用來存儲當前主題的訂單數據
  const [loading, setLoading] = useState(false) // 加載狀態

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true) // 開啟覆蓋層
  }

  // 當 selectedTheme 改變時，從後端請求該主題的訂單數據
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/orders/${selectedTheme}`)
        const data = await response.json()
        setOrders(data)
      } catch (error) {
        console.error('Error fetching orders:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [selectedTheme])

  // 切換主題時，更新選中的主題
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme)
  }

  // 取得歷史訂單
  useEffect(() => {
    axios
      .get('http://localhost:3005/events/api/user-events/:user_id')
      .then((response) => {
        setOrders(response.data)
        categorizeOrders(response.data)
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      })
  }, [])

  // 將訂單分類
  const categorizeOrders = (orders) => {
    const theme1 = orders.filter((order) => order.theme === 'Theme 1')
    const theme2 = orders.filter((order) => order.theme === 'Theme 2')
    const theme3 = orders.filter((order) => order.theme === 'Theme 3')
    setFilteredOrders({ theme1, theme2, theme3 })
  }
  return (
    <div style={{ display: 'flex' }}>
      {/* 左側的按鈕組 */}
      <div className="list-group" style={{ marginRight: '20px' }}>
        <button
          type="button"
          className={`list-group-item list-group-item-action ${
            selectedTheme === 'Theme 1' ? 'active' : ''
          }`}
          onClick={() => handleThemeChange('Theme 1')}
        >
          主題 1
        </button>
        <button
          type="button"
          className={`list-group-item list-group-item-action ${
            selectedTheme === 'Theme 2' ? 'active' : ''
          }`}
          onClick={() => handleThemeChange('Theme 2')}
        >
          主題 2
        </button>
        <button
          type="button"
          className={`list-group-item list-group-item-action ${
            selectedTheme === 'Theme 3' ? 'active' : ''
          }`}
          onClick={() => handleThemeChange('Theme 3')}
        >
          主題 3
        </button>
      </div>

      {/* 右側的表格顯示 */}
      <div>
        <h3>{selectedTheme} 訂單</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>訂單日期</th>
                <th>金額</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.event_id}>
                  <td>{order.order_number}</td>
                  <td>{order.order_date}</td>
                </tr>
              ))}
              <tr>
                <td>已加入</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Billing
