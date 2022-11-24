import React from 'react'
import './../styles/NavBar.scss'
import Menu from './../components/Menu'

import LogoBluePink from './../logo-and-fonts/LOGO-blue-pink.svg'
import CartIcon from './../dotown/cart.png'
import MemberIcon from './../dotown/donut.png'

function NavBar() {
  return (
    <div className="y-section-nav">
      <div className="y-logo-wrap">
        <div className="y-svg-wrap">
          <img src={LogoBluePink} alt="SEIZEE_logo" />
        </div>
      </div>
      <div className="y-nav-right">
        <div className="y-icon-round y-cart-icon">
          <img src={CartIcon} alt="cart icon" />
        </div>
        <div className="y-icon-round y-member-icon">
          <img src={MemberIcon} alt="cart icon" />
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default NavBar
