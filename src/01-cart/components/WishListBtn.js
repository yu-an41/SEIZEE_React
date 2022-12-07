import React from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import './../styles/WishListBtn.scss'
import WishListIcon from './../../dotown/pizza.png'

function WishListBtn() {
  const WishList = async () => {
    if (localStorage.getItem('auth')?.mb_sid) {
      console.log('wixh lish btn clicked')
    } else {
      alert('請先註冊/登入')
    }
    console.log('added to wish list')
  }

  return (
    <div className="y-wish-list-border">
      <div className="y-wish-list-icon">
        <img src={WishListIcon} alt="remove item icon" />
      </div>
      <p className="y-wish-list" onClick={WishList}>
        加到收藏清單
      </p>
    </div>
  )
}

export default WishListBtn
