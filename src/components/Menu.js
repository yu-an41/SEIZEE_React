import React from 'react'
import './../styles/Menu.scss'
import MenuSvg from './../logo-and-fonts/MENU.svg'
import CloseSvg from './../logo-and-fonts/CLOSE.svg'
import Apple from './../dotown/apple.png'
function Menu() {
  return (
    <>
      <div div className="y-btn-wrap-closed">
        <div className="y-menu-border">
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

      <div div className="y-btn-wrap-opened">
        <div className="y-menu-border">
          <div className="y-menu-top">
            <h2 className="y-h2-wrap">
              <img src={CloseSvg} alt="CLOSE" />
            </h2>
            <div className="y-menu-icon">
              <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className="y-menu-bottom">
            <div className="y-menu-search"></div>
            <div className="y-menu-content"></div>
            <div className="y-menu-links">
              <p>關於我們</p>
              <p>聯絡我們</p>
            </div>
            <div className="y-social-media">
              <div className="y-social-media-wrap">
                <img src={Apple} alt="apple" />
              </div>
              <div className="y-social-media-wrap">
                <img src={Apple} alt="apple" />
              </div>
              <div className="y-social-media-wrap">
                <img src={Apple} alt="apple" />
              </div>
              <div className="y-social-media-wrap">
                <img src={Apple} alt="apple" />
              </div>
              <div className="y-social-media-wrap">
                <img src={Apple} alt="apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
