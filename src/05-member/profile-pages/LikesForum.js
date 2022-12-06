import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesForum.scss'
import LikeLabels from '../components/LikeLabels'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

function LikesForum() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-f">
              <h2 className="s-l-f-title">我的收藏</h2>
              <div className="s-l-f-card">
                <LikeLabels />
                {/* <div className="s-l-f-card-inside">
                  <div className="s-l-f-data">
                    <div className="s-l-f-line"></div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單日期</h3>
                      <span className="s-l-f-answer">aa</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單編號</h3>
                      <span className="s-l-f-answer">bb</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單金額</h3>
                      <span className="s-l-f-answer">cc</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單狀態</h3>
                      <span className="s-l-f-answer">dd</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單備註</h3>
                      <span className="s-l-f-answer">查詢訂單</span>
                    </div>
                  </div>
                </div> */}
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

export default LikesForum
