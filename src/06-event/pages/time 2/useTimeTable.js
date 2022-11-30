import React, { useState, useContext, createContext } from 'react'

const TimeTableContext = createContext(null)

export const TimeTableProvider = ({ children }) => {
  //const [auth, setAuth] = useState(false)

  const [timeTable, setTimeTable] = useState([
    { time: '12', sid: 0, name: '' },
    { time: '13', sid: 0, name: '' },
    { time: '14', sid: 0, name: '' },
    { time: '15', sid: 0, name: '' },
  ])

  const handleAddTimeTable = (item) => {
    // const newTimeTable = timeTable.map((v) => {
    //   return { ...v }
    // })

    const foundIndex = timeTable.findIndex((v, i) => {
      return v.time === item.time
    })

    console.log(foundIndex)

    const newTimeTable = timeTable.map((v, i) => {
      if (i === foundIndex) return { ...v, sid: item.sid, name: item.name }
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
