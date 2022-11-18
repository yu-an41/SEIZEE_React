import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Homepage from './00-homepage/pages/Homepage'
import Menu from './components/Menu'
import CartList from './01-cart/pages/CartList'

// 05-member
import SignUp from './05-member/SignUp'
import ResetPass from './05-member/ResetPass'
import ForgotPass from './05-member/ForgotPass'

function App() {
  return (
    <BrowserRouter>
      <MyContextProviders>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartList />} />

          {/* 05-member */}
          <Route path="/login" element={<SignUp />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/reset-pass" element={<ResetPass />} />
          {/* <div className="container">
              <div className="row top-section">
                <Route path="/login" element={<SignUp />} />
              </div>
            </div> */}
        </Routes>
      </MyContextProviders>
    </BrowserRouter>
  )
}

export default App
