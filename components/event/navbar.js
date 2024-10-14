import React, { useState, useEffect } from 'react'
import Button from '../book/button'
import OverlayLoginRegister from '../user/OverlayLoginRegister'
import Image from 'next/image'

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [storedUser, setStoredUser] = useState(null)
  const [avatarSrc, setAvatarSrc] = useState('/pics/avatar-1.png') // 預設頭像

  const baseURL = typeof window !== 'undefined' ? window.location.origin : ''

  const checkLoginState = () => {
    if (typeof window !== 'undefined') {
      const loginState = localStorage.getItem('loginState')
      setIsLoggedIn(loginState === 'true')
      const storedUser = localStorage.getItem('user') || '{}'
      const user = JSON.parse(storedUser)
      setStoredUser(user) // 取得用戶資訊

      // 使用預設圖片的邏輯
      const initialAvatar =
        user.avatar && user.avatar !== 'none'
          ? `http://localhost:3005${user.avatar}`
          : '/pics/avatar-1.png'
      setAvatarSrc(initialAvatar)
    }
  }

  useEffect(() => {
    checkLoginState() // 在進入頁面時，檢查有無登入
  }, [])

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true)
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
                  window.location.href = `${baseURL}/`
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
          </ul>
        </div>
        <div className="user">
          {isLoggedIn ? (
            <>
              <div className="userpic">
                <a href={`${baseURL}/user/settings`}>
                  <Image
                    src={avatarSrc} // 顯示用戶頭像
                    alt="avatar"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
                  />
                </a>
              </div>
              <a
                href={`${baseURL}/user/settings`}
                style={{ textDecoration: 'none' }}
              >
                <h5>{storedUser?.user_name}</h5>
              </a>
            </>
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
                Object.keys(localStorage).forEach((key) => {
                  if (key !== 'loginState') {
                    localStorage.removeItem(key)
                  }
                })
                window.location.href = `http://localhost:3000/`
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
      <style jsx>
        {`
          header {
            display: flex;
            height: auto;
            justify-content: space-between;
            background-color: #fffbf6;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 0px 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .logo {
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo:hover {
            background-color: lightblue;
          }

          .logo img {
            position: relative;
            top: 8%;
            height: 110%;
            object-fit: scale-down;
            max-width: 70%;
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
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
          }
        `}
      </style>
    </>
  )
}
