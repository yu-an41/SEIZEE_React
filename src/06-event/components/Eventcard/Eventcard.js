import React from 'react'
import './Eventcard.scss'
import jEmptyHeart from './../../svg/heart-none.svg'
import jHeart from './../../svg/full-heart.svg'
import { useTimeTable } from '../../context/useTimeTable'
import { useState, useEffect } from 'react'

function Eventcard({ time, name, nick, color, cat, likes }) {
  const { handleAddTimeTable } = useTimeTable()
  const [timeTable, setTimeTable] = useState([
    { time: '12:00-13:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '13:00-14:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '14:00-15:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '15:00-16:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '16:00-17:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '17:00-18:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '18:00-19:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '19:00-20:00', sid: 0, name: '', color: '', cate: 0 },
  ])
  const names = timeTable.map((v) => v.name)

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
        handleAddTimeTable(cat)
        // console.log(cat)
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
