import React, { useEffect, useState } from 'react'
import Top from './06-event-01-top'
import Events from './06-event-02-events'
import '../styles/06-event-00-Render.scss'
import { useTimeTable } from './../context/useTimeTable'
import NavBar from '../../components/NavBar'
import Left from '../components/left/left'
import Timetable from '../components/right/Timetable'

function Eventrender() {
  const components = [Top, Events]
  const [nowPage, setNowPage] = useState(1)
  const NowComponents = components[nowPage - 1]
  const { origins, likes, setLikes, getEventData, getEventLikes } =
    useTimeTable()

  useEffect(() => {
    getEventData()
    getEventLikes()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setNowPage(2)
    }, 2000)
  }, [])

  return (
    <>
    <NavBar/>
    <Left/>
    <Timetable/>
      <NowComponents origins={origins} likes={likes} setLikes={setLikes} />
    </>
  )
}

export default Eventrender
