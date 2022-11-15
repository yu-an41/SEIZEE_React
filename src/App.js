import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Menu from './components/Menu'
import HeadWave from './components/HeadWave'
import ShopList from './03-shop/03-shop-list';
import ShopMap from './03-shop/03-shop-map'

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <MyContextProviders> */}
        {/* <Routes>
          </Routes> */}
          {/* <ShopList/> */}
          <ShopMap/>
        {/* </MyContextProviders> */}
      </BrowserRouter>
    </>
  )
}

export default App
