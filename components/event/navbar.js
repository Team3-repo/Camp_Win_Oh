import React, { useState } from 'react'
import Button from '../book/button'
import OverlayLoginRegister from '../user/OverlayLoginRegister'

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false) // 狀態控制覆蓋層的顯示

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true) // 開啟覆蓋層
  }
  return (
    <>
      <header>
        <div className="logo">
          <p>待補圖</p>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <h5>尋找空位</h5>
            </li>
            <li>
              <h5>露營用具</h5>
            </li>
            <li>
              <h5>活動情報</h5>
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
          <h5 onClick={handleOpenOverlay}>兔兔</h5>
          <Button label="登入/註冊" onClick={handleOpenOverlay} />

          {/* 如果覆蓋層需要顯示，則渲染 OverlayLoginRegister */}
          {isOverlayOpen && (
            <OverlayLoginRegister onClose={() => setIsOverlayOpen(false)} />
          )}
        </div>
      </header>
      <style jsx>
        {`
          header {
            display: flex;
            height: auto;
            justify-content: space-evenly;
            background-color: #fffbf6;
          }
          .logo {
            width: 100px;
            background-color: lightblue;
            display: flex;
            align-items: center;
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
