import './style/SignUp.scss'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import { LOGIN, REGISTER, CHECK_USER } from '../my-config'

function UserSign() {
  const [signInIndex, setSignInIndex] = useState(1)
  const navigate = useNavigate()
  // FD = Form Data
  const [signInFD, setSignInFD] = useState({
    mbEmail: '',
    mbPass: '',
  })
  const [signUpFD, setSignUpFD] = useState({
    mbEmail: '',
    mbName: '',
    mbPass: '',
    mbPassConfirm: '',
  })

  // ====================================
  // 註冊登入畫面切換
  function sign() {
    if (signInIndex === 1) {
      setSignInIndex(0)
    } else {
      setSignInIndex(1)
    }
  }

  // ====================================
  // 登入
  const signInHandler = (e) => {
    const id = e.currentTarget.id
    const val = e.currentTarget.value
    console.log({ id, val })

    setSignInFD({ ...signInFD, [id]: val })
  }

  const signInSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(LOGIN, signInFD)
    console.log(data)
    if (data.success) {
      alert('登入成功')
      navigate('/')
    } else {
      alert('登入失敗')
    }
  }

  // ====================================
  // 註冊
  const signUpHandler = (e) => {
    const id = e.currentTarget.id
    const val = e.currentTarget.value
    console.log({ id, val })

    setSignUpFD({ ...signUpFD, [id]: val })
  }

  const signUpSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(CHECK_USER, signUpFD)
    console.log(response.data.success)
    if (response.data.success) {
      const { data } = await axios.post(REGISTER, signUpFD)
      console.log(data)
      if (data.success) {
        alert('註冊成功')
        navigate('/')
      } else {
        alert('註冊失敗')
      }
    } else {
      alert('帳號重複')
      return
    }
  }

  return (
    <>
      <div
        className={signInIndex === 1 ? 's-body-signup' : 's-body-signup active'}
      >
        <div className="container">
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
          <div className={signInIndex === 1 ? 'formBx' : 'formBx active'}>
            <div className="form signinForm">
              <form action="" onSubmit={signInSubmit}>
                <h2>歡迎回來</h2>
                <h3>我們很高興又見到您了!</h3>
                <input
                  type="text"
                  placeholder="電子郵件*"
                  id="mbEmail"
                  onChange={signInHandler}
                />
                <input
                  type="password"
                  placeholder="密碼*"
                  id="mbPass"
                  onChange={signInHandler}
                />
                <Link className="forgot" to="/forgot-pass">
                  忘記您的密碼?
                </Link>
                <input type="submit" value="登入" className="signinSubmit" />
                <div className="gmailBtn">
                  <img className="gmail" src="/05-member/mail.png" alt="" />
                  <input
                    type="submit"
                    value="以Google帳號登入"
                    className="googleSubmit"
                  />
                </div>
              </form>
            </div>
            <div className="form signupForm">
              <form action="" onSubmit={signUpSubmit}>
                <h2>建立新帳號</h2>
                <input
                  type="text"
                  placeholder="電子郵件*"
                  id="mbEmail"
                  onChange={signUpHandler}
                />
                <input
                  type="text"
                  placeholder="使用者名稱*"
                  id="mbName"
                  onChange={signUpHandler}
                />
                <input
                  type="password"
                  placeholder="密碼*"
                  id="mbPass"
                  onChange={signUpHandler}
                />
                <input
                  type="password"
                  placeholder="確認密碼*"
                  id="mbPassConfirm"
                  onChange={signUpHandler}
                />
                <input type="submit" value="註冊" />
                <p>
                  註冊即代表同意惜食的<a href="/#">服務條款</a>及
                  <a href="/#">隱私權政策</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSign
