import { useState } from 'react'
import './left.scss'

import jLogo from './../../svg/LOGO.svg'
import jWorm from './../../svg/worm.svg'
import YellowWave from './../yellow/YellowWave'

function Left({ setNowPage }) {
  const [jlactive, setJlactive] = useState(1)

  return (
    <>
      <div className="j-left-wrap">
        <div class="j-left">
          <ul>
            <li>
              <img src={jLogo} alt="" />
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(1)
                setJlactive(1)
              }}
            >
              <div className={jlactive === 1 ? 'active' : ''}>所有活動</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(2)
                setJlactive(2)
              }}
            >
              <div className={jlactive === 2 ? 'active' : ''}>時間表</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(3)
                setJlactive(3)
              }}
            >
              <div className={jlactive === 3 ? 'active' : ''}>場域地圖</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(4)
                setJlactive(4)
              }}
            >
              <div className={jlactive === 4 ? 'active' : ''}>我的票卷</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
          </ul>
        </div>
        <div className="j-wave">
          <YellowWave />
        </div>
      </div>
    </>
  )
}

export default Left
