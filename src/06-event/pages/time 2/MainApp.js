import React from 'react'
import { TimeTableProvider } from './useTimeTable'
import Demo from './Demo'
import TimeTable from './TimeTable'

function MainApp(props) {
  return (
    <TimeTableProvider>
      <Demo />
      <TimeTable />
    </TimeTableProvider>
  )
}

export default MainApp
