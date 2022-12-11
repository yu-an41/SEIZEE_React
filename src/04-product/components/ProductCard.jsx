import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Collection from "../../contexts/CollectContext";
import "../components/style/ProductCard.scss";
import Select from "../components/Select";
import CollectContext from "../../contexts/CollectContext";
import { Skeleton } from "@mui/material";

// cart
import CartInfoContext from "./../../01-cart/contexts/CartInfoContext";
import log from "eslint-plugin-react/lib/util/log";

function ProductCard({ product, isLoading }) {
  const {
    collection,
    setCollection,
    collectList,
    setCollectList,
    collectionNum,
    setCollectionNum,
    addCollect,
    delCollect,
    checkList,
    handleClick,
  } = useContext(CollectContext);
  // console.log(collectionNum);

  const tempRef = useRef();
  const countOptions = product
    ? new Array(product.inventory_qty).fill(0).map((_, i) => ({
        text: i + 1,
        value: i + 1,
      }))
    : new Array(1).fill(0).map((_, i) => ({
        text: i + 1,
        value: i + 1,
      }));

  // cart
  const { cartItem, setCartItem, handleAddCart, updateItemQty } =
    useContext(CartInfoContext);
  // const [productDataFromCard, setProductDataFromCard] = useState([{}])
  const { shop_list_sid } = useParams();
  // console.log(shop_list_sid)

  return (
    <div className="a-produtCardWrapper">
      <div className="a-productCardContent" key={product.sid}>
        <div className="a-discountIconWrapper">
          <div className="a-saleWrapper">
            <img src="/04-product/img/sale.png" alt="" />
          </div>
          <p className="a-productText">{product.sale_price}折</p>
        </div>
        <Link to={`/product/${product.sid}`}>
          <div className="a-productImgWrapper">
            <img src={`/04-product/img/${product.picture_url}`} alt="商品照" />
          </div>
        </Link>
        <div className="a-productCardTitle">
          <Link to={`/product/${product.sid}`}>
            <div className="a-prodcutIconWrapper">
              <img src="/04-product/svg/strawberry.svg" alt="" />
              <p className="a-productText">{product.product_name}</p>
            </div>
          </Link>
          {/* 判斷收藏愛心圖示 */}
          {collectionNum.length > 0 ? (
            collectionNum.includes(product.sid) ? (
              <img
                className="a-heart"
                src="/04-product/svg/heart.svg"
                alt=""
                onClick={() => {
                  delCollect(product.sid);
                  handleClick(false);
                }}
              />
            ) : (
              <img
                className="a-heart"
                src="/04-product/svg/collection.svg"
                alt=""
                onClick={() => {
                  addCollect(+product.sid);
                  handleClick(true);
                }}
              />
            )
          ) : (
            <img
              src="/04-product/svg/collection.svg"
              alt=""
              onClick={() => {
                addCollect(+product.sid);
                handleClick(true);
              }}
            />
          )}
        </div>
        <div className="a-priceWrapper">
          {/* <div className="a-productPrice"> */}
          <p className="a-productUnitPriceText">$原價{product.unit_price}元</p>
          {/* </div> */}
          <div className="a-productDiscount">
            <img src="/04-product/svg/like.svg" alt="" />
            <p className="a-productPriceText">
              $惜食價
              {product.product_price}元
            </p>
          </div>
        </div>
        <div className="a-productQuantity">
          <p className="a-productText">惜食剩餘數量</p>
          <p className="a-productInventory">{product.inventory_qty}</p>
          <p className="a-productText">數量</p>

          <Select options={countOptions} ref={tempRef} />
          {/* <select>
            {new Array(product.inventory_qty).fill(0).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select> */}
        </div>
        <div
          className="a-addButton"
          onClick={() => {
            // const prodData = {
            //   sid: +product.sid,
            //   picture: `/04-product/img/${product.picture_url}`,
            //   name: product.product_name,
            //   price: product.unit_price,
            //   sale_price: Math.round(
            //     (product.unit_price * product.sale_price) / 10
            //   ),
            //   inventory: product.inventory_qty,
            // }

            // console.log(tempRef.current.value)
            // shop_list_sid = +shop_list_sid
            console.log(product.shop_list_sid);
            handleAddCart(
              product.shop_list_sid,
              product.sid,
              tempRef.current.value
            );
          }}
        >
          <p className="a-productText">加入購物車</p>
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
