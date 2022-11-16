import { useState } from 'react'
import './../styles/Menu.scss'
import MenuSvg from './../logo-and-fonts/MENU.svg'
import CloseSvg from './../logo-and-fonts/CLOSE.svg'
import Apple from './../dotown/apple.png'
function Menu() {
  const [menuClick, setMenuClick] = useState(true)

  const menuHandler = () => {
    setMenuClick(!menuClick)
    // console.log('menu clicked')
  }

  return menuClick ? (
    <div div className="y-btn-wrap-closed">
      <div className="y-menu-border" onClick={menuHandler}>
        <div className="y-menu-top">
          <h2 className="y-h2-wrap">
            <img src={MenuSvg} alt="MENU" />
          </h2>
          <div className="y-menu-icon">
            <i className="fa-sharp fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div div className="y-btn-wrap-opened">
      <div className="y-menu-border" onClick={menuHandler}>
        <div className="y-menu-top">
          <h2 className="y-h2-wrap">
            <img src={CloseSvg} alt="CLOSE" />
          </h2>
          <div className="y-menu-icon">
            <i class="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="y-menu-bottom">
          <div className="y-menu-search">
            <div className="y-search-border">
              <input type="text" />
            </div>
            <div className="y-search-icon">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="y-menu-content">
            <ul className="y-page-title">
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
            <ul className="y-page-links">
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
          </div>
          <ul className="y-menu-links">
            <li>
              <a href="/#" alt="about">
                關於我們
              </a>
            </li>
            <li>
              <a href="/#" alt="about">
                關於我們
              </a>
            </li>
          </ul>
          <ul className="y-social-media">
            <li className="y-social-media-wrap">
              <a href="/#" alt="social_media">
                <img src={Apple} alt="apple" />
              </a>
            </li>
            <li className="y-social-media-wrap">
              <a href="/#" alt="social_media">
                <img src={Apple} alt="apple" />
              </a>
            </li>
            <li className="y-social-media-wrap">
              <a href="/#" alt="social_media">
                <img src={Apple} alt="apple" />
              </a>
            </li>
            <li className="y-social-media-wrap">
              <a href="/#" alt="social_media">
                <img src={Apple} alt="apple" />
              </a>
            </li>
            <li className="y-social-media-wrap">
              <a href="/#" alt="social_media">
                <img src={Apple} alt="apple" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
