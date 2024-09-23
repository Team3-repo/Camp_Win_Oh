import React from 'react'

export default function Footer2() {
  return (
    <>
      <footer className="footer2">
        <h6>Copyright © 2024 會營お | CampWinOh Campground</h6>
      </footer>
      <style jsx>
        {`
          .footer2 {
            display: flex;
            height: 50px;
            background-color: #98d293;
            justify-content: center;
            align-items: center;
            font-weight: normal;
          }
          .footer2 h6 {
            font-family: 'Zen Maru Gothic', sans-serif;
          }
        `}
      </style>
    </>
  )
}
