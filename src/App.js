import Menu from './components/Menu'
import './styles/global.css'
import HeadWave from './components/HeadWave'

function App() {
  return (
    <>
      <div className="container">
        <div className="row top-section">
          <HeadWave />
          <Menu />
        </div>
      </div>
    </>
  )
}

export default App
