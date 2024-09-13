/**
 **
 */
import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="logo-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2baf3aa4b83ed487fd1e0381f230f9f10b4aef3a8dbaf3a3786ffc8b66af3d76?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
          className="logo-image"
          alt="Company Logo"
        />
        <h1 className="company-name">會營ㄛ</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#check-availability">查看空位</a>
          </li>
          <li>
            <a href="#camping-gear">露營用具</a>
          </li>
          <li>
            <a href="#event-info">活動情報</a>
          </li>
          <li>
            <a href="#customer-service">客服中心</a>
          </li>
        </ul>
      </nav>
      <div className="user-profile">
        <div className="profile-image-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0216594821e22ee4b089fdb435d5879b5168bdaa1a9ab0635719eda8ffb34c?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
            className="profile-image"
            alt="User Profile"
          />
        </div>
        <span className="username">小八</span>
      </div>
      <style jsx>{`
        .site-header {
          justify-content: space-between;
          align-items: center;
          background: var(--bg, #fffbf6);
          display: flex;
          width: 100%;
          gap: 40px 100px;
          flex-wrap: wrap;
          padding: 0 50px;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000;
          font: 500 35px Zen Maru Gothic, sans-serif;
          margin-left: 30px;

        }
        .logo-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: contain;
        }
        .main-nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        .main-nav li {
          margin: 0 10px;
        }
        .main-nav a {
          color: #000;
          text-decoration: none;
          font: 400 20px Zen Maru Gothic, sans-serif;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .profile-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: contain;
        }
        .username {
          color: #000;
          font: 500 28px Zen Maru Gothic, sans-serif;
          margin-right: 30px;

        }
        @media (max-width: 991px) {
          .site-header {
            padding: 0 20px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
