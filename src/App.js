import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders'
import './styles/global.scss'
import HeadWave from './components/HeadWave'
import HomePage from './00-homepage/HomePage'
// 05-member
import UserSign from './05-member/UserSign'
import ResetPass from './05-member/ResetPass'
import ForgotPass from './05-member/ForgotPass'
import UserProfile from './05-member/profile-pages/UserProfile'
import UpdateInfo from './05-member/profile-pages/UpdateInfo'
import Likes from './05-member/profile-pages/Likes'
import Activities from './05-member/profile-pages/Activities'
import Orders from './05-member/profile-pages/Orders'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContextProviders>
          {/* <AuthContextProvider> */}
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* 05-member */}
            <Route path="/login" element={<UserSign />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
            <Route path="/reset-pass" element={<ResetPass />} />

            {/* member-profile */}
            <Route path="/profile/">
              <Route index path=":sid" element={<UserProfile />} />
              <Route path="update-info/:sid" element={<UpdateInfo />} />
              <Route path="orders" element={<Orders />} />
              <Route path="likes" element={<Likes />} />
              <Route path="activities" element={<Activities />} />
            </Route>
          </Routes>
          {/* </AuthContextProvider> */}
        </MyContextProviders>
      </BrowserRouter>
    </>
  )
}

export default App
