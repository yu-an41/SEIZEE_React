import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import CartInfoContext from '../contexts/CartInfoContext'
import './../styles/GoPayBtn.scss'

function GoPayBtn({ cartItem, mbsid }) {
  const {
    handleEmptyCart,
    checkCartEmpty,
    emptyCart,
    setEmptyCart,
    ModalNotification,
    ModalConfirm,
  } = useContext(CartInfoContext)

  const GoPay = async () => {
    if (!!mbsid) {
      if (!emptyCart) {
        const order_num = dayjs(new Date()).format('YYYYMMDDHHmmss')
        console.log(order_num)
        const { data, mb_sid } = await axios.post(
          `http://localhost:3004/cart/add-order/${order_num}`,
          cartItem
        )
        await localStorage.removeItem('cartItem')
        setEmptyCart(true)
        // const empty = await handleEmptyCart()
      } else {
        console.log('no items to be paid')
      }
    } else {
      alert('請先註冊/登入')
    }
  }

  return (
    <div className="y-go-pay-border">
      <p className="y-go-pay" onClick={GoPay}>
        前往結賬
      </p>
    </div>
  )
}

export default GoPayBtn
