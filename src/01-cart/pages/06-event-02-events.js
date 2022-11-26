import React, { useEffect, useState } from 'react'
import axios from 'axios'

import jblueM from './../../dotown/apple.png'
import jriceM from './../../dotown/hamburger.png'
import jgreenM from './../../dotown/donut.png'
import jorangeM from './../../dotown/pizza.png'
import log from 'eslint-plugin-react/lib/util/log'
import { AstPath } from 'prettier'

function Events() {
  const [origins, setOrigins] = useState([{}])
  const [cateRow, setCateRow] = useState([{}])

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
      // console.log(origin_rows)

      setOrigins(origin_rows)
      getCateData()

      // setEventData(new_row)
    } catch (error) {
      console.log(error.message)
    }
  }
  const getCateData = () => {
    const new_row = origins.filter((e) => {
      return e.cate === cate
    })
    console.log('category: ', new_row)
    setCateRow(new_row)
  }

  // console.log('eventData:' + eventData)
  useEffect(() => {
    getEventData()
  }, [])

  useEffect(() => {
    getCateData()
  }, [cate])
  return (
    <>
      <div className="j-event-middle-events">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            {eventData
              .filter((e, i) => {
                // console.log('page' + i)
                return i === { epage }
              })
              .map((e, i) => {
                const { nick } = e
                // console.log(e.nick)
                return <div>{nick}</div>
              })}
          </div>
        </div>

        <ul className="j-cate-group">
          <li>
            <div
              onClick={(e) => {
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
          {cateRow
            .filter((e) => {
              return e.sid === epage
            })
            .map((e, i) => {
              const { name, content, styles, img, sid, maximum } = e
              // console.log(styles)
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
