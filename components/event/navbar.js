import React from 'react'

export default function Navbar() {
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
          <h5>兔兔</h5>
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
