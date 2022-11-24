import './style/ResetPass.scss'
import {
  checkEmpty,
  checkPassword,
  check2Password,
} from './data/UserSign_valid'
import React, { useState } from 'react'
import { UPDATE_PASS } from '../my-config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ResetPass() {
  const [errorResetMgP1, setErrorResetMgP1] = useState('')
  const [errorResetMgP2, setErrorResetMgP2] = useState('')
  const [resetFD, setResetFD] = useState({
    mbResetPass: '',
    mbResetPassConfirm: '',
  })
  const navigate = useNavigate()

  const resetHandler = (e) => {
    const id = e.currentTarget.id
    const val = e.currentTarget.value
    // console.log({ id, val });

    setResetFD({ ...resetFD, [id]: val })
  }

  // console.log(resetFD);
  // console.log(resetFD.mbResetPass);

  // 驗證密碼
  const checkResetPass1 = (e) => {
    const val = e.currentTarget.value
    const checkError = checkPassword(val)
    if (checkError === '') {
      setErrorResetMgP1('')
      return true
    } else {
      setErrorResetMgP1(checkError)
      return false
    }
  }
  // 驗證密碼確認
  const checkResetPass2 = (e) => {
    const valResetP1 = resetFD.mbResetPass
    const valResetP2 = e.currentTarget.value
    // console.log(signUpFD.mbrPass);
    const checkError = check2Password(valResetP1, valResetP2)
    if (checkEmpty(valResetP2)) {
      if (checkError === '') {
        setErrorResetMgP2('')
        return true
      } else {
        setErrorResetMgP2(checkError)
        return false
      }
    } else {
      setErrorResetMgP2('密碼不能為空白')
      return false
    }
  }

  async function resetSubmit(e) {
    e.preventDefault()

    if (!errorResetMgP1 && !errorResetMgP2) {
      const { data } = await axios.put(UPDATE_PASS, resetFD)
      alert('密碼修改成功')
      navigate('/')
      // console.log(data)
      // if (data.success) {
      //   alert('密碼修改成功')
      //   navigate('/')
      // }
    } else {
      alert('密碼修改失敗')
    }
  }

  return (
    <>
      <div className="s-body-resetpass">
        <div className="s-rp-container">
          <div className="s-rp-resetBx">
            <form action="" onSubmit={resetSubmit} className="s-rp-form">
              <h2 className="s-rp-h2">重新輸入密碼</h2>
              <label htmlFor="mbResetPass" className="s-rp-label">
                密碼<span style={{ color: 'red' }}> *</span>
              </label>
              <input
                type="text"
                placeholder="請設定8位英數混合密碼(英文大小寫)"
                id="mbResetPass"
                onChange={resetHandler}
                onBlur={checkResetPass1}
                className="s-rp-input"
              />
              <div
                className="s-rp-errorMg"
                style={{ color: 'red' }}
                id="mblEmail_error"
              >
                {errorResetMgP1}
              </div>
              <label htmlFor="mbResetPassConfirm" className="s-rp-label">
                確認密碼<span style={{ color: 'red' }}> *</span>
              </label>
              <input
                type="text"
                placeholder="請再輸入一次密碼"
                id="mbResetPassConfirm"
                onChange={resetHandler}
                onBlur={checkResetPass2}
                className="s-rp-input"
              />
              <div
                className="s-rp-errorMg"
                style={{ color: 'red' }}
                id="mblEmail_error"
              >
                {errorResetMgP2}
              </div>
              <input
                type="submit"
                value="確認"
                className="s-rp-input s-rp-resetSubmit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPass
