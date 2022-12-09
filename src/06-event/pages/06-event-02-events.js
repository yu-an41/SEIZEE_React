import '../styles/06-event-02-events.scss'
import React, { useEffect, useState } from 'react'

import jblueM from '../svg/blueMountain.svg'
import jriceM from '../svg/riceMountain.svg'
import jgreenM from '../svg/greenMountain.svg'
import jorangeM from '../svg/orangeMountain.svg'
import log from 'eslint-plugin-react/lib/util/log'
import jEmptyHeart from '../svg/heart-none.svg'
import jHeart from '../svg/full-heart.svg'
import { useTimeTable } from './../context/useTimeTable'
import axios from 'axios'

function CategoryTab(props) {
  const { text, activeCat, catIndex, handleSwitchCat, setEpage, setJmactive } =
    props

  return (
    <li>
      <div
        onClick={() => {
          handleSwitchCat(catIndex)
          // setEpage(1)
          setJmactive(1)
        }}
        className={activeCat === catIndex ? 'cactive' : ''}
      >
        {text}
      </div>
    </li>
  )
}

function Events({ origins, likes, setLikes }) {
  const [cate, setCate] = useState(1)
  const [epage, setEpage] = useState(1)
  const [cateRow, setCateRow] = useState([])

  const [jmactive, setJmactive] = useState(1)

  const [registeredNum, setRegisteredNum] = useState(0)
  const { timeTable, removeTimeTable, setWhichHover } = useTimeTable()
  const [likeImg, setLikeImg] = useState(jEmptyHeart)
  const [eventSid, setEventSid] = useState(0)

  const onAddLike = async (cateRow) => {
    console.log('cateRow', cateRow)
    try {
      const res = await axios.post(`http://localhost:3004/event/event_toggle`, {
        memberSid: 1,
        eventSid: cateRow.sid,
      })
      if (res.data.msg === 'insert') {
        // console.log('likes!!!!', likes)
        const ori = { ...likes, [eventSid]: 1 }
        setLikes(ori)
        setLikeImg(jHeart)
      } else {
        const ori = { ...likes }
        delete ori[eventSid]
        setLikes(ori)
        setLikeImg(jEmptyHeart)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const getRegeistered = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3004/event/event-registered/$1`
      )
      console.log(res)
      setRegisteredNum(res)
    } catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    const new_row = origins.filter((e) => {
      return e.cate === cate
    })
    setCateRow(new_row)
  }, [cate, origins, timeTable])

  useEffect(() => {
    let event_sid = 0
    if (cateRow && cateRow[epage - 1] && cateRow[epage - 1].sid)
      event_sid = cateRow[epage - 1].sid
    setEventSid(event_sid)

    if (likes[event_sid]) {
      setLikeImg(jHeart)
    } else {
      setLikeImg(jEmptyHeart)
    }
    // setLikeImg
    console.log({ event_sid })
  }, [likes, cateRow, epage])

  useEffect(() => {
    // getRegeistered()
  }, [])

  useEffect(() => {
    cateRow[epage - 1]?.like ? setLikeImg(jHeart) : setLikeImg(jEmptyHeart)
  }, [cateRow])

  const handleSwitchCat = (catIndex) => {
    setCate(catIndex)
  }

  const categories = ['工作坊', '音樂', '講座', 'VR體驗', '劇場']
  const mountainColor = ['blue', 'rice', 'green', 'orange']

  return (
    <>
      <div className="j-event-middle-events">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            <div>{cateRow[epage - 1]?.nick}</div>
          </div>
        </div>

        <ul className="j-cate-group">
          {categories.map((cat, i) => (
            <CategoryTab
              key={i}
              text={cat}
              activeCat={cate}
              catIndex={i + 1}
              handleSwitchCat={handleSwitchCat}
            />
          ))}
        </ul>

        <div className="j-mountains">
          <div className={`j-blue-mountain ${jmactive === 1 ? 'mactive' : ''}`}>
            <div
              className="j-mWord1"
              onClick={() => {
                setEpage(1)
                setJmactive(1)
              }}
            >
              壹
            </div>
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
            <div
              className="j-mWord2"
              onClick={() => {
                setEpage(2)
                setJmactive(2)
              }}
            >
              貳
            </div>
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
            <div
              className="j-mWord3"
              onClick={() => {
                setEpage(3)
                setJmactive(3)
              }}
            >
              參
            </div>
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
            <div
              className="j-mWord4"
              onClick={() => {
                setEpage(4)
                setJmactive(4)
              }}
            >
              肆
            </div>
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

        {origins.length > 0 && (
          <div>
            {cateRow.length > 0 && (
              <div
                className="j-event-card"
                style={{
                  background: `${cateRow[epage - 1].styles}`,
                  transition: '5s',
                }}
                key={cateRow[epage - 1].name}
              >
                <span className="j-lego">
                  <div className="j-card-name">
                    {cateRow[epage - 1].name}
                    <img
                      onClick={() => onAddLike(cateRow[epage - 1])}
                      src={likeImg}
                      alt=""
                    />
                  </div>
                  <div className="j-card-image">
                    <img
                      src={`/06-event-img/${cateRow[epage - 1].img}`}
                      alt=""
                    />
                  </div>
                  <div className="j-card-text">
                    {cateRow[epage - 1].content}
                  </div>
                  <div className="j-card-sold">
                    {/* {registeredNum} */}
                    {/* {cateRow[epage - 1].maximum} */}
                    {/* <img src={jHeart} alt="" /> */}
                    熱烈報名中
                  </div>
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Events
