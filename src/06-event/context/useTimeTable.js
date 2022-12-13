import React, { useState, useContext, createContext } from 'react'

import axios from 'axios'
const TimeTableContext = createContext(null)

export const TimeTableProvider = ({ children }) => {
  // 1~5
  const [whichHover, setWhichHover] = useState(0)

  const [jlactive, setJlactive] = useState(1)

  const [origins, setOrigins] = useState([])
  const [likes, setLikes] = useState({})
  

  let initTimeTable = [
    { time: '12:00-13:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '13:00-14:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '14:00-15:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '15:00-16:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '16:00-17:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '17:00-18:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '18:00-19:00', sid: 0, name: '', color: '', cate: 0 },
    { time: '19:00-20:00', sid: 0, name: '', color: '', cate: 0 },
  ]
  const [timeTable, setTimeTable] = useState(initTimeTable)
console.log({timeTable});

 
  // if (localStorage.getItem('timetable')) {
  //   initTimeTable = JSON.parse(localStorage.getItem('timetable'))
  // }
  const getEventData = async () => {
    try {
      const res = await axios.post('http://localhost:3004/event/event-test', {
        memberSid: 1,
      })
      const origin_rows = res.data
      setOrigins(origin_rows)
      // if(JSON.parse(localStorage.getItem('timetable')).length > 0) {
      //   const timeTable = JSON.parse(localStorage.getItem('timetable'))
      //   setTimeTable(timeTable)
      // }
      console.log('timetable', timeTable)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getEventLikes = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3004/event/all_event_likes',
        {
          memberSid: 1,
        }
      )
      const likesData = res.data
      const prevLikes = {}
      for (let i of likesData) {
        prevLikes[i.event_sid] = 1
      }
      setLikes(prevLikes)
      console.log('preeeevliikes', { prevLikes })
    } catch (error) {
      console.log(error.message)
    }
  }

  // const [timeTable, setTimeTable] = useState([
  //   { time: '12:00-13:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '13:00-14:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '14:00-15:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '15:00-16:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '16:00-17:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '17:00-18:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '18:00-19:00', sid: 0, name: '', color: '', cate: 0 },
  //   { time: '19:00-20:00', sid: 0, name: '', color: '', cate: 0 },
  // ])

  const removeTimeTable = (index) => {
    const newTimeTable = timeTable.map((v, i) => {
      if (i === index) {
        return { ...v, name: '', sid: '', color: '', cate: '' }
      }
      return { ...v }
    })

    setTimeTable(newTimeTable)
    localStorage.setItem('timetable', JSON.stringify(newTimeTable))
  }

  const handleAddTimeTable = (item) => {
    console.log(item)
    // const newTimeTable =
    //   timeTable && timeTable.length
    //     ? timeTable.map((v) => {
    //         return { ...v }
    //       })
    //     : {}
    // console.log(newTimeTable)
    const foundIndex = timeTable.findIndex((v, i) => {
      return v.time === item.time
    })
    console.log('foundindexxxxx ' + foundIndex)
    const newTimeTable =
      timeTable.length > 0 ?
         timeTable.map((v, i) => {
            if (i === foundIndex)
              return {
                ...v,
                sid: item.sid,
                name: item.name,
                color: item.color,
                cate: item.cate,
              }
            return { ...v }
          }): []
    console.log(newTimeTable)
    setTimeTable(newTimeTable)
    localStorage.setItem('timetable', JSON.stringify(newTimeTable))
  }

  return (
    <TimeTableContext.Provider
      value={{
        timeTable,
        handleAddTimeTable,
        removeTimeTable,
        setWhichHover,
        whichHover,
        setTimeTable,
        getEventData,
        getEventLikes,
        origins,
        setOrigins,
        likes,
        setLikes,
        jlactive,
        setJlactive,
      }}
    >
      {children}
    </TimeTableContext.Provider>
  )
}

export const useTimeTable = () => useContext(TimeTableContext)