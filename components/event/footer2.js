import React from 'react'

export default function Footer2() {
  return (
    <>
      <footer className="footer2">
        <h6>
          Copyright © 2024 會營お |
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=eDH0Lk1qedkwA7YG"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            CampWinOh Campground
          </a>
        </h6>
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
          .footer2 h6 a {
          }
        `}
      </style>
    </>
  )
}
