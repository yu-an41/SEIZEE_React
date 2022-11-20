import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '.././style/UserProfileTmp.scss'
import YellowWave from './YellowWave'

function UserProfileTmp() {
  const [profileRWDIndex, setProfileRWDIndex] = useState(1)

  function profileRWDToggle() {
    if (profileRWDIndex === 1) {
      setProfileRWDIndex(0)
    } else {
      setProfileRWDIndex(1)
    }
  }

  return (
    <>
      <div
        className={profileRWDIndex === 1 ? 'navigation' : 'navigation active'}
      >
        <ul>
          <li>
            <h4 className="title">使用者設定</h4>
          </li>
          <li>
            <Link className="item" to="/profile">
              <span className="icon">
                <img src="/05-member/green-book.png" alt="" />
              </span>
              <span className="title">我的帳號</span>
            </Link>
          </li>
          <li>
            <h4 className="title">平台相關查詢</h4>
          </li>
          <li>
            <Link className="item" to="/profile/orders">
              <span className="icon">
                <img src="/05-member/wallet.png" alt="" />
              </span>
              <span className="title">訂單查詢</span>
            </Link>
          </li>
          <li>
            <Link className="item" to="/profile/likes">
              <span className="icon">
                <img src="/05-member/thumbs_up.png" alt="" />
              </span>
              <span className="title">我的收藏</span>
            </Link>
          </li>
          <li>
            <Link className="item" to="/profile/activities">
              <span className="icon">
                <img src="/05-member/flag.png" alt="" />
              </span>
              <span className="title">活動查詢</span>
            </Link>
          </li>
          <li>
            <h4 className="title">下次再見</h4>
          </li>
          <li>
            <Link className="item" to="/#">
              <span className="icon">
                <img src="/05-member/key.png" alt="" />
              </span>
              <span className="title logout">登出</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={profileRWDIndex === 1 ? 'toggle' : 'toggle active'}
        onClick={profileRWDToggle}
      ></div>
      <YellowWave />
    </>
  )
}

export default UserProfileTmp
