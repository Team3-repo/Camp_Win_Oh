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
          <div className='user'>
            <div className="userpic">
              <img
                src="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
                alt=""
              />
            </div>
            <h5>兔兔</h5>
          </div>
      </header>
    </>
  )
}
