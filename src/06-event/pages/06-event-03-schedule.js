import '../styles/06-event-03-schedule.scss'
import { React, Fragment, useEffect } from 'react'

import jStar from '../svg/star.svg'
import Eventcard from '../components/Eventcard/Eventcard'
import Emptycard from '../components/Emptycard/Emptycard'
import { useTimeTable } from './../context/useTimeTable'

function Schedule() {
  const { origins, likes, getEventData, getEventLikes } = useTimeTable()

  useEffect(() => {
    getEventData()
    getEventLikes()
  }, [])

  return (
    <>
      <div className="j-event-middle-schedule">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            <div>時間表</div>
          </div>
        </div>
        <div>
          <div className="j-event-schedule">
            <div className="j-event-schedule-title">
              <div className="j-stages-card-1">
                <div className="j-stage-deco">
                  <span className="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span className="j-stage-name">
                    穢土
                    <br />
                    轉生
                  </span>
                  <span className="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div className="j-stages-card-2">
                <div className="j-stage-deco">
                  <span className="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span className="j-stage-name">
                    橘色
                    <br />
                    舞台
                  </span>
                  <span className="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div className="j-stages-card-3">
                <div className="j-stage-deco">
                  <span className="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span className="j-stage-name">
                    泰迪
                    <br />
                    托克
                  </span>
                  <span className="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div className="j-stages-card-4">
                <div className="j-stage-deco">
                  <span className="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span className="j-stage-name">
                    合法
                    <br />
                    幻舞
                  </span>
                  <span className="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div className="j-stages-card-5">
                <div className="j-stage-deco">
                  <span className="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span className="j-stage-name">
                    看的
                    <br />
                    場所
                  </span>
                  <span className="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="j-event-schedule-wrap">
              <div className="j-event-schedule-column-1">
                {origins
                  .filter((e) => e.cate === 1)
                  .map((cat, i) => (
                    <Fragment key={cat.sid}>
                      <Eventcard
                        likes={likes}
                        cat={cat}
                        time={cat.time}
                        name={cat.name}
                        nick={cat.nick}
                        color={cat.color}
                      />
                      <Emptycard />
                    </Fragment>
                  ))}
                <div className="j-big-bottom"></div>
              </div>
              <div className="j-event-schedule-column-2">
                {origins
                  .filter((e) => e.cate === 2)
                  .map((cat, i) => (
                    <Fragment key={cat.sid}>
                      <Emptycard />
                      <Eventcard
                        likes={likes}
                        cat={cat}
                        time={cat.time}
                        name={cat.name}
                        nick={cat.nick}
                        color={cat.color}
                      />
                    </Fragment>
                  ))}
                <div className="j-big-bottom"></div>
              </div>
              <div className="j-event-schedule-column-3">
                {origins
                  .filter((e) => e.cate === 3)
                  .map((cat, i) => (
                    <Fragment key={cat.sid}>
                      <Eventcard
                        likes={likes}
                        cat={cat}
                        time={cat.time}
                        name={cat.name}
                        nick={cat.nick}
                        color={cat.color}
                      />
                      <Emptycard />
                    </Fragment>
                  ))}
                <div className="j-big-bottom"></div>
              </div>
              <div className="j-event-schedule-column-4">
                {origins
                  .filter((e) => e.cate === 4)
                  .map((cat, i) => (
                    <Fragment key={cat.sid}>
                      <Emptycard />
                      <Eventcard
                        likes={likes}
                        cat={cat}
                        time={cat.time}
                        name={cat.name}
                        nick={cat.nick}
                        color={cat.color}
                      />
                    </Fragment>
                  ))}
                <div className="j-big-bottom"></div>
              </div>
              <div className="j-event-schedule-column-5">
                {origins
                  .filter((e) => e.cate === 5)
                  .map((cat, i) => (
                    <Fragment key={cat.sid}>
                      <Eventcard
                        likes={likes}
                        cat={cat}
                        time={cat.time}
                        name={cat.name}
                        nick={cat.nick}
                        color={cat.color}
                      />
                      <Emptycard />
                    </Fragment>
                  ))}
                <div className="j-big-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
