import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/Likes.scss'

function Likes() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="like">like success</div>
          </div>
        </div>
        <div className="s-footer"></div>
      </div>
    </>
  )
}

export default Likes
