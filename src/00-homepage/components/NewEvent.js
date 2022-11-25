import React from 'react'
import './style/NewEvent.scss'

function NewEvent() {
  return (
    <>
      <div class="a-eventBanner">
        <div className="a-eventWrapper">
          <h3 className="a-newEvent">最新活動</h3>
          <div class="a-eventText">
            <h1 className="a-whatFun">What's New Fun</h1>
          </div>
          <div className="a-eventContent">
            <div className="a-calendarWrapper">
              <div class="a-imgWrapper">
                <img src="./svg/calendar.svg" alt="" />
              </div>
              <div class="a-dateWrapper">
                <h2 className="a-month">Dec.</h2>
                <h2 className="a-day">25</h2>
              </div>
            </div>
            <div class="a-eventContentWrapper">
              <div className="a-event">
                <div className="a-eventDayWrapper">
                  <h4>Dec.</h4>
                  <h4>25</h4>
                </div>
                <div class="a-eventImgWrapper">
                  <img src="../../04-product/event.svg" alt="" />
                </div>
                <div className="a-eventName">
                  <h4>劇場</h4>
                  <h4>快對醜蔬果出手</h4>
                </div>
                <div className="a-eventButton">
                  <h4>詳細</h4>
                </div>
              </div>
              <div className="a-event">
                <div className="a-eventDayWrapper">
                  <h4>Dec.</h4>
                  <h4>25</h4>
                </div>
                <div class="a-eventImgWrapper">
                  <img src="../../04-product/calendar.svg" alt=""/>
                </div>
                <div className="a-eventName">
                  <h4>劇場</h4>
                  <h4>快對醜蔬果出手</h4>
                </div>
                <div className="a-eventButton">
                  <h4>詳細</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewEvent
