/**
 **
 */
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      © 2024 會營ㄛ | Campwinoh Campground
      <style jsx>{`
        .footer {
          justify-content: center;
          background: var(--primary, #98d293);
          display: flex;
          margin-top: 81px;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          color: var(--white, #fff);
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
      `}</style>
    </footer>
  );
}

export default Footer;
