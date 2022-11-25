import '.././style/profile-pages/Orders.scss'

import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'

function Orders() {
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-ui">
              <h2 className="s-ui-title">資料修改</h2>
              <div className="s-ui-card"></div>
            </div>
          </div>
        </div>
        <div className="s-footer"></div>
      </div>
    </>
  )
}

export default Orders
