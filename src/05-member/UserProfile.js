import './style/UserProfile.scss'
import React, { useState } from 'react'
import YellowWave from './YellowWave'

function UserProfile() {
  const [profileRWDIndex, setProfileRWDIndex] = useState(0)

  function profileRWDToggle() {
    if (profileRWDIndex === 1) {
      setProfileRWDIndex(0)
    } else {
      setProfileRWDIndex(1)
    }
  }
  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <div
            className={
              profileRWDIndex === 1 ? 'navigation' : 'navigation active'
            }
          >
            <ul>
              <li>
                <h4 className="title">使用者設定</h4>
              </li>
              <li>
                <a className="item" href="/#">
                  <span className="icon">
                    <img src="/05-member/green-book.png" alt="" />
                  </span>
                  <span className="title">我的帳號</span>
                </a>
              </li>
              <li>
                <h4 className="title">平台相關查詢</h4>
              </li>
              <li>
                <a className="item" href="/#">
                  <span className="icon">
                    <img src="/05-member/thumbs_up.png" alt="" />
                  </span>
                  <span className="title">收藏</span>
                </a>
              </li>
              <li>
                <a className="item" href="/#">
                  <span className="icon">
                    <img src="/05-member/wallet.png" alt="" />
                  </span>
                  <span className="title">訂單查詢</span>
                </a>
              </li>
              <li>
                <a className="item" href="/#">
                  <span className="icon">
                    <img src="/05-member/flag.png" alt="" />
                  </span>
                  <span className="title">活動查詢</span>
                </a>
              </li>
              <li>
                <h4 className="title">下次再見</h4>
              </li>
              <li>
                <a className="item" href="/#">
                  <span className="icon">
                    <img src="/05-member/key.png" alt="" />
                  </span>
                  <span className="title logout">登出</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={profileRWDIndex === 1 ? 'toggle' : 'toggle active'}
            onClick={profileRWDToggle}
          ></div>
          <YellowWave />
          <div className="main-content"></div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default UserProfile
