import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './style/ProductCard.scss'
import CartInfoContext from './../../01-cart/contexts/CartInfoContext'
import log from 'eslint-plugin-react/lib/util/log'
import { logRoles } from '@testing-library/react'

function ProductCard({ product }) {
  // console.log(product)
  // const [quantity, setQuantity] = useState([])
  // 購物車項目
  const {handleAddCart} = useContext(CartInfoContext)
  const [productQty, setProductQty] = useState(1)
  const [productInfo, setProductInfo] = useState([
    {
      sid: 1,
      sale_price: 1,
      unit_price: 1,
      picture_url: '',
      product_name: '',
      inventory_qty: 5,
    },
  ])

  // console.log(allProduct)
  return (
    <>
      <div className="a-produtCardWrapper">
        {/* <Collection /> */}
        <div className="a-productCardContent" key={product.sid}>
          <div className="a-discountIconWrapper">
            <div className="a-iconWrapper">
              <img src="/04-product/img/sale.png" alt="" />
            </div>
            <p>{product.sale_price}折</p>
          </div>
          <div className="a-productImgWrapper">
            <img src={`/04-product/img/${product.picture_url}`} alt="商品照" />
          </div>
          <div className="a-productCardTitle">
            <h3>{product.product_name}</h3>
            <img src="/04-product/svg/collection.svg" alt="" />
          </div>
          <div className="a-priceWrapper">
            <div className="a-productPrice">
              <p>$原價{product.unit_price}元</p>
            </div>
            <div className="a-productDiscount">
              <img src="./04-product/svg/like.svg" alt="" />
              <p>
                $特價
                {Math.round((product.unit_price * product.sale_price) / 10)}元
              </p>
            </div>
          </div>
          <div className="a-productQuantity">
            <p>惜食剩餘數量</p>
            <p className="a-quantity">{product.inventory_qty}</p>
            <p>數量</p>
            <select
              onChange={(e) => {
                setProductQty(e.target.value)
              }}
            >
              {new Array(product.inventory_qty).fill(0).map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            {/* <p className="a-quantity2">
            {product.inventory_qty}
            <img src="/04-product/svg/triangle.svg" alt="" />
          </p> */}
          </div>
          <div
            className="a-addButton"
            onClick={() => {
              handleAddCart(productInfo, productQty)
              console.log(product.sid)
              console.log(productInfo)
            }}
          >
            <p>加入購物車</p>
            <img src="/04-product/svg/cart.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
