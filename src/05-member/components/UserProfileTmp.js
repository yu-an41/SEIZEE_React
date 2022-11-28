import { Link, useLocation } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import '.././style/UserProfileTmp.scss'
import YellowWave from './YellowWave'
import AuthContext from '../../contexts/AuthContext'

function UserProfileTmp() {
  const location = useLocation()
  const [profileRWDIndex, setProfileRWDIndex] = useState(1)
  const { logout } = useContext(AuthContext)
  let seg1 = location.pathname.split('/')[2]
  // console.log('location path', location.pathname)
  // console.log('seg1', '111' + seg1 + '222')

  if (seg1 === '' || seg1 === undefined) {
    seg1 = 'profile'
  }

  const actives = {}
  actives[seg1] = {
    backgroundColor: '#fff6e2',
  }
  // console.log('actives', actives)
  // console.log('actives[seg1]', actives[seg1])
  // console.log('actives.orders', actives.orders)

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
        className={
          profileRWDIndex === 1
            ? 's-upt-navigation'
            : 's-upt-navigation s-upt-active'
        }
      >
        <ul className="s-upt-ul">
          <li className="s-upt-li">
            <h4 className="s-upt-h4">使用者設定</h4>
          </li>
          <li className="s-upt-li">
            <Link className="s-upt-item" style={actives.profile} to="/profile">
              <span className="s-upt-icon">
                <img
                  src="/05-member/green-book.png"
                  alt=""
                  className="s-upt-img"
                />
              </span>
              <span className="s-upt-title">我的帳號</span>
            </Link>
          </li>
          <li className="s-upt-li">
            <h4 className="s-upt-h4">平台相關查詢</h4>
          </li>
          <li className="s-upt-li">
            <Link
              className="s-upt-item"
              style={actives.orders}
              to="/profile/orders"
            >
              <span className="s-upt-icon">
                <img src="/05-member/wallet.png" alt="" className="s-upt-img" />
              </span>
              <span className="s-upt-title">訂單查詢</span>
            </Link>
          </li>
          <li className="s-upt-li">
            <Link
              className="s-upt-item"
              style={actives.likes}
              to="/profile/likes"
            >
              <span className="s-upt-icon">
                <img
                  src="/05-member/thumbs_up.png"
                  alt=""
                  className="s-upt-img"
                />
              </span>
              <span className="s-upt-title">我的收藏</span>
            </Link>
          </li>
          <li className="s-upt-li">
            <Link
              className="s-upt-item"
              style={actives.activities}
              to="/profile/activities"
            >
              <span className="s-upt-icon">
                <img src="/05-member/flag.png" alt="" className="s-upt-img" />
              </span>
              <span className="s-upt-title">活動查詢</span>
            </Link>
          </li>
          <li className="s-upt-li">
            <h4 className="s-upt-h4">下次再見</h4>
          </li>
          <li className="s-upt-li">
            <Link
              className="s-upt-item"
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              <span className="s-upt-icon">
                <img src="/05-member/key.png" alt="" className="s-upt-img" />
              </span>
              <span className="s-upt-title logout">登出</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          profileRWDIndex === 1 ? 's-upt-toggle' : 's-upt-toggle s-upt-active'
        }
        onClick={profileRWDToggle}
      ></div>
      <YellowWave />
    </>
  )
}

export default UserProfileTmp
