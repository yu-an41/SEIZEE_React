import React, { useContext, useState } from 'react'
import './../styles/NavBar.scss'
import Menu from './Menu'

import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import { PROFILE, imgUrl, imgServerUrl } from '../my-config'

import LogoBluePink from './../logo-and-fonts/LOGO-blue-pink.svg'
import CartIcon from './../dotown/cart.png'
import MemberIcon from './../logo-and-fonts/default.png'

function NavBar() {
  const [emptyCart, setEmptyCart] = useState(false)

  const checkCartempty = () => {
    console.log('Your cart is empty!')
  }

  const { myAuth } = useContext(AuthContext)
  // console.log('photo:', myAuth.mb_photo)
  // console.log('myAuthNav:', myAuth)
  // console.log('photo:', myAuth.mb_sid)

  const [profileImg, setProfileImg] = useState('')

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

        {myAuth.authorised ? (
          <Link className="y-icon-round y-member-icon" to={'/profile/'}>
            <img
              src={`${imgServerUrl}/uploads/05-member/${myAuth.mb_photo}`}
              alt="member icon"
            />
          </Link>
        ) : (
          <Link className="y-icon-round y-member-icon" to={'/login'}>
            <img src={MemberIcon} alt="member icon" />
          </Link>
        )}
        <Menu />
      </div>
    </div>
  )
}

export default NavBar
