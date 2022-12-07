import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './../styles/WriteBtn.scss'
import book from './../p-imgs/book.png'
import AuthContext from './../../contexts/AuthContext'

function WriteBtn() {
  const { myAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <>
      <a
        href="/#"
        onClick={() => {
          if (myAuth.authorised) {
            navigate('/forum/writeForm')
          } else {
            alert('login first')
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
    </>
  )
}

export default WriteBtn
