import '../components/06-event-comp-left.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'
import YellowWave from './YellowWave'

function Left({ setNowPage }) {
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
              }}
            >
              <div href="/events">所有活動</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(2)
              }}
            >
              <div href="/schedule">時間表</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(3)
              }}
            >
              <div href="/map">場域地圖</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li
              onClick={(e) => {
                e.preventDefault()
                setNowPage(4)
              }}
            >
              <div href="/ticket">我的票卷</div>
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
