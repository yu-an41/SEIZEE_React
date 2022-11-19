import '../styles/06-event-03-schedule.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'
import jMenu from '../svg/menu.svg'

function Map() {
  return (
    <>
      <div class="j-sides">
        <div class="j-left">
          <ul>
            <li>
              <img src={jLogo} alt="" />
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>所有活動</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>時間表</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>地圖</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>我的票卷</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
          </ul>
        </div>
        <div class="j-right">
          <ul>
            <li>
              <img src={jMenu} alt="" />
            </li>
            <li>
              <div class="j-right-banner">我的時間表</div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Map