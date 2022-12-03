import React, { useContext } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import CartInfoContext from '../contexts/CartInfoContext'
import './../styles/GoPayBtn.scss'

function GoPayBtn({ cartItem }) {
  const { handleEmptyCart } = useContext(CartInfoContext)
  const GoPay = async () => {
    const order_num = dayjs(new Date()).format('YYYYMMDDHHmmss')
    console.log(order_num)
    const { data } = await axios.post(
      `http://localhost:3004/cart/add-order/${order_num}`,
      cartItem
    )
    const empty = await handleEmptyCart()
    // console.log('Go Pay')
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
