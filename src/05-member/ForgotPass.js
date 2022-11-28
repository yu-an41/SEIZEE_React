import './style/ForgotPass.scss'
import { CHECK_FORGOT_PASS, SEND_FORGOT_PASS } from '../my-config'
import React, { useState } from 'react'
import axios from 'axios'
import { checkEmpty } from './data/UserSign_valid'
import { useNavigate } from 'react-router-dom'

function ForgotPass() {
  const [forgotFD, setForgotFD] = useState({
    mbfEmail: '',
  })
  const [errorMgF, setErrorMgF] = useState('')
  const navigate = useNavigate()

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
      const { data } = await axios.post(CHECK_FORGOT_PASS, forgotFD)
      // console.log(data)
      if (data.success) {
        setErrorMgF('')
      } else {
        setErrorMgF('查無此帳號')
      }
    } else {
      setErrorMgF('請輸入註冊信箱')
    }
  }

  async function forgotSubmit(e) {
    e.preventDefault()

    if (!errorMgF) {
      const { data } = await axios.post(SEND_FORGOT_PASS, forgotFD)
      // alert('修改密碼信件已發送')
      console.log(data)

      if (data.success) {
        alert('修改密碼信件已發送')
        navigate('/')
      } else {
        alert('請確認電子郵件是否正確')
      }
    }
  }
  return (
    <>
      <div className="s-body-forgotpass">
        <div className="s-fp-container">
          <div className="s-fp-forgotBx">
            <form action="" onSubmit={forgotSubmit} className="s-fp-form">
              <h2 className="s-fp-h2">忘記密碼?</h2>
              <h3 className="s-fp-h3">
                請在下面輸入您的電子郵件地址，我們將重設密碼的連結寄給您。
              </h3>
              <label htmlFor="mbfEmail" className="s-fp-label">
                電子郵件<span style={{ color: 'red' }}> *</span>
              </label>
              <input
                type="text"
                placeholder="請輸入電子郵件"
                id="mbfEmail"
                onChange={forgotHandler}
                onBlur={checkForgotEmail}
                className="s-fp-input"
              />
              <div
                className="s-fp-errorMg"
                style={{ color: 'red' }}
                id="mblEmail_error"
              >
                {errorMgF}
              </div>
              <input
                type="submit"
                value="發送重送連結"
                className="s-fp-input s-fp-forgotSubmit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default ForgotPass
