import '../styles/06-event-04-map.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'
import jMenu from '../svg/menu.svg'

import jCloud1 from '../svg/cloud1.svg'
import jCloud2 from '../svg/cloud2.svg'
import jCloud3 from '../svg/cloud3.svg'
import jCloud4 from '../svg/cloud4.svg'

import jMask from '../img/theater-masks.png'
import jMicrophone from '../img/microphone.png'
import jJuice from '../img/juice.png'
import jStage from '../img/stage.png'
import jCyber from '../img/augmented-reality.png'

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
      <div class="j-event-middle-map">
        <div class="j-cate-banner">
          <div class="j-cate-banner-deco">
            <div>場域地圖</div>
          </div>
        </div>
        <div class="j-map-wrap">
          <div class="j-map-background">
            <div class="j-cloudA">
              <img src={jCloud1} alt="" />
            </div>
            <div class="j-cloudB">
              <img src={jCloud2} alt="" />
            </div>
            <div class="j-cloudC">
              <img src={jCloud3} alt="" />
            </div>
            <div class="j-cloudD">
              <img src={jCloud4} alt="" />
            </div>
            <div class="j-show-pink-wrap">
              <div class="j-show-pink">
                <div>看的場所</div>
                <img src={jMask} alt="" />
              </div>
            </div>
            <div class="j-ted-blue-wrap">
              <div class="j-ted-blue">
                <div>泰迪托克</div>
                <img src={jMicrophone} alt="" />
              </div>
            </div>
            <div class="j-cook-green-wrap">
              <div class="j-cook-green">
                <div>穢土轉生</div>
                <img src={jJuice} alt="" />
              </div>
            </div>
            <div class="j-music-orange-wrap">
              <div class="j-music-orange">
                <div>橘色舞台</div>
                <img src={jStage} alt="" />
              </div>
            </div>
            <div class="j-cyber-purple-wrap">
              <div class="j-cyber-purple">
                <div>合法幻舞</div>
                <img src={jCyber} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
