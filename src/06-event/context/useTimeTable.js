import React, { useState, useContext, createContext } from 'react'

const TimeTableContext = createContext(null)

export const TimeTableProvider = ({ children }) => {
  // 1~5
  const [whichHover, setWhichHover] = useState(0)

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

  const removeTimeTable = (index) => {
    const newTimeTable = timeTable.map((v, i) => {
      if (i === index) {
        return { ...v, name: '', sid: '', color: '', cate: '' }
      }
      return { ...v }
    })

    setTimeTable(newTimeTable)
  }

  const handleAddTimeTable = (item) => {
    // const newTimeTable = timeTable.map((v) => {
    //   return { ...v }
    // })

    const foundIndex = timeTable.findIndex((v, i) => {
      return v.time === item.time
    })

    console.log('foundindexxxxx ' + foundIndex)

    const newTimeTable = timeTable.map((v, i) => {
      if (i === foundIndex)
        return {
          ...v,
          sid: item.sid,
          name: item.name,
          color: item.color,
          cate: item.cate,
        }
      return { ...v }
    })

    console.log(timeTable)

    setTimeTable(newTimeTable)
  }

  return (
    <TimeTableContext.Provider
      value={{
        timeTable,
        handleAddTimeTable,
        removeTimeTable,
        setWhichHover,
        whichHover,
      }}
    >
      {children}
    </TimeTableContext.Provider>
  )
}

export const useTimeTable = () => useContext(TimeTableContext)
