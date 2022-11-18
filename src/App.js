import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import MyContextProviders from './contexts/MyContextProviders'
// import Menu from './components/Menu'
// import ShopList from './03-shop/03-shop-list';
import ShopHome from './03-shop/03-shop-home';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <MyContextProviders> */}
        {/* <Routes>
          </Routes> */}
          {/* <ShopList/> */}
          <ShopHome/>
        {/* </MyContextProviders> */}
      </BrowserRouter>
    </>
  )
}

export default App
