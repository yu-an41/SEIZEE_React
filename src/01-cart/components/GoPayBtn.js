import React, { useState, useContext } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import CartInfoContext from '../contexts/CartInfoContext'
import './../styles/GoPayBtn.scss'

function GoPayBtn({ cartItem }) {
  const { handleEmptyCart, checkCartEmpty, emptyCart, setEmptyCart } =
    useContext(CartInfoContext)

  const GoPay = async () => {
    const mb_sid = localStorage.getItem('auth').mb_sid
    if (!!mb_sid) {
      if (!emptyCart) {
        const order_num = dayjs(new Date()).format('YYYYMMDDHHmmss')
        console.log(order_num)
        const { data, mb_sid } = await axios.post(
          `http://localhost:3004/cart/add-order/${order_num}`,
          cartItem
        )
        const empty = await handleEmptyCart()
        console.log('Go Pay')
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
