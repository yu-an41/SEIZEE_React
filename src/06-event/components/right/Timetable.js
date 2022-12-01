import './Timetable.scss'

import carrot from './../../svg/carrot.svg'
import menu from './../../svg/menu.svg'
import YellowWave from '../yellow/YellowWave'
import { useTimeTable } from '../../context/useTimeTable'
import jDelete from './../../svg/delete.svg'
function Timetable() {
  const { timeTable } = useTimeTable()
  return (
    <>
      <div className="j-right-wrap">
        <div className="j-Rwave">
          <YellowWave />
        </div>
        <div class="j-right">
          <div className="j-hidebox">
            <div className="j-menu">
              <img src={menu} alt="" />
            </div>
            <div className="j-side-carrot">
              <img src={carrot} alt="" />
            </div>
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
                        className="j-cardTop"
                        style={{ background: `${v.color}` }}
                      >
                        <div className="j-cardtime">{v.time}</div>
                        <img src={jDelete} alt="" />
                      </div>
                      <div
                        className="j-cardname"
                        // style={{ background: `${v.color}` }}
                      >
                        {v.name}
                      </div>
                      <div className="j-cardbottom"></div>
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
