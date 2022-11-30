import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Collection from "./CollectContext";
import "./style/ProductCard.scss";
import Select from "./Select";
import CollectContext from "./CollectContext";

function ProductCard({ product }) {
  const {
    collection,
    setCollection,
    collectList,
    setCollectList,
    collectionNum,
    setCollectionNum,
    addCollect,
    delCollect,
    handleClick,
  } = useContext(CollectContext);
console.log(collection);
  
const tempRef = useRef();
  const countOptions =product ? new Array(product.inventory_qty).fill(0).map((_, i) => ({
    text: i + 1,
    value: i + 1,
  })) : new Array(1).fill(0).map((_, i) => ({
    text: i + 1,
    value: i + 1,
  }));

  return (
    <div className="a-produtCardWrapper">
      {/* <Collection /> */}
      <div className="a-productCardContent" key={product.sid}>
        <div className="a-discountIconWrapper">
          {/* <div className="a-iconWrapper">
            <img src="/04-product/img/sale.png" alt="" />
          </div>
          <p>{product.sale_price}折</p> */}
        </div>
        <Link to={`/product/${product.sid}`}>
          <div className="a-productImgWrapper">
            <img src={`/04-product/img/${product.picture_url}`} alt="商品照" />
          </div>
        </Link>
        <div className="a-productCardTitle">
          <Link to={`/product/${product.sid}`}>
            <h3>{product.product_name}</h3>
          </Link>

          {collectionNum.length > 0 ? (
            collectionNum.includes(product.sid) ? (
              <img src="/04-product/svg/heart.svg" alt="" onClick={() => delCollect(product.sid)}/>) 
              : (
              <img src="/04-product/svg/collection.svg"
                alt="" onClick={() => addCollect(+product.sid)} /> )) 
              : ("")}
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

          <Select options={countOptions} ref={tempRef} />
          {/* <select>
            {new Array(product.inventory_qty).fill(0).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select> */}
        </div>
        <div className="a-addButton">
          <p>加入購物車</p>
          <img src="/04-product/svg/cart.svg" alt="" />
        </div>
        {/* <button onClick={()=>{
        console.log(tempRef.current.value)
      }}>get Value</button> */}
      </div>
    </div>
  );
}

export default ProductCard;
