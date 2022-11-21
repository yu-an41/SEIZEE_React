import '../components/06-event-comp-left.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'

function Left() {
  return (
    <>
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
    </>
  )
}

export default Left
