import React, { useState } from 'react'
import Button from '../book/button'
import OverlayLoginRegister from '../user/OverlayLoginRegister'

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false) // 狀態控制覆蓋層的顯示

  const [isLoggedIn,setIsLoggedIn]  = useState(false);
  const baseURL = typeof window !== 'undefined' ? window.location.origin : ''

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
                  window.location.href = `${baseURL}/events`
                }}
                style={{ cursor: 'pointer' }}
              >
                活動情報
              </h5>
            </li>
            <li>
              <h5>客服中心</h5>
            </li>
          </ul>
        </div>
        <div className="user">
          <div className="userpic">
            <img
              src="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
              alt=""
            />
          </div>
          <h5>
            <a href={`${baseURL}/user/settings`}>兔兔</a>
          </h5>
          {isLoggedIn ? (
            <Button
              type="button"
              label="登入/註冊"
              onClick={handleOpenOverlay}
            />
          ) : (
            isOverlayOpen && (
              <OverlayLoginRegister onClose={() => setIsOverlayOpen(false)} />
            )
          )}
        </div>
      </header>
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
            margin-right: 10px;
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
