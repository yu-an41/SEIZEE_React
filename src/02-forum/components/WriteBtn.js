/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './../styles/WriteBtn.scss'
import book from './../p-imgs/book.png'
import AuthContext from './../../contexts/AuthContext'
import ModalNotification from '../../components/ModalNotification'

function WriteBtn() {
  const { myAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [headerMs, setHeaderMs] = useState('')
  const [bodyMs, setBodyMs] = useState('')
  const closeModal = () => {
    setIsOpen(false)
    // navigate('/forum/cook')
  }
  return (
    <>
      <a
        onClick={() => {
          if (myAuth.authorised) {
            navigate('/forum/writeForm')
          } else {
            // alert('login first')
            setIsOpen(true)
            setHeaderMs('您還未成為惜食戰士')
            setBodyMs('請先登入')
          }
        }}
      >
        <div className="p-writeButton">
          <div className="p-writText">
            <div className="p-book">
              <img src={book} alt="" />
            </div>
            <h3>我要發文</h3>
          </div>
        </div>
      </a>
      <ModalNotification
        isOpen={isOpen}
        NotificationHeader={headerMs}
        NotificationBody={bodyMs}
        closeModal={closeModal}
      />
    </>
  )
}

export default WriteBtn
