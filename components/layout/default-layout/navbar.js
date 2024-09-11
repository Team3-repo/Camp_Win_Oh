import React from 'react'

export default function Navbar() {
  return (
    <>
      <header>
        <div className="logo">
          <p>會營ㄛ</p>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <p>尋找空位</p>
            </li>
            <li>
              <p>露營用具</p>
            </li>
            <li>
              <p>活動情報</p>
            </li>
            <li>
              <p>客服中心</p>
            </li>
          </ul>
        </div>
          <div className='user'>
            <div className="userpic">
              <img
                src="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
                alt=""
              />
            </div>
            <p>兔兔</p>
          </div>
      </header>
    </>
  )
}
