import { useState } from 'react'
import './../styles/Menu.scss'

//img srcs
import MenuSvg from './../logo-and-fonts/MENU.svg'
import CloseSvg from './../logo-and-fonts/CLOSE.svg'
import Apple from './../dotown/apple.png'
import FacebookIcon from './../lifelabel/emoji_sns_facebook.png'
import InstagramIcon from './../lifelabel/emoji_sns_instagram.png'
import PinterestIcon from './../lifelabel/emoji_sns_pinterest.png'
import TwitterIcon from './../lifelabel/emoji_sns_twitter.png'
import YoutubeIcon from './../lifelabel/emoji_sns_youtube.png'

function Menu() {
  const [menuClick, setMenuClick] = useState(true)
  const [searchText, setSearchText] = useState('')

  const menuHandler = () => {
    setMenuClick(!menuClick)
    // console.log('menu clicked')
  }

  const searchHandler = (e) => {
    setSearchText(e.currentTarget.value)
    console.log(e.target.value)
  }

  return menuClick ? (
    <div className="y-btn-wrap-closed">
      <div className="y-menu-border">
        <div className="y-menu-top" onClick={menuHandler}>
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
    <div className="y-btn-wrap-opened">
      <div className="y-menu-border">
        <div className="y-menu-top" onClick={menuHandler}>
          <h2 className="y-h2-wrap">
            <img src={CloseSvg} alt="CLOSE" />
          </h2>
          <div className="y-menu-icon">
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="y-menu-bottom">
          <div className="y-menu-search">
            <div className="y-search-border">
              <input
                type="text"
                value={searchText}
                onChange={(e) => {
                  searchHandler(e)
                }}
                placeholder="請輸入店家/活動/文章關鍵字"
              />
            </div>
            <div className="y-search-icon">
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
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
      </div>
    </div>
  )
}

export default Menu
