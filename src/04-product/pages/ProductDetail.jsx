import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import "../components/style/ProductDetail.scss";
import RecommendCard from "../components/RecommendCard";
import { useParams, useLocation, Link } from "react-router-dom";
import Carousel2 from "../components/Carousel2";
import CollectContext from "../../contexts/CollectContext";
import ProductComment from "../components/ProductComment";
import ProductCommentBoard from "../components/ProductCommentBoard";
import NavBar from "../../components/NavBar";
import YellowWave from "../../00-homepage/components/YellowWave";
import YellowWave2 from "../components/YellowWave2";
import Carousel1 from "../components/Carousel1";
import Footer from "../../components/Footer";
// import dotown from '../../logo-and-fonts/'

// cart
import CartInfoContext from "../../01-cart/contexts/CartInfoContext";

function ProductDetail() {
  const {
    collection,
    setCollection,
    delCollect,
    addCollect,
    checkList,
    handleClick,
  } = useContext(CollectContext);

  const { sid } = useParams();
  //detailData
  const [detail, setDetail] = useState([]);
  // console.log({ collection })
  //數量
  const [qty, setQty] = useState(1);
  //留言
  const [errorMessage, setErrorMessage] = useState([]);
  const [heart, setHeart] = useState(false);
  // console.log(heart)

  // cart
  const { cartItem, setCartItem, handleAddCart, updateItemQty } =
    useContext(CartInfoContext);
  const amount = useRef();

  async function getDeatil() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/list?sid=${sid}`
      );
      // console.log(sid);
      const result = await axios.get(
        `http://localhost:3004/product/collect?sid=${sid}`
      );
      // console.log(result.data.rows)
      if (result.data.rows.length !== 0) {
        handleClick(true);
      }
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
  }, [collection]);

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
          <Carousel1 sid={sid} />
        </div>
        <div className="a-productDatilsBigWrapper">
          <div className="a-deatil">
            {detail.map((v, i) => {
              return (
                <div className="a-productDetailWrapper" key={i}>
                  <div className="a-detailWrapper">
                    <div className="a-productName">
                      <img src="/04-product/svg/bling.svg" alt="" />
                      <h3 className="a-detailsTitle">{v.product_name}</h3>
                    </div>
                    <div className="a-productDescription">
                      <p className="a-detailsText">{v.product_description}</p>
                    </div>
                    <div className="a-informationWrapper">
                      <div className="a-productCategory">
                        <img
                          src={`/04-product/svg/${v.category_icon}`}
                          alt=""
                        />
                        <p className="a-detailsText">{v.category_name}</p>
                      </div>
                      {/* <div className="a-shopName">
                    <img src="/04-product/svg/map.svg" alt="" />
                    <h3 className="a-detailsTitle">{details.shop_}</h3>
                    </div> */}
                      <div className="a-shopDeadline">
                        <img src="/04-product/svg/shop.svg" alt="" />
                        <p className="a-detailText">
                          最後取餐時間{v.shop_deadline}
                        </p>
                      </div>
                      {/* 收藏愛心圖示判斷 */}
                      <div className="a-productCollection">
                        {collection ? (
                          <img
                            src="../../logo-and-fonts/pixel-heartClick.svg"
                            alt=""
                            onClick={() => {
                              delCollect(sid);
                              handleClick(false);
                            }}
                          />
                        ) : (
                          <img
                            src="../../logo-and-fonts/pixel-heartNormal.svg"
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
                    {/* <div className="a-productRating">{details.rating}</div> */}
                    <div className="a-shopNameWrapper">
                      <img src="/04-product/svg/map.svg" alt="" />
                      <Link to={`/shop/${v.shop_list_sid}`}>
                      <h3 className="a-detailsTitle">{v.shop_name}</h3>
                      </Link>
                    </div>
                  </div>
                  <div className="a-priceContent">
                    <div className="a-discountIconWrapper">
                      <div className="a-dicountWrapper">
                        <img src="/04-product/img/sale.png" alt="" />
                      </div>
                      <p>{v.sale_price}折</p>
                    </div>
                    <div className="a-priceWrapper">
                      <div className="a-productPrice">
                        <p className="a-detailsText">$原價{v.unit_price}元</p>
                      </div>
                      <div className="a-productDiscount">
                        <img src="/04-product/svg/like.svg" alt="" />
                        <p className="a-detailsDiscount">
                          惜食價
                          {v.product_price}元
                        </p>
                      </div>
                    </div>
                    <div className="a-productQuantity">
                      <p className="a-detailsText">惜食剩餘數量</p>
                      <p className="a-qty">{v.inventory_qty}</p>
                    </div>
                    <div className="a-productQuantity">
                      <p className="a-detailsText">數量</p>
                      <button
                        className="a-minusButton"
                        onClick={() => {
                          setQty(1);
                        }}
                      >
                        <p className="a-detailsText">min</p>
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
                          if (a > v.inventory_qty) {
                            setQty(v.inventory_qty);
                            return;
                          }
                          setQty(Number(q.target.value));
                        }}
                      />
                      <button
                        className="a-plus"
                        onClick={() => {
                          if (qty < v.inventory_qty) {
                            setQty(qty + 1);
                          }
                        }}
                      >
                        +
                      </button>
                      <button
                        className="a-minusButton"
                        onClick={() => {
                          setQty(v.inventory_qty);
                        }}
                      >
                        <p className="a-detailsText">max</p>
                      </button>
                    </div>
                    <div
                      className="a-addButton"
                      onClick={() => {
                        // console.log(details.shop_list_sid, sid, qty)
                        handleAddCart(v.shop_list_sid, sid, qty);
                      }}
                    >
                      <p className="a-detailsText">加入購物車</p>
                      <img src="/04-product/svg/cart.svg" alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="a-userCommentWrapper">
            <ProductComment sid={sid} />
            <div className="a-commentArea">
              <ProductCommentBoard sid={sid} />
            </div>
          </div>
          <YellowWave2 />
          <RecommendCard sid={sid} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
