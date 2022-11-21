import './style/ForgotPass.scss'
import { FORGOT_PASS } from '../my-config'
import React, { useState } from 'react'
import axios from 'axios'
import { checkEmpty } from './UserSign_valid'

function ForgotPass() {
  const [forgotFD, setForgotFD] = useState({
    mbfEmail: '',
  })
  const [errorMgF, setErrorMgF] = useState('')

  // 輸入信箱 到後端確認是否有信箱的存在 而後發送token
  const forgotHandler = (e) => {
    const id = e.currentTarget.id
    const val = e.currentTarget.value
    // console.log({ id, val });

    setForgotFD({ ...forgotFD, [id]: val })
  }

  const checkForgotEmail = async (e) => {
    const val = e.currentTarget.value

    if (checkEmpty(val)) {
      const { data } = await axios.post(FORGOT_PASS, forgotFD)
      // console.log(data)
      if (data.success) {
        setErrorMgF('')
        return true
      } else {
        setErrorMgF('查無此帳號')
        return false
      }
    } else {
      setErrorMgF('請輸入註冊信箱')
      return false
    }
  }

  function forgotSubmit(e) {
    e.preventDefault()

    if (!errorMgF) {
      alert('修改密碼信件已發送')
    } else {
      alert('請確認電子郵件是否正確')
    }
  }

  return (
    <>
      <div className="s-body-forgotpass">
        <div className="container">
          <div className="forgotBx">
            <form action="" onSubmit={forgotSubmit}>
              <h2>忘記密碼?</h2>
              <h3>
                請在下面輸入您的電子郵件地址，我們將重設密碼的連結寄給您。
              </h3>
              <label for='mbfEmail'>
                電子郵件<span style={{ color: 'red' }}> *</span>
              </label>
              <input
                type="text"
                placeholder="請輸入電子郵件"
                id="mbfEmail"
                onChange={forgotHandler}
                onBlur={checkForgotEmail}
              />
              <div
                className="errorMg"
                style={{ color: 'red' }}
                id="mblEmail_error"
              >
                {errorMgF}
              </div>
              <input
                type="submit"
                value="發送重送連結"
                className="forgotSubmit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPass
