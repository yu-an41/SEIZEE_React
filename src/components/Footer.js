import React from 'react'
// scss
import './../styles/Footer.scss'

// img srcs
import Apple from './../dotown/apple.png'
import LogoWhite from './../logo-and-fonts/LOGO-white.svg'


function Footer() {
  return (
    <>
      <div className="y-footer-bg">
        <div className="y-footer-body">
          <div className="y-footer-logo">
            <img src={LogoWhite} alt="SEIZEE logo white" />
          </div>
          <ul className="y-footer-title">
            <li>
              <a href="/#" alt="merch_link">
                商品快搜
              </a>
            </li>
            <li>
              <a href="/#" alt="merch_link">
                商品快搜
              </a>
            </li>
            <li>
              <a href="/#" alt="merch_link">
                商品快搜
              </a>
            </li>
            <li>
              <a href="/#" alt="merch_link">
                商品快搜
              </a>
            </li>
          </ul>
          <ul className="y-footer-links">
            <li>
              <a href="/#" alt="event_link">
                #踢球球活動
              </a>
            </li>
            <li>
              <a href="/#" alt="event_link">
                #踢球球活動
              </a>
            </li>
            <li>
              <a href="/#" alt="event_link">
                #踢球球活動
              </a>
            </li>
            <li>
              <a href="/#" alt="event_link">
                #踢球球活動
              </a>
            </li>
          </ul>
          <ul className='y-Footer-media'>
            <li>
              <img /> 
            </li>
          </ul>
        </div>
        <div className="y-footer-rights">
          <p>Copyright © SEIZEE Inc. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
