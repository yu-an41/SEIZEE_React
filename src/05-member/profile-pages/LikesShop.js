import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesShop.scss'
import LikeLabels from '../components/LikeLabels'
import img from '../../00-homepage/images/01cover.jpg'

function LikesShop() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-s">
              <h2 className="s-l-s-title">我的收藏</h2>
              <div className="s-l-s-card">
                <LikeLabels />
                <div className="s-l-s-card-inside">
                  {/* <div className="s-l-s-data">
                    <div className="s-l-s-line"></div>
                    <div className="s-l-s-items">
                      <h3 className="s-l-s-question">訂單日期</h3>
                      <span className="s-l-s-answer">shop</span>
                    </div>
                    <div className="s-l-s-items">
                      <h3 className="s-l-s-question">訂單編號</h3>
                      <span className="s-l-s-answer">bb</span>
                    </div>
                    <div className="s-l-s-items">
                      <h3 className="s-l-s-question">訂單金額</h3>
                      <span className="s-l-s-answer">cc</span>
                    </div>
                    <div className="s-l-s-items">
                      <h3 className="s-l-s-question">訂單狀態</h3>
                      <span className="s-l-s-answer">dd</span>
                    </div>
                    <div className="s-l-s-items">
                      <h3 className="s-l-s-question">訂單備註</h3>
                      <span className="s-l-s-answer">查詢訂單</span>
                    </div>
                  </div> */}
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                  <div className="r-love-card-container">
                    <div className="r-love-card-title">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="r-love-card-cover-middle">
                      <div className="r-love-card-cover-wrap">
                        <img className="r-love-card-cover" src={img} />
                      </div>
                    </div>
                    <div className="r-love-card-footer">
                      <p className="r-love-card-name">惜食店鋪</p>
                      <p className="r-love-card-info">12:00-21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-footer"></div>
      </div>
    </>
  )
}

export default LikesShop
