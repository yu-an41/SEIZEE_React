import '../styles/06-event-03-schedule.scss'

import jStar from '../svg/star.svg'
import jHeart from '../svg/heart-none.svg'
import Eventcard from '../components/06-event-comp-box'

function Schedule() {
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
              <Eventcard
                  data={{
                    time: '12:00-13:00',
                    txt1: '全食物利用',
                    txt2: '-水果酵釀-',
                    tags: '#穢土轉生#工作坊',
                  }}
                />
              </div>
              <div className="j-event-schedule-column-2"></div>
              <div className="j-event-schedule-column-3"></div>
              <div className="j-event-schedule-column-4"></div>
              <div className="j-event-schedule-column-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
