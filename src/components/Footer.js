/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
// scss
import './../styles/Footer.scss'

// img srcs
import Apple from './../dotown/apple.png'
import ShopIcon from './../lifelabel/emoji-house.png'
import ForumIcon from './../lifelabel/emoji-book.png'
import EventIcon from './../lifelabel/emoji-light-bulb.png'
import MemberIcon from './../lifelabel/emoji-man.png'
import SeizeeIcon from './../lifelabel/emoji-thunder.png'
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
          <div className="y-footer-content">
            <div className="y-footer-section y-footer-section-shop">
              <div className="y-footer-section-title">
                <div className="y-footer-section-icon">
                  <img src={ShopIcon} alt="icon" />
                </div>
                <a to="/shop" alt="merch_link">
                  美食快搜
                </a>
              </div>
              <ul className="y-footer-section-links y-shops-links">
                <li>
                  <div className="y-shop-links-icon">
                    <img src={`/03-shop-img/food_rice_02.png`} />
                  </div>
                  <a to="/#" alt="merch_link">
                    中式
                  </a>
                </li>
                <li>
                  <div className="y-shop-links-icon">
                    <img src={`/03-shop-img/food_hamburger_01.png`} />
                  </div>
                  <a to="/#" alt="merch_link">
                    美式
                  </a>
                </li>
                <li>
                  <div className="y-shop-links-icon">
                    <img src={`/03-shop-img/food_osushi_03.png`} />
                  </div>
                  <a to="/#" alt="merch_link">
                    日式
                  </a>
                </li>
                <li>
                  <div className="y-shop-links-icon">
                    <img src={`/03-shop-img/food_ramen_01.png`} />
                  </div>
                  <a to="/#" alt="merch_link">
                    泰式
                  </a>
                </li>
                <li>
                  <div className="y-shop-links-icon">
                    <img src={`/03-shop-img/food_spaghetti_01.png`} />
                  </div>
                  <a to="/#" alt="merch_link">
                    義式
                  </a>
                </li>
                <li>
                  <div className="y-shop-links-icon">
                    <img src={`/03-shop-img/food_cake_01.png`} />
                  </div>
                  <a to="/#" alt="merch_link">
                    甜點
                  </a>
                </li>
              </ul>
            </div>
            <div className="y-footer-section y-footer-section-forum">
              <div className="y-footer-section-title">
                <div className="y-footer-section-icon">
                  <img src={ForumIcon} alt="icon" />
                </div>
                <a to="/forum/" alt="merch_link">
                  聊聊惜食
                </a>
              </div>
              <ul className="y-footer-section-links y-forum-links">
                <li>
                  <a to="/#" alt="forum_link">
                    SEIZEE版
                  </a>
                </li>
                <li>
                  <a to="/#" alt="forum_link">
                    店家版
                  </a>
                </li>
                <li>
                  <a to="/#" alt="forum_link">
                    戰士版
                  </a>
                </li>
                <li>
                  <a to="/#" alt="forum_link">
                    剩食料理版
                  </a>
                </li>
              </ul>
            </div>
            <div className="y-footer-section y-footer-section-event">
              <div className="y-footer-section-title">
                <div className="y-footer-section-icon">
                  <img src={EventIcon} alt="icon" />
                </div>
                <a to="/event/" alt="event_link">
                  找點樂子
                </a>
              </div>
              <ul className="y-footer-section-links y-event-links">
              <li>
                  <a href="/event/" alt="event_link">
                    活動一覽
                  </a>
                </li>
                <li>
                  <a href="/event/schedule" alt="event_link">
                    音樂
                  </a>
                </li>
                <li>
                  <a href="/event/map" alt="event_link">
                    地圖
                  </a>
                </li>
                <li>
                  <a href="/event/ticket" alt="event_link">
                    我的票券
                  </a>
                </li>
              </ul>
            </div>
            <div className="y-footer-section y-footer-section-member">
              <div className="y-footer-section-title">
                <div className="y-footer-section-icon">
                  <img src={MemberIcon} alt="icon" />
                </div>
                <Link to={`/profile/`} alt="event_link">
                  戰士專區
                </Link>
              </div>
              <ul className="y-footer-section-links y-event-links">
                <li>
                  <a to="/#" alt="event_link">
                    最新消息
                  </a>
                </li>
                <li>
                  <a to="/#" alt="event_link">
                    我的訂單
                  </a>
                </li>
                <li>
                  <a to="/#" alt="event_link">
                    會員中心
                  </a>
                </li>
                <li>
                  <a to="/#" alt="event_link">
                    心願清單
                  </a>
                </li>
              </ul>
            </div>
            <div className="y-footer-section y-footer-section-seizee">
              <div className="y-footer-section-title">
                <div className="y-footer-section-icon">
                  <img src={SeizeeIcon} alt="icon" />
                </div>
                <a to="/#" alt="event_link">
                  了解SEIZEE
                </a>
              </div>
              <ul className="y-footer-section-links y-seizee-links">
                <li>
                  <a to="/#" alt="about">
                    關於我們
                  </a>
                </li>
                <li>
                  <a to="/#" alt="about">
                    惜時源起
                  </a>
                </li>
                <li>
                  <a to="/#" alt="about">
                    最新消息
                  </a>
                </li>
                <li>
                  <a to="/#" alt="about">
                    異業合作
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="y-footer-rights">
          <p>Copyright © SEIZEE Inc. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
