import { useState, useEffect } from "react";
import { PRODUCT } from "../my-config";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import HeadWave from "../components/HeadWave";
import YellowWave2 from "./components/YellowWave2";
import './components/style/ProductList.scss'
import { useParams } from 'react-router-dom'

function ProductList() {
  const [allProduct, setAllProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const{shop_list_sid}=useParams()
  console.log(shop_list_sid);

  // const location = useLocation()
  // console.log(location)

  async function getProductCard() {
    try {
      const response = await axios.get(
        `http://localhost:3002/product/list?shop_list_sid=${shop_list_sid}`
      );
      console.log('this is reponse:',response);
      const Pdata = response.data.product_rows;
      setAllProduct(Pdata);
    } catch (e) {
      console.error('this is e-message:',e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getProductCard();
  }, []);

  return (
    <>
      <YellowWave2 />
      <div className="a-productCardList">
        <ProductCard allProduct={allProduct} />
      </div>
    </>
  );
}

export default ProductList;
