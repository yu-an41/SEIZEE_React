import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesProduct.scss'
import LikeLabels from '../components/LikeLabels'

function LikesProduct() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-p">
              <h2 className="s-l-p-title">我的收藏</h2>
              <div className="s-l-p-card">
                <LikeLabels />
                <div className="s-l-p-card-inside">
                  <div className="s-l-p-data">
                    <div className="s-l-p-line"></div>
                    <div className="s-l-p-items">
                      <h3 className="s-l-p-question">商品照片</h3>
                      <span className="s-l-p-answer">aa</span>
                    </div>
                    <div className="s-l-p-items">
                      <h3 className="s-l-p-question">商品名稱</h3>
                      <span className="s-l-p-answer">bb</span>
                    </div>
                    <div className="s-l-p-items">
                      <h3 className="s-l-p-question">原價</h3>
                      <span className="s-l-p-answer">cc</span>
                    </div>
                    <div className="s-l-p-items">
                      <h3 className="s-l-p-question">優惠價</h3>
                      <span className="s-l-p-answer">dd</span>
                    </div>
                    <div className="s-l-p-items">
                      <h3 className="s-l-p-question">收藏</h3>
                      <span className="s-l-p-answer">查詢訂單</span>
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

export default LikesProduct
