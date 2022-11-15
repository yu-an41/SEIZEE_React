import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Homepage from './00-homepage/pages/Homepage'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Homepage />
    </>
  )
}

export default App
