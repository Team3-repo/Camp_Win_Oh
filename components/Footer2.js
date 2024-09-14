/**
 **
 */
import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <p className="copyright">© 2024123 會營ㄛ | Campwinoh Campground</p>
      <style jsx>{`
        .site-footer {
          background-color: #98d293;
          color: #fff;
          text-align: center;
          padding: 21px;
          margin-top: 46px;
          font: 400 20px PoetsenOne, sans-serif;
          {/* width:100%; */}
        }
        .copyright {
          padding: 14px 0;
        }
        @media (max-width: 991px) {
          .site-footer {
            margin-top: 40px;
            padding: 20px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
