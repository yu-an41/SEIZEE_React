import React from 'react'
import './Eventcard.scss'
import jHeart from './../../svg/heart-none.svg'
import { useTimeTable } from '../../context/useTimeTable'

function Eventcard({ time, name, nick, color, cat, like }) {
  const { handleAddTimeTable, timeTable } = useTimeTable()

  const names = timeTable.map((v) => v.name)

  return (
    <div
      className="j-card-lines"
      onClick={() => {
        handleAddTimeTable(cat)
      }}
    >
      <div
        class={`j-schedule-card ${names.includes(name) ? 'j-dark-card' : ''} `}
      >
        <div class="j-schedule-card-head" style={{ background: `${color}` }}>
          <div class="j-schedule-card-time" style={{ background: `${color}` }}>
            {time}
          </div>
          <div class="j-schedule-card-heart" style={{ background: `${color}` }}>
            <img src={jHeart} alt="" />
          </div>
        </div>
        <div class="j-schedule-card-name">
          {name} <br />
        </div>
        <div class="j-schedule-card-hashtag" style={{ background: `${color}` }}>
          {nick}
        </div>
      </div>
    </div>
  )
}

export default Eventcard
