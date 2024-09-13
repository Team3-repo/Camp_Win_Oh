/**
 **
 */
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2baf3aa4b83ed487fd1e0381f230f9f10b4aef3a8dbaf3a3786ffc8b66af3d76?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
          className="logo-image"
          alt="Company Logo"
        />
        <div className="company-name">會營ㄛ</div>
      </div>
      <nav className="nav-links">查看空位 露營用具 活動情報 客服中心</nav>
      <div className="user-profile">
        <div className="user-avatar-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4e92f2ce4438f668379f7b40f49dbcad9ae179d7f3357f5b48faeb322288c3?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
            className="user-avatar"
            alt="User Avatar"
          />
        </div>
        <div className="user-name">小八</div>
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
        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .logo-container {
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000;
          white-space: nowrap;
          justify-content: start;
          margin: auto 0;
          padding: 10px 0;
          font: 500 35px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .logo-container {
            white-space: initial;
          }
        }
        .logo-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 80px;
          border-radius: 50%;
          align-self: stretch;
          margin: auto 0;
        }
        .company-name {
          align-self: stretch;
          margin: auto 0;
        }
        .nav-links {
          color: var(--black, #000);
          text-align: center;
          align-self: stretch;
          margin: auto 0;
          font: 400 20px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .user-profile {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: end;
          margin: auto 0;
        }
        .user-avatar-container {
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: end;
          width: 50px;
          margin: auto 0;
        }
        .user-avatar {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 50px;
          border-radius: 50%;
          align-self: stretch;
          margin: auto 0;
        }
        .user-name {
          color: #000;
          align-self: stretch;
          width: 58px;
          margin: auto 0;
          font: 500 28px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
      `}</style>
    </header>
  );
};

export default Header;
