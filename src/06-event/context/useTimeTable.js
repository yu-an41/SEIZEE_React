import React, { useState, useContext, createContext } from 'react'

const TimeTableContext = createContext(null)

export const TimeTableProvider = ({ children }) => {
  //const [auth, setAuth] = useState(false)

  const [timeTable, setTimeTable] = useState([
    { time: '12:00-13:00', sid: 0, name: '', color: '' },
    { time: '13:00-14:00', sid: 0, name: '', color: '' },
    { time: '14:00-15:00', sid: 0, name: '', color: '' },
    { time: '15:00-16:00', sid: 0, name: '', color: '' },
    { time: '16:00-17:00', sid: 0, name: '', color: '' },
    { time: '17:00-18:00', sid: 0, name: '', color: '' },
    { time: '18:00-19:00', sid: 0, name: '', color: '' },
    { time: '19:00-20:00', sid: 0, name: '', color: '' },
  ])

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
        return { ...v, sid: item.sid, name: item.name, color: item.color }
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
      }}
    >
      {children}
    </TimeTableContext.Provider>
  )
}

export const useTimeTable = () => useContext(TimeTableContext)
