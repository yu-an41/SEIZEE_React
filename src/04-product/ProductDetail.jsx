import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./components/style/ProductDetail.scss";
import RecommendCard from "./components/RecommendCard";
import YellowWave2 from "./components/YellowWave2";
import { useParams, useLocation } from "react-router-dom";
import Carousel from "./components/Carousel";
import CollectContext from "./components/CollectContext";
import ProductComment from"./components/ProductComment";
import CommentArea from"./components/CommentArea";

function ProductDetail() {
  const { collection, setCollection, delCollect, addCollect } =
    useContext(CollectContext);
  const [heart, setHeart] = useState(false);
  const [detail, setDetail] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { sid } = useParams();
  const [qty, setQty] = useState(1);
  console.log({ collection });
  
  async function getDeatil() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/list?sid=${sid}`
      );
      const result = await axios.get(
        `http://localhost:3004/product/collect?sid=${sid}`
      );
      console.log(result.data.rows);
      if (result.data.rows.length !== 0) {
        setHeart(true);
      }
      const Pdata = response.data.product_rows;
      console.log(Pdata);
      setDetail(Pdata);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getDeatil();
  }, []);

  return (
    <>
      {/* <Carousel/> */}
      <div className="a-deatil">
        {detail.map((details, i) => {
          return (
            <div className="">
            <div className="a-productDetailWrapper" key={details.sid}>
              <div className="a-detailWrapper">
                <div className="a-shopNameWrapper">
                  <img src="/04-product/svg/map.svg" alt="" />
                  <h3>{details.shop_name}</h3>
                </div>
                <div className="a-productName">
                  <img src="/04-product/svg/bling.svg" alt="" />
                  <h3>{details.product_name}</h3>
                </div>
                <div className="a-informationWrapper">
                  <div className="a-productCategory">
                    <img
                      src={`/04-product/svg/${details.category_icon}`}
                      alt=""
                    />
                    <p>{details.category_name}</p>
                  </div>
                  <div className="a-shopDeadline">
                    <img src="/04-product/svg/shop.svg" alt="" />
                    <p>最後取餐時間{details.shop_deadline}</p>
                  </div>
                  <div className="a-productCollection">
                    {heart ? (
                      <img
                        src="/04-product/svg/heart.svg"
                        alt=""
                        onClick={() => delCollect(sid)}
                      />
                    ) : (
                      <img
                        src="/04-product/svg/collection.svg"
                        alt=""
                        onClick={() => addCollect(sid)}
                      />
                    )}
                    <p>加入收藏清單</p>
                  </div>
                </div>
                <div className="a-productDescription">
                  <p>{details.product_description}</p>
                </div>
              </div>
              <div className="a-priceContent">
                <div className="a-priceWrapper">
                  <div className="a-productPrice">
                    <p>$原價{details.unit_price}元</p>
                  </div>
                  <div className="a-productDiscount">
                    <img src="/04-product/svg/like.svg" alt="" />
                    <p>
                      $特價
                      {Math.round(
                        (details.unit_price * details.sale_price) / 10
                      )}
                      元
                    </p>
                  </div>
                </div>
                <div className="a-productQuantity">
                  <p>惜食剩餘數量</p>
                  <p className="a-qty">{details.inventory_qty}</p>
                </div>
                <div className="a-productQuantity">
                  <p>數量</p>
                  <button
                    id="minus"
                    onClick={() => {
                      if (qty > 1) {
                        setQty(qty - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    id="a-qty"
                    type="text"
                    value={qty ? qty : ""}
                    onChange={(q) => {
                      let a = q.target.value;
                      if (a > details.inventory_qty) {
                        return;
                      }
                      //保持state資料類型一致是數字
                      setQty(Number(q.target.value));
                    }}
                  />
                  <button
                    id="plus"
                    onClick={() => {
                      if (qty < details.inventory_qty) {
                        setQty(qty + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="a-addButton">
                  <p>加入購物車</p>
                  <img src="/04-product/svg/cart.svg" alt="" />
                </div>
              </div>
            </div>
            <ProductComment/>
            </div> 
          );
        })}
      </div>
      <YellowWave2 />
      <RecommendCard />
    </>
  );
}

export default ProductDetail;
