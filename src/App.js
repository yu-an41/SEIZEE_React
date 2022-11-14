import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Menu from './components/Menu'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
