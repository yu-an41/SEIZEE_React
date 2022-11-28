import './style/UserSign.scss'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import axios from 'axios'
import { LOGIN, REGISTER, CHECK_USER } from '../my-config'
import {
  checkEmpty,
  checkAccount,
  checkPassword,
  check2Password,
} from './data/UserSign_valid'
import AuthContext from '../contexts/AuthContext'

function UserSign() {
  const { setMyAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const [signInIndex, setSignInIndex] = useState(1)
  // FD = Form Data
  const [signInFD, setSignInFD] = useState({
    mblEmail: '',
    mblPass: '',
  })
  const [signUpFD, setSignUpFD] = useState({
    mbuName: '',
    mbuEmail: '',
    mbrPass: '',
    mbrPassConfirm: '',
    mbuGender: '',
    mbuAddressCity: '',
    mbuAddressArea: '',
    mbuAddressDetail: '',
    mbuPhone: '',
  })
  // 註冊errorMg
  const [errorMgE, setErrorMgE] = useState('')
  const [errorMgN, setErrorMgN] = useState('')
  const [errorMgP1, setErrorMgP1] = useState('')
  const [errorMgP2, setErrorMgP2] = useState('')
  // eyes show up
  const [showSignInP, setShowSignInP] = useState(false)
  const [showSignInP1, setShowSignInP1] = useState(false)
  const [showSignInP2, setShowSignInP2] = useState(false)

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

    if (data.success) {
      alert('登入成功')
      localStorage.setItem('auth', JSON.stringify(data.auth))
      setMyAuth({ ...data.auth, authorised: true })
      navigate('/')
    } else {
      localStorage.removeItem('auth')
      alert('登入失敗')
    }

    console.log(setMyAuth)
    console.log(data)
    console.log(data.error)
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
        } else {
          setErrorMgE('帳號重複')
        }
      } else {
        setErrorMgE(checkError)
      }
    } else {
      setErrorMgE('請輸入註冊信箱')
    }
  }
  // 驗證姓名
  const checkName = (e) => {
    const val = e.currentTarget.value

    if (checkEmpty(val)) {
      setErrorMgN('')
    } else {
      setErrorMgN('請輸入使用者名稱')
    }
  }
  // 驗證密碼
  const checkPass1 = (e) => {
    const val = e.currentTarget.value
    const checkError = checkPassword(val)
    if (checkError === '') {
      setErrorMgP1('')
    } else {
      setErrorMgP1(checkError)
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
      } else {
        setErrorMgP2(checkError)
      }
    } else {
      setErrorMgP2('密碼不能為空白')
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
        className={signInIndex === 1 ? 's-body-signup' : 's-body-signup s-move'}
      >
        <div className="s-login-container">
          <div className="s-login-blueBg">
            <div className="s-login-box s-login-signin">
              <h3 className="s-login-h3">已經有一個帳號?</h3>
              <button className="s-login-signinBtn" onClick={signToggle}>
                登入
              </button>
            </div>
            <div className="s-login-box">
              <h3 className="s-login-h3">需要一個帳號嗎?</h3>
              <button className="s-login-signinBtn" onClick={signToggle}>
                註冊
              </button>
            </div>
          </div>
          <div
            className={
              signInIndex === 1 ? 's-login-formBx' : 's-login-formBx s-move'
            }
          >
            <div className="s-login-form s-login-signinForm">
              <form
                className="s-login-formDetails"
                action=""
                onSubmit={signInSubmit}
              >
                <div className="s-login-h2">歡迎回來</div>
                <h3 className="s-login-main-h3">我們很高興又見到您了!</h3>
                <label className="s-login-label" htmlFor="mblEmail">
                  電子郵件<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                  id="mblEmail"
                  onChange={signInHandler}
                  className="s-login-input-general"
                />
                <div
                  className="s-login-errorMg"
                  style={{ color: 'red' }}
                  id="mblEmail_error"
                ></div>
                <label htmlFor="mblPass" className="s-login-label">
                  密碼<span style={{ color: 'red' }}> *</span>
                </label>
                <div className="s-login-input-eye">
                  <input
                    type={showSignInP ? 'text' : 'password'}
                    placeholder="請輸入密碼"
                    id="mblPass"
                    onChange={signInHandler}
                    className="s-login-input"
                  />
                  <i
                    onClick={() => {
                      setShowSignInP(!showSignInP)
                    }}
                    className={
                      showSignInP
                        ? 'fas fa-eye s-login-eye'
                        : 'fas fa-eye-slash s-login-eye'
                    }
                  ></i>
                </div>
                <div
                  className="s-login-errorMg"
                  style={{ color: 'red' }}
                  id="mblPass_error"
                ></div>
                <Link
                  className="s-login-forgot"
                  to="/forgot-pass"
                  style={{ color: '#00435A', 'text-decoration': 'underline' }}
                >
                  忘記您的密碼?
                </Link>
                <input
                  type="submit"
                  value="登入"
                  className="s-login-input-btn s-login-submit s-signinSubmit"
                />
                <div className="s-login-gmailBtn">
                  <img
                    className="s-login-gmail"
                    src="/05-member/mail.png"
                    alt=""
                  />
                  <input
                    type="submit"
                    value="以Google帳號登入"
                    className="s-login-input s-login-submit s-login-googleSubmit"
                  />
                </div>
              </form>
            </div>
            <div className="s-login-form s-login-signupForm">
              <form
                action=""
                className="s-login-formDetails"
                onSubmit={signUpSubmit}
              >
                <h2 className="s-login-h2">建立新帳號</h2>
                <label htmlFor="mbrEmail" className="s-login-label">
                  電子郵件<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                  id="mbrEmail"
                  onChange={signUpHandler}
                  onBlur={checkEmail}
                  className="s-login-input-general"
                />
                <div
                  className="s-login-errorMg"
                  style={{ color: 'red' }}
                  id="mbrEmail_error"
                >
                  {errorMgE}
                </div>
                <label htmlFor="mbrName" className="s-login-label">
                  使用者名稱<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入使用者名稱"
                  id="mbrName"
                  onChange={signUpHandler}
                  onBlur={checkName}
                  className="s-login-input-general"
                />
                <div
                  className="s-login-errorMg"
                  style={{ color: 'red' }}
                  id="mbrName_error"
                >
                  {errorMgN}
                </div>
                <label htmlFor="mbrPass" className="s-login-label">
                  密碼<span style={{ color: 'red' }}> *</span>
                </label>
                <div className="s-login-input-eye">
                  <input
                    type={showSignInP1 ? 'text' : 'password'}
                    placeholder="請設定8位英(大小寫)數混合密碼"
                    id="mbrPass"
                    onChange={signUpHandler}
                    onBlur={checkPass1}
                    className="s-login-input"
                  />
                  <i
                    onClick={() => {
                      setShowSignInP1(!showSignInP1)
                    }}
                    className={
                      showSignInP1
                        ? 'fas fa-eye s-login-eye'
                        : 'fas fa-eye-slash s-login-eye'
                    }
                  ></i>
                </div>
                <div
                  className="s-login-errorMg"
                  style={{ color: 'red' }}
                  id="mbrPass1_error"
                >
                  {errorMgP1}
                </div>
                <label htmlFor="mbrPassConfirm" className="s-login-label">
                  確認密碼<span style={{ color: 'red' }}> *</span>
                </label>
                <div className="s-login-input-eye">
                  <input
                    type={showSignInP2 ? 'text' : 'password'}
                    placeholder="請再輸入一次密碼"
                    id="mbrPassConfirm"
                    onChange={signUpHandler}
                    onBlur={checkPass2}
                    className="s-login-input"
                  />
                  <i
                    onClick={() => {
                      setShowSignInP2(!showSignInP2)
                    }}
                    className={
                      showSignInP2
                        ? 'fas fa-eye s-login-eye'
                        : 'fas fa-eye-slash s-login-eye'
                    }
                  ></i>
                </div>
                <div
                  className="s-login-errorMg"
                  style={{ color: 'red' }}
                  id="mbrPass2_error"
                >
                  {errorMgP2}
                </div>
                <input
                  className="s-login-input-btn s-login-submit"
                  type="submit"
                  value="註冊"
                />
                <p className="s-login-p">
                  註冊即代表同意惜食的
                  <a
                    href="/#"
                    style={{ color: '#00435A', 'text-decoration': 'underline' }}
                  >
                    服務條款
                  </a>
                  及
                  <a
                    href="/#"
                    style={{ color: '#00435A', 'text-decoration': 'underline' }}
                  >
                    隱私權政策
                  </a>
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
