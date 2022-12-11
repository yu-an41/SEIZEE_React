import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

import CartInfoContext from '../contexts/CartInfoContext'
import AuthContext from '../../contexts/AuthContext'

import ModalNotification from '../../components/ModalNotification'

import './../styles/CheckCartInfo.scss'
import log from 'eslint-plugin-react/lib/util/log'

function CheckCartInfo() {
  const navigate = useNavigate()

  const { myAuth } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  const closeModal = () => {
    setIsOpen(false)
    navigate('/login')
  }
  const CheckInfo = () => {
    if (myAuth.authorised) {
      console.log('authorised member')
      navigate('/cart/info')
    } else {
      console.log('unauthorised member')
      setIsOpen(true)
      setHeaderMg('會員')
      setBodyMg('請先註冊/登入！')
    }
  }

  return (
    <>
      <div className="y-check-info-border" onClick={CheckInfo}>
        <p
          className="y-check-info"
          // style={{ fontWeight: 'bold' }}
        >
          我要結帳
        </p>
      </div>
      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default CheckCartInfo
