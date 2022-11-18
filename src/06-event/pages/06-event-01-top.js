import '../styles/06-event-01-top.scss'
import logo from '../svg/LOGO.svg'
import worm from '../svg/worm.svg'
import carrot from '../svg/carrot.svg'

import menu from '../svg/menu.svg'

function Top() {
  return (
    <>
      <div class="j-middle-group-top">
        <div class="j-carrot">
          <img src={carrot} />
        </div>
        <div class="j-circle"></div>
        <div class="j-tilt-circle"></div>
        <div class="j-rectangle"></div>
        <div class="j-front-word-1">SEIZEE</div>
        <div class="j-front-word-2">FEAST!VAL</div>
      </div>
      <div class="j-sides">
        <div class="j-left">
          <ul>
            <li>
              <img src={logo} />
            </li>
            <li>
              <img src={worm} alt="" />
            </li>
            <li>
              <div>所有活動</div>
            </li>
            <li>
              <img src={worm} alt="" />
            </li>
            <li>
              <div>時間表</div>
            </li>
            <li>
              <img src={worm} alt="" />
            </li>
            <li>
              <div>地圖</div>
            </li>
            <li>
              <img src={worm} alt="" />
            </li>
            <li>
              <div>我的票卷</div>
            </li>
            <li>
              <img src={worm} alt="" />
            </li>
          </ul>
        </div>
        <div class="j-right">
          <ul>
            <li>
              <img src={menu} />
            </li>
            <li>
              <div id="right-banner">我的時間表</div>
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

export default Top
