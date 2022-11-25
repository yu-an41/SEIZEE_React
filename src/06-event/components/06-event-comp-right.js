import '../components/06-event-comp-right.scss'

import menu from '../svg/menu.svg'
import YellowWave from './YellowWave'

function Right() {
  return (
    <>
      <div className="j-right-wrap">
        <div className="j-Rwave">
          <YellowWave />
        </div>
        <div class="j-right">
          <ul>
            <li>
              <img src={menu} alt="" />
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

export default Right
