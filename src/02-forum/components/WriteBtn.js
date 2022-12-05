import React from 'react'
import { Link } from 'react-router-dom'

import './../styles/WriteBtn.scss'
import book from './../p-imgs/book.png'


function WriteBtn() {
  return (
    <>
      <Link to={`/forum/writeForm`}>
        <div className="p-writeButton">
          <div className="p-writText">
            <div className="p-book">
              <img src={book} alt="" />
            </div>
            <h3>我要發文</h3>
          </div>
        </div>
      </Link>
    </>
  )
}

export default WriteBtn
