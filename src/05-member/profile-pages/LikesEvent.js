import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesEvent.scss'
import LikeLabels from '../components/LikeLabels'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

function LikesEvent() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-e">
              <h2 className="s-l-e-title">我的收藏</h2>
              <div className="s-l-e-card">
                <LikeLabels />
                <div className="s-l-e-card-inside">
                  <div className="s-l-e-data">
                    <div className="s-l-e-line"></div>
                    <div className="s-l-e-items">
                      <h3 className="s-l-e-question">訂單日期</h3>
                      <span className="s-l-e-answer">aa</span>
                    </div>
                    <div className="s-l-e-items">
                      <h3 className="s-l-e-question">訂單編號</h3>
                      <span className="s-l-e-answer">bb</span>
                    </div>
                    <div className="s-l-e-items">
                      <h3 className="s-l-e-question">訂單金額</h3>
                      <span className="s-l-e-answer">cc</span>
                    </div>
                    <div className="s-l-e-items">
                      <h3 className="s-l-e-question">訂單狀態</h3>
                      <span className="s-l-e-answer">dd</span>
                    </div>
                    <div className="s-l-e-items">
                      <h3 className="s-l-e-question">訂單備註</h3>
                      <span className="s-l-e-answer">查詢訂單</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LikesEvent
