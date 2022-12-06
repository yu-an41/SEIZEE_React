import './style/ForgotPass.scss'
import { CHECK_FORGOT_PASS, SEND_FORGOT_PASS } from '../my-config'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { checkEmpty } from './data/UserSign_valid'
import { useNavigate } from 'react-router-dom'
import ModalNotification from '../components/ModalNotification'
import LoadingOverlay from 'react-loading-overlay'
import ClockLoader from 'react-spinners/ClockLoader'

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

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  // Loading
  const [isActive, setIsActive] = useState(false)

  console.log(isActive)

  // ====================================

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

  // setIsActive(true)

  async function forgotSubmit(e) {
    e.preventDefault()

    setIsActive(true)

    if (!errorMgF) {
      const { data } = await axios.post(SEND_FORGOT_PASS, forgotFD)

      // console.log(data)

      if (data.success) {
        openModal()
        setHeaderMg('修改密碼')
        setBodyMg('修改密碼信件已發送')
      } else {
        openModal()
        setHeaderMg('修改密碼')
        setBodyMg('請確認電子郵件是否正確')
      }
    } else {
      openModal()
      setHeaderMg('修改密碼')
      setBodyMg('請確認電子郵件是否正確')
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)

    if (bodyMg === '修改密碼信件已發送') {
      navigate('/')
    }
  }

  // ====================================
  // Loading

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false)
    }, 2000)
  }, [])

  return (
    <>
      <LoadingOverlay
        active={isActive}
        spinner={<ClockLoader color="#ED4743" />}
      >
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
      </LoadingOverlay>

      {/* <div className="s-body-forgotpass">
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
      </div> */}

      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}
export default ForgotPass
