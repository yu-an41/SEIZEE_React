import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

import CartInfoContext from '../contexts/CartInfoContext'
import AuthContext from '../../contexts/AuthContext'

import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

import './../styles/GoPayBtn.scss'

function GoPayBtn({ cartItem, mbsid }) {
  const navigate = useNavigate()

  const {
    handleEmptyCart,
    checkCartEmpty,
    emptyCart,
    setEmptyCart,
    ModalNotification,
    ModalConfirm,
  } = useContext(CartInfoContext)

  const { myAuth, setMyAuth, logout, deleteAccountD } = useContext(AuthContext)

  const [isOpen1, setIsOpen1] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  const closeModal = () => {
    setIsOpen1(false)
    navigate('/login')
  }
  const GoPay = async () => {
    if (myAuth.authorised) {
      if (!checkCartEmpty) {
        const order_num = dayjs(new Date()).format('YYYYMMDDHHmmss')
        console.log(order_num)
        // const { data, mb_sid } = await axios.post(
        //   `http://localhost:3004/cart/add-order/${order_num}`,
        //   cartItem
        // )
        await localStorage.removeItem('cartItem')
        // setEmptyCart(true)
        // const empty = await handleEmptyCart()
      } else {
        console.log('no items to be paid')
      }
    } else {
      setIsOpen1(true)
      setHeaderMg('會員')
      setBodyMg('請先註冊/登入！')
    }
  }

  return (
    <>
      <div className="y-go-pay-border">
        <p className="y-go-pay" onClick={GoPay}>
          前往結賬
        </p>
      </div>
      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default GoPayBtn
