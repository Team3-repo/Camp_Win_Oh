import React, { useState, useEffect } from 'react'
import Button from '../book/button'
import OverlayLoginRegister from '../user/OverlayLoginRegister'

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false) // 狀態控制覆蓋層的顯示
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 設置初始登入狀態為 false
  const [storedUser, setStoredUser] = useState(null) // 用於存儲用戶資訊

  const baseURL = typeof window !== 'undefined' ? window.location.origin : ''

  const checkLoginState = () => {
    if (typeof window !== 'undefined') {
      const loginState = localStorage.getItem('loginState')
      setIsLoggedIn(loginState === 'true')
      const user = JSON.parse(localStorage.getItem('user'))
      setStoredUser(user) // 取得用戶資訊
    }
  }

  useEffect(() => {
    checkLoginState() // 在進入頁面時，檢查有無登入
  }, [])

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true) // 開啟覆蓋層
  }

  return (
    <>
      <header>
        <div className="logo">
          <img
            src="/logo.png"
            alt="logo"
            onClick={() => {
              window.location.href = `${baseURL}`
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <h5
                onClick={() => {
                  window.location.href = `${baseURL}/book`
                }}
                style={{ cursor: 'pointer' }}
              >
                尋找空位
              </h5>
            </li>
            <li>
              <h5
                onClick={() => {
                  window.location.href = `${baseURL}/cart/1CampingStore`
                }}
                style={{ cursor: 'pointer' }}
              >
                露營用具
              </h5>
            </li>
            <li>
              <h5
                onClick={() => {
                  window.location.href = `${baseURL}/events/eventList`
                }}
                style={{ cursor: 'pointer' }}
              >
                活動情報
              </h5>
            </li>
          </ul>
        </div>
        <div className="user">
          <div className="userpic">
            <a href={`${baseURL}/user/settings`}>
              <img
                src="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
                alt=""
              />
            </a>
          </div>

          {/* icon 左邊的 username */}
          {isLoggedIn ? (
            <h5>{storedUser?.user_name}</h5> // 確保 storedUser 存在後再顯示
          ) : (
            <h5></h5>
          )}

          {isLoggedIn ? (
            <Button
              type="button"
              label="登出"
              onClick={() => {
                setIsLoggedIn(false)
                localStorage.setItem('loginState', 'false')
                // 清除其他資料，但保留 loginState
                Object.keys(localStorage).forEach((key) => {
                  if (key !== 'loginState') {
                    localStorage.removeItem(key)
                  }
                })
                checkLoginState() // 登出後再次檢查
              }}
            />
          ) : (
            <Button type="button" label="登入" onClick={handleOpenOverlay} />
          )}
          {isOverlayOpen && (
            <OverlayLoginRegister
              onClose={() => {
                setIsOverlayOpen(false)
                checkLoginState()
              }}
            />
          )}
        </div>
      </header>
      {/* CSS 省略 */}
      <style jsx>
        {`
          header {
            display: flex;
            height: auto;
            justify-content: space-between; /* 調整元素間距 */
            background-color: #fffbf6;
            position: fixed; /* 將 header 固定 */
            top: 0; /* 固定在頂部 */
            left: 0;
            right: 0;
            z-index: 1000; /* 確保 header 位於最上層 */
            padding: 0px 20px; /* 增加 padding */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加陰影 */
          }
          .logo {
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center; /* 水平置中 */
          }

          .logo:hover {
            background-color: lightblue;
          }

          .logo p {
            width: 100%;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo img {
            position: relative;
            top: 8%;
            height: 110%;
            object-fit: scale-down; /* 自由伸縮但不變形 */
            max-width: 70%; /* 防止圖片溢出容器 */
          }
          .navbar {
            display: flex;
            align-items: center;
          }
          .navbar ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }
          .navbar ul li h5 {
            text-align: center;
            margin: 0 10px;
            cursor: pointer;
          }
          .navbar h5 {
            text-decoration: none;
            color: #4c3a30;
            width: 100px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .navbar h5:hover {
            color: #ff82d2;
          }
          .user {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
          }
          .user h5 {
            color: #4c3a30;
            cursor: pointer;
            margin: 0 13px 0 0;
          }
          .user h5:hover {
            color: #ff82d2;
          }
          .userpic {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
          }
          .userpic h5 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}
