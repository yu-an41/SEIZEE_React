import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'

// components
import Menu from './components/Menu'

// 00-homepage
import Homepage from './00-homepage/pages/Homepage'

// 01-cart
import CartList from './01-cart/pages/CartList'

// 02-forum
// import PostCook from './02-forum/pages/Post_cook'
// import ForumHome from './02-forum/pages/ForumHome'

// 03-shop
import ShopList from './03-shop/03-shop-list'
import ShopHome from './03-shop/03-shop-home'

// 05-member
import UserSign from './05-member/UserSign'
import ResetPass from './05-member/ResetPass'
import ForgotPass from './05-member/ForgotPass'
// import UserProfile from './05-member/UserProfile'

// 06-event
// import Top from './06-event/pages/06-event-01-top'

function App() {
  return (
    <BrowserRouter>
      <MyContextProviders>
        <Routes>
          {/* 00-homepage */}
          <Route path="/" element={<Homepage />} />

          {/* 01-cart */}
          <Route path="/cart" element={<CartList />} />

          {/* 02-forum */}
          {/* <Route path="/forum" element={<ForumHome />} />
          <Route path="/forum/cook" element={<PostCook />} /> */}

          {/* 03-shop */}
          <Route path="/shop" element={<ShopList />} />
          {/* <Route path="/shop" element={<ShopHome />} /> */}

          {/* 05-member */}
          {/* <Route path="/login" element={<UserSign />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/reset-pass" element={<ResetPass />} />
          <Route path="/profile" element={<UserProfile />} /> */}

          {/* 06-event */}
          {/* <div className="container"> */}
          {/* <div className="row top-section">
            </div>
          </div> */}
          {/* <Route path="/event" element={<Top />}/> */}
        </Routes>
      </MyContextProviders>
    </BrowserRouter>
  )
}
export default App
