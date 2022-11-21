import { useState, useEffect } from 'react'
import axios from 'axios'
import './components/style/ProductDetail.scss'
import RecommendCard from './components/RecommendCard'

function ProductDetail() {
  const [detail, setDetail] = useState([])
  const [errorMessage, setErrorMessage] = useState([])

  async function getDeatil() {
    try {
      const response = await axios.get(
        'http://localhost:3002/product?shop_list_sid=3'
      )
      console.log("response.data.rows")
      const Pdata = response.data.rows
      setDetail(Pdata)}
    catch(e) {
      console.error(e.message)
      setErrorMessage(e.message)
     }
    }
  useEffect(() => {
    getDeatil()
  }, [])

  return (
    <>
      <div className="a-productDetailWrapper">
        <div className="a-detailWrapper">
          <div className="a-shopNameWrapper">
            <img src="04-product/svg/map.svg" alt="" />
            <h3>{detail.shop_name}</h3>
          </div>
          <div className="a-productName">
            <img src="04-product/svg/bling.svg" alt="" />
            <h3>{detail.product_name}</h3>
          </div>
          <div className="a-informationWrapper">
            <div className="a-productCategory">
              <img src="04-product/svg/drink.svg" alt="" />
              <p>{detail.category_name}</p>
            </div>
            <div className="a-shopDeadline">
              <img src="04-product/svg/shop.svg" alt="" />
              <p>{detail.shop_deadline}</p>
            </div>
            <div className="a-productCollection">
              <img src="04-product/svg/collection.svg" alt="" />
              <p>加入收藏清單</p>
            </div>
          </div>
          <div className="a-productDescription">
            <p>{detail.product_description}</p>
          </div>
        </div>
        <div className="a-priceContent">
          <div className="a-priceWrapper">
            <div className="a-productPrice">
              <p>$原價{detail.unit_price}元</p>
            </div>
            <div className="a-productDiscount">
              <img src="./04-product/svg/like.svg" alt="" />
              <p>$特價{detail.sale_price}元</p>
            </div>
          </div>
          <div className="a-productQuantity">
            <p>惜食剩餘數量</p>
            <p className="a-qty">{detail.inventory_qty}</p>
          </div>
          <div className="a-quantity">
            <p>數量</p>
            <div className="a-quantityButton">
              <p>-</p>
              <p>+</p>
            </div>
          </div>
          <div className="a-addButton">
            <p>加入購物車</p>
            <img src="04-product/svg/cart.svg" alt="" />
          </div>
        </div>
      </div>
      <RecommendCard />
    </>
  )
}

export default ProductDetail
