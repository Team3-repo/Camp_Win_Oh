/**
 **
 */
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img
          loading="lazy"
          src="http://b.io/ext_5-"
          alt="Company Logo"
          className="logo"
        />
        <div className="companyName">會營ㄛ</div>
      </div>
      <nav className="navigation">查看空位 露營用具 活動情報 客服中心</nav>
      <div className="userInfo">
        <div className="avatarContainer">
          <img
            loading="lazy"
            src="http://b.io/ext_6-"
            alt="User Avatar"
            className="avatar"
          />
        </div>
        <div className="userName">小八</div>
      </div>
      <style jsx>{`
        .header {
          justify-content: space-between;
          align-items: center;
          background: var(--bg, #fffbf6);
          display: flex;
          width: 100%;
          gap: 40px 100px;
          flex-wrap: wrap;
          padding: 0 50px;
        }
        .logoContainer {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000;
          font: 500 35px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .logo {
          aspect-ratio: 1;
          object-fit: contain;
          width: 80px;
          border-radius: 50%;
        }
        .navigation {
          color: var(--black, #000);
          text-align: center;
          font: 400 20px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .userInfo {
          display: flex;
          align-items: center;
        }
        .avatarContainer {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 50px;
        }
        .avatar {
          aspect-ratio: 1;
          object-fit: contain;
          width: 50px;
          border-radius: 50%;
        }
        .userName {
          color: #000;
          font: 500 28px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            padding: 0 20px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
