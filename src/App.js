import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import { CollectContextProvider } from './contexts/CollectContext'

// components
// import Menu from './components/Menu'
// 切換頁面捲動至最上方
// import ScrollTonpm sTop from './components/ScrollToTop'
import ModalConfirm from './components/ModalConfirm'
import ModalNotification from './components/ModalNotification'

// 00-homepage
import Homepage from './00-homepage/pages/Homepage'
import Gachapon from './00-homepage/components/Gachapon'

// 01-cart
import CartList from './01-cart/pages/CartList'
import CartInfo from './01-cart/pages/CartInfo'
import CartDone from './01-cart/pages/CartDone'
import LineConfirm from './01-cart/pages/LineConfirm'
import TapPay from './01-cart/pages/TapPay'

// Cart 要用的 ContextProvider

// 02-forum
import ForumHome from './02-forum/pages/ForumHome'
import PostCook from './02-forum/pages/Post_cook'
import PostShare from './02-forum/pages/Post_share'
import PostStore from './02-forum/pages/Post_store'
import PostOfficial from './02-forum/pages/Post_official'
import InnerCook from './02-forum/pages/Inner_cook'
import InnerShare from './02-forum/pages/Inner_share'
import InnerStore from './02-forum/pages/Inner_store'
import InnerOfficial from './02-forum/pages/Inner_official'
import WriteForm from './02-forum/pages/WriteForm'
import MyPost from './02-forum/pages/MyPost'
import Search_post from './02-forum/pages/Search_post'

// 03-shop
import ShopList from './03-shop/pages/03-shop-list'

// 04-product
import ProductList from './04-product/pages/ProductList'
import ProductDetail from './04-product/pages/ProductDetail'
import ProductFilter from './04-product/pages/ProductFilter'
import Products from './04-product/pages/Products'

// 05-member
import UserSign from './05-member/UserSign'
import ResetPass from './05-member/ResetPass'
import ForgotPass from './05-member/ForgotPass'
import GoogleSign from './05-member/GoogleSign'

import UserProfile from './05-member/profile-pages/UserProfile'
import UpdateInfo from './05-member/profile-pages/UpdateInfo'

import LikesProduct from './05-member/profile-pages/LikesProduct'
import LikesShop from './05-member/profile-pages/LikesShop'
import LikesForum from './05-member/profile-pages/LikesForum'
import LikesEvent from './05-member/profile-pages/LikesEvent'

import Activities from './05-member/profile-pages/Activities'
import Orders from './05-member/profile-pages/Orders'

// 06-event
//event要用的context
import { TimeTableProvider } from './06-event/context/useTimeTable'
// import Top from './06-event/pages/06-event-01-top'
import Eventrender from './06-event/pages/06-event-00-Render'
import Schedule from './06-event/pages/06-event-03-schedule'
import Maps from './06-event/pages/06-event-04-map'
import Ticket from './06-event/pages/06-event-05-ticket'
import Left from './06-event/components/left/left'
import Layout from './06-event/components/Layout/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContextProviders>
          <CollectContextProvider>
            <TimeTableProvider>
              <Routes>
                {/* 00-homepage */}
                <Route path="/" element={<Homepage />} />
                <Route path="/gachapon" element={<Gachapon />} />
                <Route path="/linePay/confirm" element={<LineConfirm />} />

                {/* 01-cart */}
                <Route path="/cart/">
                  <Route index path="" element={<CartList />} />
                  <Route path="info" element={<CartInfo />} />
                  <Route path="done" element={<CartDone />} />
                  <Route path="tappay" element={<TapPay />} />
                </Route>

                {/* 02-forum */}
                {/* <Route path="/forum/">
                  <Route index path="" element={<ForumHome />} />
                  <Route path="cook" element={<PostCook />} />
                  <Route path="share" element={<PostShare />} />
                  <Route path="store" element={<PostStore />} />
                  <Route path="official" element={<PostOfficial />} />
                  <Route path="cook/inner/:sid" element={<InnerCook />} />
                  <Route path="share/inner/:sid" element={<InnerShare />} />
                  <Route path="store/inner/:sid" element={<InnerStore />} />
                  <Route
                    path="official/inner/:sid"
                    element={<InnerOfficial />}
                  />
                  <Route path="writeForm" element={<WriteForm />} />
                  <Route path="myPost" element={<MyPost />} />
                  <Route path="searchPost" element={<Search_post />} />
                </Route> */}

                {/* 03-shop */}
                <Route path="/shop" element={<ShopList />} />

                {/* 04-product  */}
                <Route
                  path="/productList/:shop_list_sid"
                  element={<ProductList />}
                />
                <Route path="/product/:sid" element={<ProductDetail />} />
                <Route path="/productFilter/" element={<ProductFilter />} />
                <Route path="/products/" element={<Products />} />

                {/* 05-member */}
                <Route path="/login" element={<UserSign />} />
                <Route path="/forgot-pass" element={<ForgotPass />} />
                <Route path="/reset-pass" element={<ResetPass />} />
                <Route path="/google" element={<GoogleSign />} />

                {/* member-profile */}
                <Route path="/profile/">
                  <Route index path="" element={<UserProfile />} />
                  <Route path="update-info" element={<UpdateInfo />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="likes/product" element={<LikesProduct />} />
                  <Route path="likes/shop" element={<LikesShop />} />
                  <Route path="likes/forum" element={<LikesForum />} />
                  <Route path="likes/event" element={<LikesEvent />} />
                  <Route path="activities" element={<Activities />} />
                </Route>

                {/* 06-event */}
                {/* <Route path="/event/">
                  <Route index path="" element={<Eventrender />} />
                  <Route path="schedule" element={<Schedule />} />
                  <Route path="map" element={<Maps />} />
                  <Route path="ticket" element={<Ticket />} />
                </Route> */}
              </Routes>
              {/* <Layout> */}
              <Routes>
                <Route path="/event/">
                  <Route index path="" element={<Eventrender />} />
                  <Route path="schedule" element={<Schedule />} />
                  <Route path="map" element={<Maps />} />
                  <Route path="ticket" element={<Ticket />} />
                </Route>
              </Routes>
              {/* </Layout> */}
            </TimeTableProvider>
          </CollectContextProvider>
        </MyContextProviders>
      </BrowserRouter>
    </>
  )
}
export default App
