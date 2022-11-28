import React, { useState } from 'react'
import './../styles/NavBar.scss'
import Menu from './../../components/Menu'

import LogoBluePink from './../../logo-and-fonts/LOGO-blue-pink.svg'
import CartIcon from './../../dotown/cart.png'
import MemberIcon from './../../dotown/donut.png'

function NavBar() {
  const [emptyCart, setEmptyCart] = useState(false)

  const checkCartempty = () => {
    console.log('Your cart is empty!')
    
  }

  return (
    <div className="y-section-nav">
      <div className="y-logo-wrap">
        <div className="y-svg-wrap">
          <a href="/" alt="homepage of SEIZEE">
            <img src={LogoBluePink} alt="SEIZEE_logo" />
          </a>
        </div>
      </div>
      <div className="y-nav-right">
        <div className="y-icon-round y-cart-icon">
          <a href="/cart" alt="my cart" onClick={checkCartempty}>
            <img src={CartIcon} alt="cart icon" />
          </a>
        </div>
        <div className="y-icon-round y-member-icon">
          <a href="/login" alt="my account">
            <img src={MemberIcon} alt="cart icon" />
          </a>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default NavBar
