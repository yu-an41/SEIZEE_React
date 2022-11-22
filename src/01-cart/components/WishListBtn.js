import React from 'react'
import './../styles/WishListBtn.scss'
import WishListIcon from './../../dotown/pizza.png'

function WishListBtn() {
    const WishList = () => {
        console.log('cart emptied')
      }
    
      return (
        <div className="y-wish-list-border">
          <div className="y-wish-list-icon">
            <img src={WishListIcon} alt="remove item icon" />
          </div>
          <p className="y-wish-list" onClick={WishList}>
            清空購物車
          </p>
        </div>
      )
}

export default WishListBtn
