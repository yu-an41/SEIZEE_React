import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders'
import './styles/global.css'
import HeadWave from './components/HeadWave'
import Top from './06-event/pages/06-event-01-top'
import Events from './06-event/pages/06-event-02-events'
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MyContextProviders> */}
        {/* <Routes> */}
        {/* <div className="container"> */}
        {/* <div className="row top-section">
            </div>
          </div> */}
        {/* </Routes> */}
        {/* </MyContextProviders> */}
        {/* <Top/> */}
        <Events/>

      </BrowserRouter>
    </>
  )
}

export default App
