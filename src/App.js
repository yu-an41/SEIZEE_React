import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders'
import './styles/global.css'
import HeadWave from './components/HeadWave'
import Top from './06-event/pages/06-event-01-top'
<<<<<<< HEAD
import Events from './06-event/pages/06-event-02-events'
import Schedule from './06-event/pages/06-event-03-schedule'
import Map from './06-event/pages/06-event-04-map'
import Ticket from './06-event/pages/06-event-05-ticket'


=======
>>>>>>> d4bf3ac978280075df3c3de5811d4709a09a4681
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
<<<<<<< HEAD
        {/* <Top/> */}
        <Events/>
        {/* <Schedule /> */}
        {/* <Map /> */}
        {/* <Ticket /> */}
        

=======
        <Top/>
>>>>>>> d4bf3ac978280075df3c3de5811d4709a09a4681
      </BrowserRouter>
    </>
  )
}

export default App
