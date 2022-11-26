import '../styles/06-event-02-events.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import jblueM from '../svg/blueMountain.svg'
import jriceM from '../svg/riceMountain.svg'
import jgreenM from '../svg/greenMountain.svg'
import jorangeM from '../svg/orangeMountain.svg'
import log from 'eslint-plugin-react/lib/util/log'

function Events() {
  const [origins, setOrigins] = useState([{}])
  // {
  //   sid: 1,
  //   name: '',
  //   nick: '穢土轉生',
  //   cate: 1,
  //   style: 1,
  //   img: 'event-001.jpeg',
  //   time: '12:00-13:00',
  //   content:
  //     '陽光灑進和室窗邊，一罐罐五顏六色的玻璃瓶裡，裝著發酵中的水果酵釀，這裡是SEIZEE的全食物酵釀實驗場。「農友辛苦耕耘友善種植的水果，更要好好珍惜，果肉吃完了，果皮、種籽都能做成酵釀，果皮還能2次利用變蜜餞，一點都不浪費！」在SEIZEE眼裡每樣東西都是寶。',
  //   maximum: 0,
  //   registered: null,
  //   styles: '#91D3F5',
  // },

  const [cate, setCate] = useState(1)
  const [epage, setEpage] = useState(1)
  const [jcactive, setJcactive] = useState(1)
  const [jmactive, setJmactive] = useState(1)
  const [eventData, setEventData] = useState([
    {
      sid: '',
      name: '',
      nick: '',
      cate: '',
      styles: '',
      img: '',
      content: '',
    },
  ])

  const getEventData = async () => {
    try {
      const res = await axios.get('http://localhost:3002/event/event-test')

      const origin_rows = res.data
      console.log(origin_rows)
      setOrigins(origin_rows)

      // setEventData(new_row)
    } catch (error) {
      console.log(error.message)
    }
  }
  const new_row = origins.filter((e) => {
    return e.cate === cate
    // setEventData(new_row)????????????????aaaaaa
  })
  console.log('category', new_row)
  // setEventData(new_row)???????????????????bbbbbbbb

  console.log('eventData:' + eventData)
  useEffect(() => {
    getEventData()
  }, [])
  return (
    <>
      <div className="j-event-middle-events">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            {eventData
              .filter((e, i) => {
                console.log('page' + i)
                return i === { epage }
              })
              .map((e, i) => {
                const { nick } = e
                console.log(e.nick)
                return <div>{nick}</div>
              })}
          </div>
        </div>

        <ul className="j-cate-group">
          <li>
            <div
              onClick={() => {
                setCate(1)
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
                setCate(2)
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
                setCate(3)
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
                setCate(4)
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
                setCate(5)
                setJcactive(5)
              }}
              className={jcactive === 5 ? 'cactive' : ''}
            >
              劇場
            </div>
          </li>
        </ul>

        <div className="j-mountains">
          <div className={`j-blue-mountain ${jmactive === 1 ? 'mactive' : ''}`}>
            <img
              src={jblueM}
              alt=""
              onClick={() => {
                setEpage(1)
                setJmactive(1)
              }}
            />
          </div>
          <div className={`j-rice-mountain ${jmactive === 2 ? 'mactive' : ''}`}>
            <img
              src={jriceM}
              alt=""
              onClick={() => {
                setEpage(2)
                setJmactive(2)
              }}
            />
          </div>
          <div
            className={`j-green-mountain ${jmactive === 3 ? 'mactive' : ''}`}
          >
            <img
              src={jgreenM}
              alt=""
              onClick={() => {
                setEpage(3)
                setJmactive(3)
              }}
            />
          </div>
          <div
            className={`j-orange-mountain ${jmactive === 4 ? 'mactive' : ''}`}
          >
            <img
              src={jorangeM}
              alt=""
              onClick={() => {
                setEpage(4)
                setJmactive(4)
              }}
            />
          </div>
        </div>
        <div>
          {new_row
            .filter((e) => {
              return e.sid === epage
            })
            .map((e, i) => {
              const { name, content, styles, img, sid, maximum } = e
              console.log(styles)
              return (
                <div
                  className="j-event-card"
                  style={{ background: `${styles}` }}
                  key={i}
                >
                  <span className="j-lego">
                    <div className="j-card-name">{name}</div>
                    <div className="j-card-image">
                      <img src={`/06-event-img/${img}`} alt="" />
                    </div>
                    <div className="j-card-text">{content}</div>
                    <div className="j-card-sold">{maximum}</div>
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
