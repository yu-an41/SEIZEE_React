import { useState } from 'react'
import './left.scss'

import jLogo from './../../svg/LOGO.svg'
import jWorm from './../../svg/worm.svg'
import YellowWave from './../yellow/YellowWave'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTimeTable } from '../../context/useTimeTable'

function Left() {
  // const [jlactive, setJlactive] = useState(1)
  const navigator = useNavigate()
  const { jlactive, setJlactive } = useTimeTable()
  const { pathname } = useLocation()

  return (
    <>
      <div className="j-left-wrap">
        <div class="j-left">
          <ul>
            <li>
              <img className="j-hidehide" src={jLogo} alt="" />
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              // style={{cursor:"url(./../../svg/silly-pointer-cursor.svg),auto"}}
              onClick={(e) => {
                e.preventDefault()
                // setNowPage(2)
                navigator('/event')
                setJlactive(1)
              }}
            >
              <div className={pathname === '/event' ? 'jactive' : ''}>
                所有活動
              </div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                // setNowPage(3)
                navigator('/event/schedule')
                setJlactive(2)
              }}
            >
              <div className={pathname === '/event/schedule' ? 'jactive' : ''}>
                時間表
              </div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                // setNowPage(4)
                navigator('/event/map')
                setJlactive(3)
              }}
            >
              <div className={pathname === '/event/map' ? 'jactive' : ''}>
                場域地圖
              </div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                // setNowPage(5)
                navigator('/event/ticket')
                setJlactive(4)
              }}
            >
              <div className={pathname === '/event/ticket' ? 'jactive' : ''}>
                我的票卷
              </div>
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
