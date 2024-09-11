import React from 'react'


export default function Navbar() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">會營ㄛ</a>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="">尋找空位</a>
            </li>
            <li>
              <a href="">露營用具</a>
            </li>
            <li>
              <a href="">活動情報</a>
            </li>
            <li>
              <a href="">客服中心</a>
            </li>
          </ul>
        </div>
        <div className="user">
          <div className="userpic">
            <a href="#">
              <img src="/imgs/usagi.jpg" alt="" />
            </a>
          </div>
          <p>兔兔</p>
        </div>
      </header>
    </>
  )
}
