import './style/UserSign.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import React, { useState, useContext, useEffect, useRef } from 'react'
import axios from 'axios'
import { LOGIN, REGISTER, CHECK_USER, GOOGLE_LINK } from '../my-config'
import {
  checkEmpty,
  checkAccount,
  checkPassword,
  check2Password,
} from './data/UserSign_valid'
import AuthContext from '../contexts/AuthContext'
import ModalNotification from '../components/ModalNotification'
import LogoBluePink from './../logo-and-fonts/LOGO-blue-pink.svg'
import LogoWhite from './../logo-and-fonts/LOGO-white.svg'

function UserSign() {
  const { setMyAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const [signInIndex, setSignInIndex] = useState(1)

  // FD = Form Data
  const [signInFD, setSignInFD] = useState({
    mblEmail: '',
    mblPass: '',
  })
  const [signUpFD, setSignUpFD] = useState({
    mbrName: '',
    mbrEmail: '',
    mbrPass: '',
    mbrPassConfirm: '',
    mbrGender: '',
    mbrAddressCity: '',
    mbrAddressArea: '',
    mbrAddressDetail: '',
    mbrPhone: '',
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

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  // Google Link
  // const [GoogleState, setGoogleState] = useState('')

  // ====================================
  // 拿到Google登入連結
  // async function getGoogle() {
  //   const { data } = await axios.get(GOOGLE_LINK)
  //   console.log('data', data)
  //   console.log('data.title', data.title)

  //   setGoogleState(data.title)
  // }

  // console.log('GoogleState', GoogleState)

  // useEffect(() => {
  //   getGoogle()
  // }, [])

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
      localStorage.setItem('auth', JSON.stringify(data.auth))
      setMyAuth({ ...data.auth, authorised: true })

      openModal()
      setHeaderMg('登入')
      setBodyMg('登入成功')
    } else {
      localStorage.removeItem('auth')

      openModal()
      setHeaderMg('登入')
      setBodyMg('請確認帳號和密碼')
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
        openModal()
        setHeaderMg('註冊')
        setBodyMg('註冊成功')
      } else {
        openModal()
        setHeaderMg('註冊')
        setBodyMg('請填寫完整')
      }
    } else {
      openModal()
      setHeaderMg('註冊')
      setBodyMg('請填寫完整')
    }

    // const response = await axios.post(CHECK_USER, signUpFD);
    // // console.log(response.data.success);
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)

    if (bodyMg === '登入成功' || bodyMg === '註冊成功') {
      navigate('/')
    }
  }

  return (
    <>
      <div
        className={signInIndex === 1 ? 's-body-signup' : 's-body-signup s-move'}
      >
        {signInIndex === 1 ? (
          <div className="s-svg-wrap">
            <a href="/" alt="homepage of SEIZEE">
              <img src={LogoBluePink} alt="SEIZEE_logo" />
            </a>
          </div>
        ) : (
          <div className="s-svg-wrap">
            <a href="/" alt="homepage of SEIZEE">
              <img src={LogoWhite} alt="SEIZEE_logo" />
            </a>
          </div>
        )}
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
                <div
                  className="s-login-h2"
                  onClick={() => {
                    // document.getElementById('mblEmail').value =
                    //   'seizee1214000@gmail.com'
                    // document.getElementById('mblPass').value = 'De123456'

                    // const id = e.currentTarget.id
                    // const val = e.currentTarget.value
                    // console.log({ id, val })

                    setSignInFD({
                      ...signInFD,
                      mblEmail: 'seizee1214000@gmail.com',
                      mblPass: 'De123456',
                    })
                  }}
                >
                  歡迎回來
                </div>
                <h3
                  className="s-login-main-h3"
                  onClick={() => {
                    // document.getElementById('mblEmail').value = 'demo1@demo.com'
                    // document.getElementById('mblPass').value = 'De123456'

                    // const id = e.currentTarget.id
                    // const val = e.currentTarget.value
                    // console.log({ id, val })

                    setSignInFD({
                      ...signInFD,
                      mblEmail: 'demo1@demo.com',
                      mblPass: 'De123456',
                    })
                  }}
                >
                  我們很高興又見到您了!
                </h3>
                <label className="s-login-label" htmlFor="mblEmail">
                  電子郵件<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                  value={signInFD.mblEmail}
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
                    value={signInFD.mblPass}
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
                <Link className="s-login-forgot" to="/forgot-pass">
                  忘記您的密碼?
                </Link>
                <input
                  type="submit"
                  value="登入"
                  className="s-login-input-btn s-login-submit s-signinSubmit"
                />
              </form>
              {/* <a className="s-login-gmailBtn" href={GoogleState}>
                <img
                  className="s-login-gmail"
                  src="/05-member/mail.png"
                  alt=""
                />
                <input
                  type="submit"
                  value="以Google帳號登入"
                  className="s-login-input-general s-login-submit s-login-googleSubmit"
                />
              </a> */}
            </div>
            <div className="s-login-form s-login-signupForm">
              <form
                action=""
                className="s-login-formDetails"
                onSubmit={signUpSubmit}
              >
                <h2
                  className="s-login-h2"
                  onClick={() => {
                    // document.getElementById('mbrEmail').value = 'demo1@demo.com'
                    // document.getElementById('mbrName').value = '飛天小女警'
                    // document.getElementById('mbrPass').value = 'De123456'
                    // document.getElementById('mbrPassConfirm').value = 'De123456'

                    // const id = e.currentTarget.id
                    // const val = e.currentTarget.value
                    // console.log({ id, val })

                    setSignUpFD({
                      ...signUpFD,
                      mbrEmail: 'demo1@demo.com',
                      mbrName: '飛天小女警',
                      mbrPass: 'De123456',
                      mbrPassConfirm: 'De123456',
                    })

                    setErrorMgE('')
                    setErrorMgN('')
                    setErrorMgP1('')
                    setErrorMgP2('')
                  }}
                >
                  建立新帳號
                </h2>
                <label htmlFor="mbrEmail" className="s-login-label">
                  電子郵件<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                  id="mbrEmail"
                  value={signUpFD.mbrEmail}
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
                  value={signUpFD.mbrName}
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
                    value={signUpFD.mbrPass}
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
                    value={signUpFD.mbrPassConfirm}
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
                  <a className="s-login-p-a" href="/#">
                    服務條款
                  </a>
                  及
                  <a href="/#" className="s-login-p-a">
                    隱私權政策
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default UserSign
