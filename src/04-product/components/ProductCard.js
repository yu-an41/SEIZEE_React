import React from "react";
import { Link } from "react-router-dom";
import "./style/ProductCard.scss";

function ProductCard({ allProduct }) {
  console.log(allProduct);
  return (
    <>
       {allProduct.map((product, i) => {
          return (
            <Link to={`/product/${product.sid}`}>
      <div className="a-produtCardWrapper">
            <div className="a-productCardContent" key={product.sid}>
            <div className="a-discountIconWrapper">
                  <div class="a-iconWrapper">
                    <img src="/04-product/img/sale.png" alt=""/>
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
                  <p>$特價
                      {Math.round(
                        (product.unit_price * product.sale_price) / 10
                      )}
                      元</p>
                </div>
              </div>
              <div className="a-productQuantity">
                <p>惜食剩餘數量</p>
                <p className="a-quantity">{product.inventory_qty}</p>
                <p>數量</p>
                <p className="a-quantity2">
                  {product.inventory_qty}
                  <img src="/04-product/svg/triangle.svg" alt="" />
                </p>
              </div>
              <div className="a-addButton">
                <p>加入購物車</p>
                <img src="/04-product/svg/cart.svg" alt="" />
              </div>
            </div>
            </div>
            </Link>
          );
        })}
      
    </>
  );
}

export default ProductCard;
