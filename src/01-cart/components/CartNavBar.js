import React, { useContext, useEffect, useState } from 'react'
import './../styles/CartNavBar.scss'
import Menu from '../../components/Menu'

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import { PROFILE, imgUrl, imgServerUrl } from './../../my-config'

import ModalNotification from '../../components/ModalNotification'
import CartInfoContext from '../contexts/CartInfoContext'

import LogoBluePink from './../../logo-and-fonts/LOGO-blue-pink.svg'
import CartIcon from './../../dotown/cart.png'
import MemberIcon from './../../logo-and-fonts/default.png'

function CartNavBar() {
  const [isOpen1, setIsOpen1] = useState(false)

  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  const closeModalNotification = () => {
    setIsOpen1(false)
  }

  // cart
  const {
    cartItem,
    setCartItem,
    handleAddCart,
    updateItemQty,
    checkCartEmpty,
    emptyCart,
    setEmptyCart,
  } = useContext(CartInfoContext)

  const { myAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  // console.log('photo:', myAuth.mb_photo)
  // console.log('myAuthNav:', myAuth)
  // console.log('photo:', myAuth.mb_sid)

  const [profileImg, setProfileImg] = useState('')

  // let items = +cartItem.totalAmount || 0
  // if (checkCartEmpty || !localStorage.getItem('cartItem')) {
  //   items = 0
  // } else if (+items > 99) {
  //   items = '99+'
  // } else {
  //   items = +items
  // }
  // items = items > 99 ? '99+' : items

  return (
    <>
      <div className="y-section-cart-nav">
        <div className="y-logo-wrap">
          <div className="y-svg-wrap">
            <Link to={`/`} alt="homepage of SEIZEE">
              <img src={LogoBluePink} alt="SEIZEE_logo" />
            </Link>
          </div>
        </div>
        <div className="y-nav-right">
          <div className="y-icon-round y-cart-icon">
            {cartItem.totalAmount > 0 ? (
              <p className="y-cart-amount">{cartItem.totalAmount}</p>
            ) : (
              <></>
            )}
            <a
              href="/cart"
              alt="my cart"
              onClick={(e) => {
                e.preventDefault()

                if (!checkCartEmpty()) {
                  navigate('/cart')
                } else {
                  setIsOpen1(true)
                  setHeaderMg('購物車')
                  setBodyMg(`戰士，您的購物車是空的！`)
                }
              }}
            >
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
      <ModalNotification
        closeModal={closeModalNotification}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default CartNavBar
