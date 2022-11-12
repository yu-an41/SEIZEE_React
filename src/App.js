// test
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders'
import './styles/global.css'
import HeadWave from './components/HeadWave'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContextProviders>
          <Routes>
            <div className="container">
              <div className="row top-section"></div>
            </div>
          </Routes>
        </MyContextProviders>
      </BrowserRouter>
    </>
  )
}

export default App
