import '../styles/06-event-01-top.scss'
<<<<<<< HEAD
import Left from '../components/06-event-comp-left'
import Right from '../components/06-event-comp-right'

import carrot from '../svg/carrot.svg'
import tCircle from '../svg/tiltCircle.svg'
import jSeizee from '../svg/SEIZEE.svg'
import jFesti from '../svg/feastival.svg'
import jStar from '../svg/star.svg'
import jOGstar from '../svg/orangeStar.svg'
=======
import logo from '../svg/LOGO.svg'
import worm from '../svg/worm.svg'
import carrot from '../svg/carrot.svg'

import menu from '../svg/menu.svg'
>>>>>>> d4bf3ac978280075df3c3de5811d4709a09a4681

function Top() {
  return (
    <>
<<<<<<< HEAD
      <div class="j-buleBack">
        <div class="j-middle-group-top">
          <div class="j-carrot">
            <img src={carrot} alt="" />
          </div>
          <div class="j-circle"></div>
          <div class="j-tilt-circle">
            <img src={tCircle} alt="" />
          </div>
          <div class="j-rectangle"></div>
          <div class="j-front-word-1">
            <img src={jSeizee} alt="" />
          </div>
          <div class="j-front-word-2">
            <img src={jFesti} alt="" />
          </div>
          <div class="j-star1">
            <img src={jStar} alt="" />
          </div>
          <div class="j-star2">
            <img src={jOGstar} alt="" />
          </div>
          <div class="j-star3">
            <img src={jOGstar} alt="" />
          </div>
        </div>
        <div class="j-sides">
          <Left />
          <Right />
=======
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
>>>>>>> d4bf3ac978280075df3c3de5811d4709a09a4681
        </div>
      </div>
    </>
  )
}

export default Top
