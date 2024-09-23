import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelopeOpen } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function Footer1() {
  return (
    <>
      <footer className="footer1">
        <h3>Contact Us</h3>
        <div className="footer1_container">
          <div className="contact">
            <h5>客服營業時間</h5>
            <ul>
              <li>
                <h5>週一至週日 9:00 AM - 6:00 PM</h5>
              </li>
              <li>
                <h5>
                  <FaPhoneAlt style={{ paddingTop: '5px' }} />
                  &ensp;(049) 1234-5678
                </h5>
              </li>
              <li>
                <h5>
                  <FaEnvelopeOpen style={{ paddingTop: '5px' }} />
                  &ensp;info@campwinoh.com
                </h5>
              </li>
            </ul>
          </div>
          <div className="socialMedia">
            <div className="socialMedia_title">
              <h5>社群媒體</h5>
            </div>
            <div className="socialMedia_icon">
              <h5>
                <FaFacebookSquare
                  className="FB"
                  style={{ color: '#3b5998', fontSize: '30px' }}
                />
              </h5>
              <h5>
                <FaInstagramSquare
                  className="IG"
                  style={{ color: '#e1306c', fontSize: '30px' }}
                />
              </h5>
              <h5>
                <FaYoutube
                  className="YT"
                  style={{ color: '#fd1d1d', fontSize: '30px' }}
                />
              </h5>
            </div>
          </div>
        </div>
        <p>Copyright © 2024 會營お | CampWinOh Campground</p>
      </footer>
      <style jsx>
        {`
          .footer1 {
            display: flex;
            height: 250px;
            background-color: #98d293;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-weight: normal;
          }
          .footer1 h3 {
            font-family: 'Zen Maru Gothic', sans-serif;
          }
          .footer1 h5 {
            display: flex;
            justify-content: flex-start;
            font-family: 'Zen Maru Gothic', sans-serif;
            font-weight: normal;
          }
          .footer1 p {
            display: flex;
            justify-content: center;
            font-family: 'Zen Maru Gothic', sans-serif;
          }
          .footer1 .contact {
            margin-right: 150px;
          }
          .contact ul {
            list-style-type: none;
          }
          .footer1_container {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
          }
          .footer1_container p {
            display: flex;
            justify-content: flex-start;
          }
          .socialMedia {
            display: flex;
            flex-direction: column;
            padding: 10px;
          }
          .socialMedia_icon {
            display: flex;
            flex-direction: row;
            padding: 15px;
          }
          .FB:hover,
          .IG:hover,
          .YT:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}
