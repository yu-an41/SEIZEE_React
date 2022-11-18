import React from 'react'
import './ProductCard.scss'

function ProductCard() {
  return (
    <>
      <div className="a-produtCardWrapper">
        <div className="a-productCardContent">
          <div className="a-productImgWrapper">
            <img src="/img/10008.jpg" alt="" />
          </div>
          <div className="a-productCardTitle">
            <h3>玉米濃湯麵包</h3>
            <img src="svg/collection.svg" alt="" />
          </div>
          <div className="a-priceWrapper">
            <div className="a-productPrice">
              <p>原價</p>
              <p>$150元</p>
            </div>
            <div className="a-productDiscount">
              <img src="./svg/like.svg" alt="" />
              <p>折價</p>
              <p>$90元</p>
            </div>
          </div>
          <div className="a-productQuantity">
            <p>惜食剩餘數量</p>
            <p className="a-quantity">6</p>
            <p>數量</p>
            <p className="a-quantity2">
              2
              <img src="svg/triangle.svg" alt="" />
            </p>
          </div>
          <div className="a-addButton">
            <p>加入購物車</p>
            <img src="svg/cart.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
