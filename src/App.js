import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Index from './00-homepage/pages/Index'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Index />
    </>
  )
}

export default App
