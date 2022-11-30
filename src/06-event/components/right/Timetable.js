import './Timetable.scss'

import menu from './../../svg/menu.svg'
import YellowWave from '../yellow/YellowWave'
import Eventcard from '../Eventcard/Eventcard'
import { useTimeTable } from '../../context/useTimeTable'

function Timetable() {
  const { timeTable } = useTimeTable()
  return (
    <>
      <div className="j-right-wrap">
        <div className="j-Rwave">
          <YellowWave />
        </div>
        <div class="j-right">
          <div className="j-menu">
            <img src={menu} alt="" />
          </div>
          <div className="j-table-right">
            <div className="j-banner">我的時間表</div>
            <div className="j-cardG">
              {timeTable.map((v, i) => {
                return (
                  <div
                    key={`${i + v.time}`}
                    className="j-tableself"
                    style={{ background: `${v.color}` }}
                  >
                    <div className="j-card">
                      <div
                        className="j-cardtime"
                        style={{ background: `${v.color}` }}
                      >
                        {v.time}
                      </div>
                      <div
                        className="j-cardname"
                        // style={{ background: `${v.color}` }}
                      >
                        {v.name}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* <ul>
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
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default Timetable
