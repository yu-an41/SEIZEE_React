import '.././style/UserProfile.scss'

import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'

function UserProfile() {
  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <UserProfileTmp />
          <div className="main-content">
            <div className="s-up">
              <h2 className="s-up-title">我的帳號</h2>
              <div class="s-up-card">
                <div class="s-up-imgBx">
                  <img class="s-up-img" src="/05-member/ghost.png" alt="" />
                </div>
                <div class="s-up-content">
                  <h2 class="s-up-username">Alina Smith</h2>
                  <div class="s-up-details">
                    <div class="s-up-data">
                      <div className="s-up-items">
                        <h3 class="s-up-question">使用者名稱</h3>
                        <span class="s-up-answer">Sharon Yu</span>
                      </div>
                      <div className="s-up-items">
                        <h3 class="s-up-question">電子郵件</h3>
                        <span class="s-up-answer">yu5286pp@gmail.com</span>
                      </div>
                      <div className="s-up-items">
                        <h3 class="s-up-question">電話號碼</h3>
                        <span class="s-up-answer">0917761328</span>
                      </div>
                      <div className="s-up-items">
                        <h3 class="s-up-question">成為SEIZEE會員時間</h3>
                        <span class="s-up-answer">2022/10/30</span>
                      </div>
                    </div>
                    <div class="s-up-actionBtns">
                      <button class="s-up-actionBtn">編輯個人資料</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="s-up-line" />
              <h2 className="s-up-deleteTitle">移除帳號</h2>
              <button class="s-up-deleteAccount">刪除帳號</button>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default UserProfile
