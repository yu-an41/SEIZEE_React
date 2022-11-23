import React from 'react'
// scss
import './../styles/Footer.scss'

// img srcs
import Apple from './../dotown/apple.png'
import LogoWhite from './../logo-and-fonts/LOGO-white.svg'
import FacebookIcon from './../lifelabel/emoji_sns_facebook.png'
import InstagramIcon from './../lifelabel/emoji_sns_instagram.png'
import PinterestIcon from './../lifelabel/emoji_sns_pinterest.png'
import TwitterIcon from './../lifelabel/emoji_sns_twitter.png'
import YoutubeIcon from './../lifelabel/emoji_sns_youtube.png'

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
              <a href="/#" alt="About us">
                關於我們
              </a>
            </li>
            <li>
              <a href="/#" alt="About us">
                關於我們
              </a>
            </li>
          </ul>
          <ul className="y-footer-media">
            <li>
              <a href="/#">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={FacebookIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={PinterestIcon} alt="Pinterest" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={YoutubeIcon} alt="FaceYoutubebook" />
              </a>
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
