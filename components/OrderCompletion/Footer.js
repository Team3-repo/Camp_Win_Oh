/**
 **
 */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">© 2024 會營ㄛ | Campwinoh Campground</div>
      <style jsx>{`
        .footer {
          justify-content: center;
          background: var(--primary, #98d293);
          background-color: var(--primary, #98d293);
          display: flex;
          margin-top: 227px;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          color: var(--white, var(--white, #fff));
          text-align: center;
          padding: 21px 103px;
          font: 400 20px PoetsenOne, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .footer {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .footer-content {
          flex: 1;
          width: 100%;
          padding: 14px 0;
        }
        @media (max-width: 991px) {
          .footer-content {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
