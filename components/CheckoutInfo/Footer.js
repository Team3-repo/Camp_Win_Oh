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
          background-color: #98d293;
          color: #ffffff;
          padding: 24px 0;
          text-align: center;
          font-family: PoetsenOne, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 20px;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
