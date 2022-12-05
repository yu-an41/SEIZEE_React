import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../components/style/ProductDetail.scss";
import RecommendCard from "../components/RecommendCard";
import { useParams, useLocation } from "react-router-dom";
import Carousel2 from "../components/Carousel2";
import CollectContext from "../../contexts/CollectContext";
import ProductComment from "../components/ProductComment";
import NavBar from "../../components/NavBar";
import YellowWave from "../../00-homepage/components/YellowWave";
import YellowWave2 from "../components/YellowWave2";
import Carousel1 from "../components/Carousel1";
import Carousel from "../components/Carousel";

function ProductDetail() {
  const {
    collection,
    setCollection,
    delCollect,
    addCollect,
    checkList,
    handleClick,
  } = useContext(CollectContext);

  //接收父層sid
  const { sid } = useParams();
  //detailData
  const [detail, setDetail] = useState([]);
  console.log({ collection });
  //數量
  const [qty, setQty] = useState(1);
  //留言
  const [doRerender, setDoRerender] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  // const [heart, setHeart] = useState(false);
  // console.log(heart);

  async function getDeatil() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/list?sid=${sid}`
      );
      // console.log(sid);
      // const result = await axios.get(
      //   `http://localhost:3004/product/collect?sid=${sid}`
      // );
      // // console.log(result.data.rows)
      // if (result.data.rows.length !== 0) {
      //   handleClick(true);
      // }
      const Pdata = response.data.product_rows;
      // console.log(Pdata)
      setDetail(Pdata);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getDeatil();
  }, [collection, doRerender]);

  return (
    <>
      <div className="y-index-container">
        <div
          className="a-navBarWrapper"
          style={{
            height: "70px",
            backgroundColor: "#fad249",
          }}
        ></div>
        <section className="y-section y-section-nav-bg">
          <NavBar />
        </section>
        <section className="y-section y-section-search"></section>
        <section className="y-section y-section-merch"></section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <div className="a-carouselBigWrapper">
          <Carousel/>
          <Carousel1 />
          <Carousel2 sid={sid} />
        </div>
        <div className="a-deatil">
          {detail.map((details, i) => {
            return (
              <div className="a-productDetailWrapper" key={i}>
                <div className="a-detailWrapper">
                  <div className="a-shopNameWrapper">
                    <img src="/04-product/svg/map.svg" alt="" />
                    <h3 className="a-detailsTitle">{details.shop_name}</h3>
                  </div>
                  <div className="a-productName">
                    <img src="/04-product/svg/bling.svg" alt="" />
                    <h3 className="a-detailsTitle">{details.product_name}</h3>
                  </div>
                  <div className="a-informationWrapper">
                    <div className="a-productCategory">
                      <img
                        src={`/04-product/svg/${details.category_icon}`}
                        alt=""
                      />
                      <p className="a-detailsText">{details.category_name}</p>
                    </div>
                    {/* <div className="a-shopName">
                    <img src="/04-product/svg/map.svg" alt="" />
                    <h3 className="a-detailsTitle">{details.shop_}</h3>
                    </div> */}
                    <div className="a-shopDeadline">
                      <img src="/04-product/svg/shop.svg" alt="" />
                      <p className="a-detailText">
                        最後取餐時間{details.shop_deadline}
                      </p>
                    </div>
                    {/* 收藏愛心圖示判斷 */}
                    <div className="a-productCollection">
                      {collection ? (
                        <img
                          src="/04-product/svg/heart.svg"
                          alt=""
                          onClick={() => {
                            delCollect(sid);
                            handleClick(false);
                          }}
                        />
                      ) : (
                        <img
                          src="/04-product/svg/collection.svg"
                          alt=""
                          onClick={() => {
                            addCollect(sid);
                            handleClick(true);
                          }}
                        />
                      )}
                      <p className="a-detailText">加入收藏清單</p>
                    </div>
                  </div>
                  <div className="a-productDescription">
                    <p className="a-detailsText">{details.product_description}</p>
                  </div>
                </div>
                <div className="a-priceContent">
                  <div className="a-priceWrapper">
                    <div className="a-productPrice">
                      <p className="a-detailsText">$原價{details.unit_price}元</p>
                    </div>
                    <div className="a-productDiscount">
                      <img src="/04-product/svg/like.svg" alt="" />
                      <p className="a-detailsText">
                        $特價
                        {details.product_price}元
                      </p>
                    </div>
                  </div>
                  <div className="a-productQuantity">
                    <p className="a-detailsText">惜食剩餘數量</p>
                    <p className="a-qty">{details.inventory_qty}</p>
                  </div>
                  <div className="a-productQuantity">
                    <p className="a-detailsText">數量</p>
                    <button
                      className="a-minusButton"
                      onClick={() => {
                        setQty(1);
                      }}
                    >
                      min
                    </button>
                    <button
                      className="a-minus"
                      onClick={() => {
                        if (qty > 1) {
                          setQty(qty - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <input
                      className="a-qtyInput"
                      type="text"
                      value={qty ? qty : ""}
                      onChange={(q) => {
                        let a = q.target.value;
                        if (a > details.inventory_qty) {
                          setQty(details.inventory_qty);
                          return;
                        }
                        setQty(Number(q.target.value));
                      }}
                    />
                    <button
                      className="a-plus"
                      onClick={() => {
                        if (qty < details.inventory_qty) {
                          setQty(qty + 1);
                        }
                      }}
                    >
                      +
                    </button>
                    <button
                      className="a-minusButton"
                      onClick={() => {
                        setQty(details.inventory_qty);
                      }}
                    >
                      max
                    </button>
                  </div>
                  <div className="a-addButton">
                    <p className="a-detailsText">加入購物車</p>
                    <img src="/04-product/svg/cart.svg" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ProductComment sid={sid} />
        <YellowWave2 />
        {/* <RecommendCard sid={sid} /> */}
      </div>
    </>
  );
}

export default ProductDetail;
