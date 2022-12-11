import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import { imgReactUrl, imgNodeUrl } from './../../my-config'

import CartInfoContext from '../contexts/CartInfoContext'
import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

import './../styles/WishListBtn.scss'
import heartClick from './../../logo-and-fonts/pixel-heartClick.svg'
import heartNormal from './../../logo-and-fonts/pixel-heartNormal.svg'

function WishListBtn({ onClick, wishList }) {
  // const [wishList, setWishList] = useState(false)
  return (
    <div className="y-wish-list-border">
      <div className="y-wish-list-icon">
        <img src={wishList ? heartClick : heartNormal} alt="wish list icon" />
      </div>
      <p className="y-wish-list" onClick={onClick}>
        加入收藏
      </p>
    </div>
  )
}

export default WishListBtn
