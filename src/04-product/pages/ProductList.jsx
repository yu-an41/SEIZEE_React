import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard.jsx";
import "../components/style/ProductDetail.scss";
import ProductVideo from "../components/ProductVideo";
import NavBar from "../../components/NavBar.js";
import YellowWave from "../../00-homepage/components/YellowWave.js";
import YellowWave2 from "../components/YellowWave2";

// // 01-cart
// import CartInfoContext from '../01-cart/contexts/CartInfoContext'
// // 01-cart
// const { cartItem, setCartItem } = useContext(CartInfoContext)
// const [productDataFromCard, setProductDataFrpmCard] = useContext()

function ProductList() {
  const [allProduct, setAllProduct] = useState([]);
  const [shopData, setShopData] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { shop_list_sid } = useParams();

// cart
import CartInfoContext from '../../01-cart/contexts/CartInfoContext'

function ProductList() {
  const [allProduct, setAllProduct] = useState([])
  const [shopData, setShopData] = useState([])
  const [errorMessage, setErrorMessage] = useState([])
  const { shop_list_sid } = useParams()

  // cart
  const { cartItem, setCartItem, handleAddCart, updateItemQty } =
    useContext(CartInfoContext)
  const [productDataFromCard, setProductDataFromCard] = useState([{}])

  async function getProductCard() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/list?shop_list_sid=${shop_list_sid}`
      );
      console.log("this is reponse:", response);
      const Pdata = response.data.product_rows;
      const Sdata = response.data.shop;
      setAllProduct(Pdata);
      setShopData(Sdata);
      console.log(Sdata);
    } catch (e) {
      console.error("this is e-message:", e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getProductCard();
  }, []);

  return (
    <>
    <div className="y-index-container">
    <div className="a-navBarWrapper" style={{
        height: '70px',
        backgroundColor: '#fad249'
      }}></div>
      <section className="y-section y-section-nav-bg">
            <NavBar />
          </section>
        <section className="y-section y-section-search"></section>
        <section className="y-section y-section-merch"></section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <div className="a-videoWrapper" style={{paddingTop:'50px'}}>
        <ProductVideo />
        </div>
        <YellowWave2 />
        <div className="race-by">
          <div className="a-productCardList">
            {allProduct.map((product) => (
              <ProductCard key={product.sid} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
