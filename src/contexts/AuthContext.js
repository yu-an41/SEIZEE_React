import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalConfirm from '../components/ModalConfirm'
import ModalNotification from '../components/ModalNotification'
import { DELETE_ACCOUNT } from '../my-config'
import axios from 'axios'

const AuthContext = createContext({})

export default AuthContext

export const AuthContextProvider = function ({ children }) {
  const navigate = useNavigate()
  const unAuth = {
    authorised: false, // 有沒有登入
    mb_sid: 0,
    mb_account: '',
    mb_photo: '',
    token: '',
  }

  // Modal
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  let initAuth = { ...unAuth }

  // console.log('unAuth:', unAuth)

  // 取得目前狀態
  const str = localStorage.getItem('auth')
  if (str) {
    let localAuth = null
    try {
      localAuth = JSON.parse(str)
    } catch (ex) {}

    if (localAuth && localAuth.token) {
      initAuth = { ...localAuth, authorised: true }
    }
  }
  // console.log('str', str)

  const [myAuth, setMyAuth] = useState(initAuth)

  // console.log('myAuth', myAuth)

  // 2. 登入: 成功, 失敗

  // 登出
  const logout = () => {
    openModal1()
    setHeaderMg('登出')
    setBodyMg('確定要登出?')

    // localStorage.removeItem('auth')
    // setMyAuth(unAuth)
    // navigate('/')

    // console.log('1')
  }

  // ModalConfirm
  function openModal1() {
    setIsOpen1(true)
    // console.log('2')
  }

  function closeModalConfirm() {
    setIsOpen1(false)

    openModal2()

    localStorage.removeItem('auth')
    setMyAuth(unAuth)

    setHeaderMg('登出')
    setBodyMg('登出成功')

    // console.log('3')
  }

  function closeModalCancel() {
    setIsOpen1(false)
  }

  // ModalNotification
  function openModal2() {
    setIsOpen2(true)
  }

  function closeModal() {
    setIsOpen2(false)
    navigate('/')

    // console.log('4')
  }

  // ====================================
  // 刪除帳號
  const deleteAccountD = () => {
    openModal1D()
    setHeaderMg('刪除帳號')
    setBodyMg('確定要刪除帳號?')

    // localStorage.removeItem('auth')
    // setMyAuth(unAuth)
    // navigate('/')

    // console.log('1')
  }

  // ModalConfirm
  function openModal1D() {
    setIsOpen3(true)
    // console.log('2')
  }

  async function closeModalConfirmD() {
    setIsOpen3(false)

    openModal2D()

    localStorage.removeItem('auth')
    setMyAuth(unAuth)

    await axios.delete(DELETE_ACCOUNT, {
      headers: { Authorization: 'Bearer ' + myAuth.token },
    })

    setHeaderMg('刪除帳號')
    setBodyMg('刪除帳號成功')

    // console.log('3')
  }

  function closeModalCancelD() {
    setIsOpen3(false)
  }

  // ModalNotification
  function openModal2D() {
    setIsOpen4(true)
  }

  function closeModalD() {
    setIsOpen4(false)
    navigate('/')

    // console.log('4')
  }

  return (
    <AuthContext.Provider value={{ myAuth, setMyAuth, logout, deleteAccountD }}>
      {/* ex { myAuth, setMyAuth } 這裡傳出去 然後navbar接收 */}
      {children}

      {/* ============登出帳號============ */}
      <ModalConfirm
        closeModalConfirm={closeModalConfirm}
        closeModalCancel={closeModalCancel}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen2}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />

      {/* ============刪除帳號============ */}
      <ModalConfirm
        closeModalConfirm={closeModalConfirmD}
        closeModalCancel={closeModalCancelD}
        isOpen={isOpen3}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
      <ModalNotification
        closeModal={closeModalD}
        isOpen={isOpen4}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </AuthContext.Provider>
  )
}
