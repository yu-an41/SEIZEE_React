import React from 'react'
import '../components/06-event-comp-box.scss'
import jHeart from '../svg/heart-none.svg'

function Eventcard({ data }) {
  const { time, txt1, txt2, tags } = data
  return (
    <div class="j-schedule-card">
      <div class="j-schedule-card-head">
        <div class="j-schedule-card-time">{time}</div>
        <div class="j-schedule-card-heart">
          <img src={jHeart} alt="" />
        </div>
      </div>
      <div class="j-schedule-card-name">
        {txt1} <br />
        {txt2}
      </div>
      <div class="j-schedule-card-hashtag">{tags}</div>
    </div>
  )
}

export default Eventcard
