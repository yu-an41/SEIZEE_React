import './style/SignUp.scss'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import { LOGIN, REGISTER, CHECK_USER } from '../my-config'
import {
  checkEmpty,
  checkAccount,
  checkPassword,
  check2Password,
} from './UserSign_valid'

function UserSign() {
  const [signInIndex, setSignInIndex] = useState(0)
  const navigate = useNavigate()
  // FD = Form Data
  const [signInFD, setSignInFD] = useState({
    mblEmail: '',
    mblPass: '',
  })
  const [signUpFD, setSignUpFD] = useState({
    mbrEmail: '',
    mbrName: '',
    mbrPass: '',
    mbrPassConfirm: '',
  })
  // 註冊errorMg
  const [errorMgE, setErrorMgE] = useState('')
  const [errorMgN, setErrorMgN] = useState('')
  const [errorMgP1, setErrorMgP1] = useState('')
  const [errorMgP2, setErrorMgP2] = useState('')

  // ====================================
  // 註冊登入畫面切換
  function signToggle() {
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
    // console.log({ id, val });

    setSignUpFD({ ...signUpFD, [id]: val })
  }

  // console.log(signUpFD);
  // console.log(signUpFD.mbrEmail);
  // console.log(signUpFD.mbrPass);

  // =================
  // 驗證信箱
  const checkEmail = async (e) => {
    const val = e.currentTarget.value
    // const checkError = checkAccount(val);
    // console.log(checkError)

    if (checkEmpty(val)) {
      const checkError = checkAccount(val)
      // errorMgE = checkError;
      // console.log(checkError)

      if (checkError === '') {
        const { data } = await axios.post(CHECK_USER, signUpFD)
        if (data.success) {
          setErrorMgE('')
          return true
        } else {
          setErrorMgE('帳號重複')
          return false
        }
      } else {
        setErrorMgE(checkError)
        return false
      }
    } else {
      setErrorMgE('請輸入註冊信箱')
      return false
    }
  }
  // 驗證姓名
  const checkName = (e) => {
    const val = e.currentTarget.value

    if (checkEmpty(val)) {
      setErrorMgN('')
      // return true
    } else {
      setErrorMgN('請輸入使用者名稱')
      // return false
    }
  }
  // 驗證密碼
  const checkPass1 = (e) => {
    const val = e.currentTarget.value
    const checkError = checkPassword(val)
    if (checkError === '') {
      setErrorMgP1('')
      return true
    } else {
      setErrorMgP1(checkError)
      return false
    }
  }
  // 驗證密碼確認
  const checkPass2 = (e) => {
    const valP1 = signUpFD.mbrPass
    const valP2 = e.currentTarget.value
    // console.log(signUpFD.mbrPass);
    const checkError = check2Password(valP1, valP2)

    if (checkEmpty(valP2)) {
      if (checkError === '') {
        setErrorMgP2('')
        return true
      } else {
        setErrorMgP2(checkError)
        return false
      }
    } else {
      setErrorMgP2('密碼不能為空白')
      return false
    }
  }

  // =================
  // 驗證無誤 送出
  const signUpSubmit = async (e) => {
    e.preventDefault()

    if (!errorMgE && !errorMgN && !errorMgP1 && !errorMgP2) {
      const { data } = await axios.post(REGISTER, signUpFD)
      // console.log(data);
      console.log(errorMgE)
      console.log(!errorMgE)
      if (data.success) {
        alert('註冊成功')
        navigate('/')
      } else {
        alert('註冊失敗')
      }
    } else {
      alert('請填寫完整')
    }

    // const response = await axios.post(CHECK_USER, signUpFD);
    // // console.log(response.data.success);
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
              <button className="signinBtn" onClick={signToggle}>
                登入
              </button>
            </div>
            <div className="box signup">
              <h3>需要一個帳號嗎?</h3>
              <button className="signupBtn" onClick={signToggle}>
                註冊
              </button>
            </div>
          </div>
          <div className={signInIndex === 1 ? 'formBx' : 'formBx active'}>
            <div className="form signinForm">
              <form action="" onSubmit={signInSubmit}>
                <h2>歡迎回來</h2>
                <h3>我們很高興又見到您了!</h3>
                <label for="mblEmail">
                  電子郵件<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                  id="mblEmail"
                  onChange={signInHandler}
                />
                <div
                  className="errorMg"
                  style={{ color: 'red' }}
                  id="mblEmail_error"
                ></div>
                <label for="mblPass">
                  密碼<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="password"
                  placeholder="請輸入密碼"
                  id="mblPass"
                  onChange={signInHandler}
                />
                <div
                  className="errorMg"
                  style={{ color: 'red' }}
                  id="mblPass_error"
                ></div>
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
                <label for="mbrEmail">
                  電子郵件<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                  id="mbrEmail"
                  onChange={signUpHandler}
                  onBlur={checkEmail}
                />
                <div
                  className="errorMg"
                  style={{ color: 'red' }}
                  id="mbrEmail_error"
                >
                  {errorMgE}
                </div>
                <label for="mbrName">
                  使用者名稱<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入使用者名稱"
                  id="mbrName"
                  onChange={signUpHandler}
                  onBlur={checkName}
                />
                <div
                  className="errorMg"
                  style={{ color: 'red' }}
                  id="mbrName_error"
                >
                  {errorMgN}
                </div>
                <label for="mbrPass">
                  密碼<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請設定8位英(大小寫)數混合密碼"
                  id="mbrPass"
                  onChange={signUpHandler}
                  onBlur={checkPass1}
                />
                <div
                  className="errorMg"
                  style={{ color: 'red' }}
                  id="mbrPass1_error"
                >
                  {errorMgP1}
                </div>
                <label for="mbrPassConfirm">
                  確認密碼<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請再輸入一次密碼"
                  id="mbrPassConfirm"
                  onChange={signUpHandler}
                  onBlur={checkPass2}
                />
                <div
                  className="errorMg"
                  style={{ color: 'red' }}
                  id="mbrPass2_error"
                >
                  {errorMgP2}
                </div>
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
