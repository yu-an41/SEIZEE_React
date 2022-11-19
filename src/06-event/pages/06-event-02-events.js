import '../styles/06-event-02-events.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'
import jMenu from '../svg/menu.svg'

import jblueM from '../svg/blueMountain.svg'
import jriceM from '../svg/riceMountain.svg'
import jgreenM from '../svg/greenMountain.svg'
import jorangeM from '../svg/orangeMountain.svg'

import jcardImage from '../img/dontTouch-02.jpeg'

function Events() {
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
      <div class="j-event-middle-events">
        <div class="j-cate-banner">
          <div class="j-cate-banner-deco">
            <div>看的場所</div>
          </div>
        </div>

        <ul class="j-cate-group">
          <li>
            <a href="#">劇場</a>
          </li>
          <li>
            <a href="#">音樂</a>
          </li>
          <li>
            <a href="#">VR體驗</a>
          </li>
          <li>
            <a href="#">工作坊</a>
          </li>
          <li>
            <a href="#">講座</a>
          </li>
        </ul>

        <div class="j-mountains">
          <div class="j-blue-mountain">
            <img src={jblueM} alt="" />
          </div>
          <div class="j-rice-mountain">
            <img src={jriceM} alt="" />
          </div>
          <div class="j-green-mountain">
            <img src={jgreenM} alt="" />
          </div>
          <div class="j-orange-mountain">
            <img src={jorangeM} alt="" />
          </div>
        </div>
        <div>
          <div class="j-event-card">
            <span class="j-lego">
              <div class="j-card-name">快對醜蔬果出手</div>
              <div class="j-card-image">
                <img src={jcardImage} alt="" />
              </div>
              <div class="j-card-text">
                剛升上高中一年級的淺草綠，是個強調「[設定]即生命」的動畫迷。雖然在素描本上描繪了各種各樣的創想，卻因獨自行動就無法下決心的個性，而遲遲未能開始製作動畫。同時，身為人氣讀者模特兒，被父母期待成為演員的同級生水崎燕，其實志願成為動畫師。擁有製片人氣質的金森沙耶加，很快注意到了兩位同級生的才能。三人為了展現腦內的「最強世界」，共同創立了新[社團]「映像研究同好會」，簡稱映像研。為了讓映像研順利成立，故事由此展開……。
              </div>
              <div class="j-card-sold">即將完售</div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
