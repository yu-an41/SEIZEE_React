import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Menu from './components/Menu'
function App() {
  return (
    <>
      <div>
        <div className="body-container">
          <section className="section-nav">nav</section>
          <section className="section-carousel">carousel</section>
          <section className="section-nav">nav</section>
        </div>
      </div>
    </>
  )
}

export default App
