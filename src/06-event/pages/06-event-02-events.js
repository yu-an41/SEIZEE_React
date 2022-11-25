import '../styles/06-event-02-events.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import jblueM from '../svg/blueMountain.svg'
import jriceM from '../svg/riceMountain.svg'
import jgreenM from '../svg/greenMountain.svg'
import jorangeM from '../svg/orangeMountain.svg'

function Events() {
  const [click, setClick] = useState(1)
  const [state, setState] = useState('workshop')
  const [jcactive, setJcactive] = useState(1)
  const [jmactive, setJmactive] = useState(1)
  const [eventData, setEventData] = useState([
    {
      sid: '',
      name: '',
      cate: '',
      styles: '',
      img: '',
      content: '',
    },
  ])

  const getEventData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3002/event/event-test/${state}`
      )

      setEventData(res.data.test_rows)
      console.log(res.data.test_rows)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getEventData()
  }, [state])
  return (
    <>
      <div class="j-event-middle-events">
        <div class="j-cate-banner">
          <div class="j-cate-banner-deco">
            <div>看的場所</div>
          </div>
        </div>

        <ul class="j-cate-group">
          <li>
            <div
              onClick={() => {
                setState('workshop')
                setJcactive(1)
              }}
              className={jcactive === 1 ? 'cactive' : ''}
            >
              工作坊
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setState('music')
                setJcactive(2)
              }}
              className={jcactive === 2 ? 'cactive' : ''}
            >
              音樂
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setState('seminar')
                setJcactive(3)
              }}
              className={jcactive === 3 ? 'cactive' : ''}
            >
              講座
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setState('vr')
                setJcactive(4)
              }}
              className={jcactive === 4 ? 'cactive' : ''}
            >
              VR體驗
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setState('theater')
                setJcactive(5)
              }}
              className={jcactive === 5 ? 'cactive' : ''}
            >
              劇場
            </div>
          </li>
        </ul>

        <div class="j-mountains">
          <div class={`j-blue-mountain ${jmactive === 1 ? 'mactive' : ''}`}>
            <img
              src={jblueM}
              alt=""
              onClick={() => {
                setClick(1)
                setJmactive(1)
              }}
            />
          </div>
          <div class={`j-rice-mountain ${jmactive === 2 ? 'mactive' : ''}`}>
            <img
              src={jriceM}
              alt=""
              onClick={() => {
                setClick(2)
                setJmactive(2)
              }}
            />
          </div>
          <div class={`j-green-mountain ${jmactive === 3 ? 'mactive' : ''}`}>
            <img
              src={jgreenM}
              alt=""
              onClick={() => {
                setClick(3)
                setJmactive(3)
              }}
            />
          </div>
          <div class={`j-orange-mountain ${jmactive === 4 ? 'mactive' : ''}`}>
            <img
              src={jorangeM}
              alt=""
              onClick={() => {
                setClick(4)
                setJmactive(4)
              }}
            />
          </div>
        </div>
        <div>
          {eventData
            .filter((e) => {
              return e.sid === click
            })
            .map((e, i) => {
              const { name, content, styles, img, sid, maximum } = e
              console.log(styles)
              return (
                <div
                  class="j-event-card"
                  style={{ background: `${styles}` }}
                  key={i}
                >
                  <span class="j-lego">
                    <div class="j-card-name">{name}</div>
                    <div class="j-card-image">
                      <img src={`/06-event-img/${img}`} alt="" />
                    </div>
                    <div class="j-card-text">{content}</div>
                    <div class="j-card-sold">{maximum}</div>
                  </span>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Events
