import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/Likes.scss'

function Likes() {
  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <UserProfileTmp />
          <div className="main-content">
            <div className="like">like success</div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default Likes
