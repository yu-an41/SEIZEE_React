import { useState, useEffect, useRef, useContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { PRODUCT } from '../my-config'
import axios from 'axios'
import ProductCard from './components/ProductCard.jsx'
import HeadWave from '../components/HeadWave'
import YellowWave2 from './components/YellowWave2'
import './components/style/ProductList.scss'
import Select from './components/Select'
import ProductVideo from './components/ProductVideo'
// import ShopMcard from "../03-shop/components/03-shop-m-card"
// import "../03-shop/styles/03-shop-list.scss"

// 01-cart
import CartInfoContext from '../01-cart/contexts/CartInfoContext'

function ProductList() {
  const [allProduct, setAllProduct] = useState([])
  const [shopData, setShopData] = useState([])
  const [errorMessage, setErrorMessage] = useState([])
  const { shop_list_sid } = useParams()

  console.log(shop_list_sid)

  // 01-cart
  const { cartItem, setCartItem } = useContext(CartInfoContext)
  const [productDataFromCard, setProductDataFrpmCard] = useContext()

  async function getProductCard() {
    try {
      const response = await axios.get(
        `http://localhost:3002/product/list?shop_list_sid=${shop_list_sid}`
      )
      console.log('this is reponse:', response)
      const Pdata = response.data.product_rows
      const Sdata = response.data.shop
      setAllProduct(Pdata)
      setShopData(Sdata)
      // console.log(Sdata);
    } catch (e) {
      console.error('this is e-message:', e.message)
      setErrorMessage(e.message)
    }
  }
  useEffect(() => {
    getProductCard()
  }, [])

  return (
    <>
      {/* <ShopMcard/> */}
      <ProductVideo />
      <YellowWave2 />
      <div className="race-by">
        <div className="a-productCardList">
          {allProduct.map((product) => (
            <ProductCard key={product.sid} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
