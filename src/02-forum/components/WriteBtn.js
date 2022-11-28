import React from 'react'

import './../styles/WriteBtn.scss'
import book from './../p-imgs/book.png'

function WriteBtn() {
  return (
    <>
      <div className="p-writeButton">
        <div className="p-writText">
          <div className="p-book">
            <img src={book} alt="" />
          </div>
          <h3>我要發文</h3>
        </div>
      </div>
    </>
  )
}

export default WriteBtn
