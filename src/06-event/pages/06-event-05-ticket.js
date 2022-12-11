import '../styles/06-event-05-ticket.scss'
import { useState, useEffect } from 'react'
import { useTimeTable } from '../context/useTimeTable'

import { useSpring, animated } from 'react-spring'
import jBang from '../img/bang.png'

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Ticket() {
  const { getEventData, getEventLikes } = useTimeTable()

  const [props, set] = useSpring({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  })

  const [showElement, setShowElement] = useState(true)
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
    }, 4500)
  }, [])

  useEffect(() => {
    getEventData()
    getEventLikes()
  }, [])

  return (
    <>
      <div className="j-event-middle-ticket">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            <div>我的票卷</div>
          </div>
        </div>
        {showElement ? (
          <div className="j-bang-hide">
            <div className="j-box-top"></div>
            <div className="j-box-right"></div>
            <div className="j-box-bottom"></div>
            <div className="j-box-left"></div>
            <div className="j-bang">
              <img src={jBang} alt="" />
            </div>
          </div>
        ) : (
          <></>
        )}
        <animated.div
          className="j-tickets-wrap"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
      </div>
    </>
  )
}

export default Ticket
