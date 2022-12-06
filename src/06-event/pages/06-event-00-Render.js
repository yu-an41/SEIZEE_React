import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Left from '../components/left/left'
import Timetable from '../components/right/Timetable'

import Top from './06-event-01-top'
import Events from './06-event-02-events'
import Schedule from './06-event-03-schedule'
import Maps from './06-event-04-map'
import Ticket from './06-event-05-ticket'
import '../styles/06-event-00-Render.scss'
import NavBar from './../../components/NavBar'

function Eventrender() {
  const components = [Top, Events, Schedule, Maps, Ticket]
  const [nowPage, setNowPage] = useState(1)
  const NowComponents = components[nowPage - 1]
  const [addRight, setAddRight] = useState()

  const [origins, setOrigins] = useState([])
  useEffect(() => {
    const getEventData = async () => {
      try {
        const res = await axios.get('http://localhost:3004/event/event-test')
        const origin_rows = res.data
        setOrigins(origin_rows)
      } catch (error) {
        console.log(error.message)
      }
    }

    getEventData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setNowPage(2)
    }, 2000)
  }, [])

  return (
    <>
      {/* <div className="j-sides"> */}
      <NavBar />
      <Left setNowPage={setNowPage} />
      <NowComponents origins={origins} />
      <Timetable />
      {/* </div> */}
    </>
  )
}

export default Eventrender
