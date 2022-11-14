import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu'
import MyContextProviders from './contexts/MyContextProviders';
import './styles/global.css'
import HeadWave from './components/HeadWave'
import ShopList from './03-shop/03-shop-list';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <MyContextProviders> */}
        {/* <Routes>
        </Routes> */}
        <div className="container">
            <div className="row top-section">
            <Menu/>
            <ShopList/>
            </div>
        </div>
        {/* </MyContextProviders> */}
      </BrowserRouter>
    </>
  )
}

export default App
