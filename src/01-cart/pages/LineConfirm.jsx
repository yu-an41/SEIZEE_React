import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

function LineConfirm() {
  const location = useLocation()
  const navigate = useNavigate()

  const { myAuth } = useContext(AuthContext)
  const mid = +myAuth.mb_sid

  const confirm = async () => {
    const transactionId = new URLSearchParams(location.search).get(
      'transactionId'
    )
    const orderId = new URLSearchParams(location.search).get('orderId')
    console.log(orderId)

    const res = await axios.get(
      `http://localhost:3004/cart/linePay/confirm?transactionId=${transactionId}&orderId=${orderId}&mid=${mid}`
    )

    if (res.data.success) {
      navigate('/cart/done')
      console.log('付款成功，已更新訂單')
    }
  }
  useEffect(() => {
    confirm()
  }, [])

  return <div>Line Confirm</div>
}

export default LineConfirm
