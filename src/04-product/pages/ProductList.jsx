import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useFetcher } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard.jsx";
import "../components/style/ProductCard.scss";
import ProductVideo from "../components/ProductVideo";
import NavBar from "../../components/NavBar.js";
import YellowWave from "../../00-homepage/components/YellowWave.js";
import YellowWave2 from "../components/YellowWave2";
import Footer from "../../components/Footer.js";
import Runman from "../../components/Runman.js";

// 01-cart
import CartInfoContext from "./../../01-cart/contexts/CartInfoContext";

function ProductList() {
  const [allProduct, setAllProduct] = useState([]);
  const [shopData, setShopData] = useState([
    {
      shop_name: "",
      shop_address_detail: "",
      shop_opentime: "",
      shop_closetime: "",
      shop_phone: "",
    },
  ]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { shop_list_sid } = useParams();

  async function getProductCard() {
    // 01-cart
    // const { cartItem, setCartItem, handleAddCart, updateItemQty } = useContext(CartInfoContext)
    // const [productDataFromCard, setProductDataFromCard] = useState([{}])

    try {
      const response = await axios.get(
        `http://localhost:3004/product/list?shop_list_sid=${shop_list_sid}`
      );
      // console.log("this is reponse:", response);
      const Pdata = response.data.product_rows;
      const Sdata = response.data.shop;
      setAllProduct(Pdata);
      setShopData(Sdata);
      // console.log(Pdata);
    } catch (e) {
      console.error("this is e-message:", e.message);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    getProductCard();
  }, []);
  /*
  useEffect = (() => {
    setShopData([{
      shop_name:allProduct[0].shop_name,
      shop_address_detail:allProduct[0].shop_address_detail,
    }])
  })
*/
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
        <div className="a-shopInformation">
          <div className="a-shopInformationWrapper">
            <div className="a-shopInf">
              <img src="/04-product/svg/bling.svg" alt="" />
              <p className="a-detailsTitle">{shopData.shop_name}</p>
            </div>
            <div className="a-shopInf">
              <img src="/04-product/svg/rocket.png" alt="" style={{width:'38px'}} />
              <p className="a-detailsText">營業時間{shopData.shop_opentime}-</p>
              <p className="a-detailsText"> {shopData.shop_closetime}</p>
            </div>
            <div className="a-shopInf">
              <img src="/04-product/svg/tel.png" alt="" />
              <p className="a-detailsText">電話{shopData.shop_phone}</p>
            </div>
            <div className="a-shopInf">
              <img src="/04-product/svg/map.svg" alt="" />
              <p className="a-detailsText">地址{shopData.shop_address_detail}</p>
            </div>
          </div>
          <div className="a-videoWrapper">
            <ProductVideo />
          </div>
        </div>
      </div>
      <div className="a-seizeeIconWrapper">
        <div className="a-aladdinWrapper">
          <img src="/04-product/svg/aladdin.png" alt="" />
        </div>
        <div className="a-avengersWrapper">
          <img src="/04-product/svg/avengers.png" alt="" />
        </div>
      </div>
      <YellowWave2 />
      <div className="race-by">
        <div className="a-productCardTable">
          <div className="a-productCardList">
            {allProduct.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Runman />
      <Footer />
    </>
  );
}

export default ProductList;
