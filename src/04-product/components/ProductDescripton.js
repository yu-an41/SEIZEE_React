import React from 'react'
import './ProductDescripton.scss'

function ProductDescripton() {
  return (
    <>
      <div className="a-productDetailWrapper">
        <div class="a-detailWrapper">
          <div class="a-shopNameWrapper">
            <img src="svg/map.svg" alt="" />
            <h3>咖央</h3>
          </div>
          <div className="a-productName">
            <img src="svg/bling.svg" alt="" />
            <h3>焦糖肉桂捲</h3>
          </div>
          <div class="a-informationWrapper">
            <div className="a-productCategory">
              <img src="svg/drink.svg" alt="" />
              <p>飲料</p>
            </div>
            <div className="a-shopDeadline">
              <img src="svg/shop.svg" alt="" />
              <p>取餐時間</p>
            </div>
            <div className="a-productCollection">
              <img src="svg/collection.svg" alt="" />
              <p>加入收藏清單</p>
            </div>
          </div>
          <div className="a-productDescription">
            <p>
              不敢吃肉桂的朋朋也能接受，蛋糕口感濕潤入口很溫順，加入蘋果點綴讓味道增添了更多的層次，不會只有肉桂單純的香味，另外店裡還有肉桂蛋糕，覺得兩款蛋糕都很好吃～選不出來！
            </p>
          </div>
        </div>
        <div className="a-priceContent">
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
            <p className="a-qty">6</p>
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
            <img src="svg/cart.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDescripton
