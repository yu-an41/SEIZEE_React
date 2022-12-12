import React from 'react'
import './Eventcard.scss'
import jEmptyHeart from './../../svg/heart-none.svg'
import jHeart from './../../svg/full-heart.svg'
import { useTimeTable } from '../../context/useTimeTable'
import { useState, useEffect } from 'react'

function Eventcard({ sid, time, name, nick, color, cat, likes }) {
  const { timeTable, setTimeTable, handleAddTimeTable } = useTimeTable()
  const names =
    timeTable && timeTable.length ? timeTable.map((v) => v.name) : []

  useEffect(() => {
    // console.log(timeTable)
  }, [timeTable])
  // const [likeImg, setLikeImg] = useState(jEmptyHeart)
  // console.log('likes!!!!', likes)
  // console.log('origins!!!!', origins)
  // useEffect(() => {
  //   let event_sid = 0
  //   // if (cateRow && cateRow[epage - 1] && cateRow[epage - 1].sid)
  //   //   event_sid = cateRow[epage - 1].sid
  //   // setEventSid(event_sid)
  //   if (likes[event_sid]) {
  //     setLikeImg(jHeart)
  //   } else {
  //     setLikeImg(jEmptyHeart)
  //   }
  //   // setLikeImg
  //   console.log({ event_sid })
  // }, [likes])
  return (
    <div
      className="j-card-lines"
      onClick={() => {
        // console.log('event name: ', name, 'event sid: ', sid, 'cat: ', cat)
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
            <img src={likes && likes[cat.sid] ? jHeart : jEmptyHeart} alt="" />
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
