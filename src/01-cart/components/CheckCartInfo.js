import React, { useState, useContext } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

import CartInfoContext from '../contexts/CartInfoContext'

import './../styles/CheckCartInfo.scss'

function CheckCartInfo({ cartItem }) {
  return (
    <div className="y-check-info-border">
      <a href="http://localhost:3000/cart/info">
        <p className="y-check-info"></p>確認資訊
      </a>
    </div>
  )
}

export default CheckCartInfo
