import axios from 'axios'
import { useState, useEffect } from 'react'

function NewEvent() {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/home/event-banner'
      )
      // console.log(response.data.shop_c_rows)
      const eventData = response.data.eventRows
      //設定到state裡
      setEvents(eventData)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }

  // didMount時載入資料
  useEffect(() => {
    getEvents()
  }, [])

  // console.log(events)
  return (
    <>
      {events.map((v, i) => {
        return (
          <li className="r-home-event-eventlist-li" key={v.sid}>
            <div className="r-home-event-eventlist-img-wrap">
              <img
                className="r-home-event-eventlist-img"
                src={`/06-event-img/${v.img}`}
              />
            </div>
            <div className="r-home-event-eventlist-info">
              <span className="r-home-event-eventlist-info-cate">{v.nick}</span>
              <p className="r-home-event-eventlist-info-time">{v.time}</p>
              <p className="r-home-event-eventlist-info-name">{v.name}</p>
            </div>
            <div className="r-home-event-event-list-link-wrap">
              <a href="#/" className="r-home-event-eventlist-li-link">
                詳細
              </a>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default NewEvent
