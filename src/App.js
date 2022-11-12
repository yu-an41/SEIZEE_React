import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders'
import './styles/global.css'
import HeadWave from './components/HeadWave'
import SignUp from './05-member/SignUp'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContextProviders>
          <Routes>
            {/* <Route path="/login" element={<SignUp />} /> */}
            <div className="container">
              <div className="row top-section">
                <Route path="/login" element={<SignUp />} />
              </div>
            </div>
          </Routes>
        </MyContextProviders>
      </BrowserRouter>
    </>
  )
}

export default App
