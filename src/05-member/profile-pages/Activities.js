import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

function Activities() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l">
              <h2 className="s-l-title">活動查詢</h2>
              <div className="s-l-card">
                <div className="s-l-data">
                  <div className="s-l-line"></div>
                  <div className="s-l-items">
                    <h3 className="s-l-question">訂單日期</h3>
                    <span className="s-l-answer" id="mboDate">
                      aa
                    </span>
                  </div>
                  <div className="s-l-items">
                    <h3 className="s-l-question">訂單編號</h3>
                    <span className="s-l-answer" id="mboNum">
                      bb
                    </span>
                  </div>
                  <div className="s-l-items">
                    <h3 className="s-l-question">訂單金額</h3>
                    <span className="s-l-answer" id="mboTotalPrice">
                      cc
                    </span>
                  </div>
                  <div className="s-l-items">
                    <h3 className="s-l-question">訂單狀態</h3>
                    <span className="s-l-answer" id="mboStatus">
                      dd
                    </span>
                  </div>
                  <div className="s-l-items">
                    <h3 className="s-l-question">訂單備註</h3>
                    <span className="s-l-answer">查詢訂單</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Activities
