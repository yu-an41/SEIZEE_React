import '../styles/06-event-05-ticket.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'
import jMenu from '../svg/menu.svg'

import jBang from '../img/bang.png'
import jTicket from '../img/ticket.png'

function Ticket() {
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
      <div class="j-event-middle-ticket">
        <div class="j-cate-banner">
          <div class="j-cate-banner-deco">
            <div>我的票卷</div>
          </div>
        </div>
        <div class="j-bang-hide">
          <div class="j-bang">
            <img src={jBang} alt="" />
          </div>

          <img class="j-ticket" src={jTicket} alt="" />
        </div>
      </div>
    </>
  )
}

export default Ticket
