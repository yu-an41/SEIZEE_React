import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

import CartInfoContext from '../contexts/CartInfoContext'
import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

import './../styles/WishListBtn.scss'
import WishListIcon from './../../dotown/pizza.png'

function WishListBtn({ onClick }) {
  return (
    <div className="y-wish-list-border">
      <div className="y-wish-list-icon">
        <img src={WishListIcon} alt="remove item icon" />
      </div>
      <p className="y-wish-list" onClick={onClick}>
        加到收藏清單
      </p>
    </div>
  )
}

export default WishListBtn
