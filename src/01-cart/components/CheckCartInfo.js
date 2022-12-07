import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

import CartInfoContext from '../contexts/CartInfoContext'

import './../styles/CheckCartInfo.scss'

function CheckCartInfo({ cartItem }) {
  return (
    <div className="y-check-info-border">
      {/* <Link to={`http://localhost:3000/cart/info`}> */}
      <p className="y-check-info">我要結帳</p>
      {/* </Link> */}
    </div>
  )
}

export default CheckCartInfo
