import React, { useState } from 'react'

function UserSignBase({ sign }) {
  return (
    <>
      <div className="blueBg">
        <div className="box signin">
          <h3>已經有一個帳號?</h3>
          <button className="signinBtn" onClick={sign}>
            登入
          </button>
        </div>
        <div className="box signup">
          <h3>需要一個帳號嗎?</h3>
          <button className="signupBtn" onClick={sign}>
            註冊
          </button>
        </div>
      </div>
    </>
  )
}

export default UserSignBase
