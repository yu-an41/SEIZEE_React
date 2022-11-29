import React, { useState } from 'react'
import Left from '../components/06-event-comp-left'
import Right from '../components/06-event-comp-right'

import Top from './06-event-01-top'
import Events from './06-event-02-events'
import Schedule from './06-event-03-schedule'
import Maps from './06-event-04-map'
import Ticket from './06-event-05-ticket'
import '../styles/06-event-00-Render.scss'
function Eventrender() {
  const components = [Events, Schedule, Maps, Ticket]
  const [nowPage, setNowPage] = useState(1)
  const NowComponents = components[nowPage - 1]
  return (
    <>
      <div className="j-sides">
        <Left setNowPage={setNowPage} />
        <NowComponents />
        <Right />
      </div>
    </>
  )
}

export default Eventrender
