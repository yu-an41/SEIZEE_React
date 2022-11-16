import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders'
import './styles/global.css'
import HeadWave from './components/HeadWave'
import HomePage from './00-homepage/HomePage'
// 05-member
import UserSign from './05-member/UserSign'
import ResetPass from './05-member/ResetPass'
import ForgotPass from './05-member/ForgotPass'
import UserProfile from './05-member/UserProfile'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContextProviders>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* 05-member */}
            <Route path="/login" element={<UserSign />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
            <Route path="/reset-pass" element={<ResetPass />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* <div className="container">
              <div className="row top-section">
                <Route path="/login" element={<SignUp />} />
              </div>
            </div> */}
          </Routes>
        </MyContextProviders>
      </BrowserRouter>
    </>
  )
}

export default App
