import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  let initAuth = { ...unAuth }

  console.log('unAuth:', unAuth)

  // 取得目前狀態
  const str = localStorage.getItem('auth')
  if (str) {
    const localAuth = JSON.parse(str)
    if (localAuth && localAuth.token) {
      initAuth = { ...localAuth, authorised: true }
    }
  }
  console.log('str', str)

  const [myAuth, setMyAuth] = useState(initAuth)

  console.log('myAuth', myAuth)

  // 2. 登入: 成功, 失敗

  // 登出
  const logout = () => {
    localStorage.removeItem('auth')
    setMyAuth(unAuth)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ myAuth, setMyAuth, logout }}>
      {/* ex { myAuth, setMyAuth } 這裡傳出去 然後navbar接收 */}
      {children}
    </AuthContext.Provider>
  )
}
