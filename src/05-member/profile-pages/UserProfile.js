import '.././style/UserProfile.scss'

import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'

function UserProfile() {
  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <UserProfileTmp />
          <div className="main-content profile">
            <div className="test">success</div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default UserProfile
