import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'

// components
// import Menu from './components/Menu'
// 切換頁面捲動至最上方
// import ScrollToTop from './components/ScrollToTop'
import ModalConfirm from './components/ModalConfirm'
import ModalNotification from './components/ModalNotification'

// 00-homepage
import Homepage from './00-homepage/pages/Homepage'

// 01-cart
import CartList from './01-cart/pages/CartList'
import CartInfo from './01-cart/pages/CartInfo'

// Cart 要用的 ContextProvider

// 02-forum
// import ForumHome from './02-forum/pages/ForumHome'
// import PostCook from './02-forum/pages/Post_cook'
// import PostShare from './02-forum/pages/Post_share'
// import PostStore from './02-forum/pages/Post_store'
// import PostOfficial from './02-forum/pages/Post_official'
// import InnerCook from './02-forum/pages/Inner_cook'
// import InnerShare from './02-forum/pages/Inner_share'
// import InnerStore from './02-forum/pages/Inner_store'
// import InnerOfficial from './02-forum/pages/Inner_official'
// import WriteForm from './02-forum/pages/WriteForm'

// 03-shop
import ShopList from './03-shop/pages/03-shop-list'
import ShopHome from './03-shop/pages/03-shop-home'

// 04-product
import ProductList from './04-product/ProductList'
import ProductDetail from './04-product/ProductDetail'

// 05-member
import UserSign from './05-member/UserSign'
import ResetPass from './05-member/ResetPass'
import ForgotPass from './05-member/ForgotPass'
// 以下會撞波浪XDD
// import UserProfile from './05-member/profile-pages/UserProfile'
// import UpdateInfo from './05-member/profile-pages/UpdateInfo'
// import Likes from './05-member/profile-pages/Likes'
// import Activities from './05-member/profile-pages/Activities'
// import Orders from './05-member/profile-pages/Orders'

// 06-event
import Top from './06-event/pages/06-event-01-top'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <MyContextProviders>
            <ScrollToTop>
              <Routes>
                {/* 00-homepage */}
                <Route path="/" element={<Homepage />} />

              {/* 01-cart */}
              <Route path="/cart" element={<CartList />} />
              <Route path="/cart/info" element={<CartInfo />} />

                {/* 02-forum */}
                {/* <Route path="/forum">
                <Route path="/" element={<ForumHome />} />
                <Route path="/cook" element={<PostCook />} />
                <Route path="/share" element={<PostShare />} />
                <Route path="/store" element={<PostStore />} />
                <Route path="/official" element={<PostOfficial />} />
                <Route path="/cook/inner/:sid" element={<InnerCook />} />
                <Route path="/share/inner" element={<InnerShare />} />
                <Route path="/store/inner" element={<InnerStore />} />
                <Route path="/official/inner" element={<InnerOfficial />} />
                <Route path="/writeForm" element={<WriteForm />} />
              </Route> */}

                {/* 03-shop */}
                {/* <Route path="/shop" element={<ShopList />} /> */}
                {/* <Route path="/shop" element={<ShopHome />} /> */}

                {/* 04-product  */}
                {/* <Route
                  path="/productList/:shop_list_sid"
                  element={<ProductList />}
                /> */}
                {/* <Route path="/product/:sid" element={<ProductDetail />} /> */}

                {/* 05-member */}
                {/* <Route path="/login" element={<UserSign />} />
                <Route path="/forgot-pass" element={<ForgotPass />} />
                <Route path="/reset-pass" element={<ResetPass />} /> */}

                {/* member-profile */}
                {/* <Route path="/profile/">
                <Route index path="" element={<UserProfile />} />
                <Route path="update-info" element={<UpdateInfo />} />
                <Route path="orders" element={<Orders />} />
                <Route path="likes" element={<Likes />} />
                <Route path="activities" element={<Activities />} />
              </Route> */}

                {/* 06-event */}
                {/* <Route path="/top" element={<Top />} />
              <Route path="/events" element={<Events />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/map" element={<Map />} />
              <Route path="/ticket" element={<Ticket />} /> */}
                {/* <Route path="/Eventrender" element={<Eventrender />} /> */}
              </Routes>
            </ScrollToTop>
          </MyContextProviders>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}
export default App
