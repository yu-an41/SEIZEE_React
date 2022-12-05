import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { filter, product } from "ramda";
import { object } from "prop-types";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cardList, setCardList] =useState([]);
  // const [curFilters, setCurFilteres] = useState([]);
  const location = useLocation();

  const categories = new URLSearchParams(window.location.search).get(
    "categories"
  );
  async function getFilter() {
    try {
      const response = await axios.get(
        ` http://localhost:3004/product/category?category_sid=${categories}`
      );
      // console.log(data);
      const categoryData = response.data.category_rows;
      // console.log("initial", categoryData);
      setProducts(categoryData);
    } catch (e) {
      console.error(e.message);
    }
  }
  useEffect(() => {
    getFilter();
  }, []);

  const filterOptions = {
    fiftyPercentOff: "5折以下",
    qtyEnough: "庫存告急",
    underHundred: "100元以下",
    underFifty: "50元以下",
    fiveStarts: "評分5顆星",
    // foutStarts: "評分4顆星以上",
    // threeStarts: "評分3顆星以上",
  };
  const filterOptionsKeys = Object.keys(filterOptions);
  const filterOptionsVals = Object.values(filterOptions);
  // console.log(filterOptionsVals);

  filterOptionsVals = filterOptionsVals.filter((v) => !!v)
  setFilter(filterOptionsVals)
  // if (filterOptionsVals.length !== 0) {
  //   setCardsate(0)
  // } else {
  //   setCardsate(1)
  // }
  
  const checkboxClick = (e) => {
    const val = +e.target.value;
    const c = e.target.checked;
    if (c) {
      if (!cardList.includes(val)) {
        setCardList([...cardList, val]);
      }
    } else {
      const newCard = cardList.filter((v) => v !== val);
      setCardList(newCard);
    }
  };

    
  // const showProducts = products.filter((p) => {
  //   const booleanArr = []; 

  //   if (curFilters.includes("fiftyPercentOff")) {
  //     booleanArr.push(p.sale_price <= 5);
  //   }
  //   if (curFilters.includes("qtyEnough")) {
  //     booleanArr.push(p.qty <= 3);
  //   }
  //   if (curFilters.includes("underHundred")) {
  //     booleanArr.push(p.product_price < 100);
  //   }
  //   if (curFilters.includes("underFifty")) {
  //     booleanArr.push(p.product_price < 50);
  //   }
  //   if (curFilters.includes("fiveStarts")) {
  //     booleanArr.push(p.rating === 5);
  //   }
  //   if (curFilters.includes("fourStarts")) {
  //     booleanArr.push(p.rating >= 4);
  //   }
  //   if (curFilters.includes("threeStarts")) {
  //     booleanArr.push(p.rating >= 3);
  //   }
  //   return booleanArr.every((boo) => boo === true);
  // });

  return (
    <>
      {/* SideBar */}
      <div className="a-sideBarWrapper">
        {/* <div className="a-aladdinWrapper">
        <img src="/04-product/svg/aladin.png" alt="" />
      </div> */}
        <div className="a-searchBarWrapper">
          {/* <div className="a-sideBarOptionsWrapper">
            {filterOptionsKeys.map((v, i) => {
              return (
                <div className="a-filterOptionsWrapper" key={i}> 
                  <input
                    type="checkbox"
                    className="a-sideBarCheckBox"
                    checked={state}
                    value={v}
                    onChange={setstate}
                  /> 
                   <label
                    className="a-sideBarLabel"
                    htmlFor={`sideBarCheckBox${i}`}
                    key={i}
                  ></label>
                </div>
              );
            })}
          </div> */}
          
        </div>
        {/* ProductCard */}
        <div className="a-filterProductCard">
          {products.map((p, i) => {
            return (
              <div className="a-filterProudctWrapper" key={{ i }}>
                <div className="a-filterImgWrapper">
                  <img src={`/04-product/img/${p.picture_url}`} alt="" />
                </div>
                <h2 className="a-filterProudctName">{p.product_name}</h2>
                <div className="a-filterTextWrapper">
                  <p className="a-filterText">{p.product_price}元</p>
                  <p className="a-filterText">{p.sale_price}折</p>
                </div>
                {/* <p className="a-filterText">剩餘數量{p.qty}</p> */}
              </div>
            );
          })}
        </div>
        {/* <button className="a-filterBtn" onClick={handleSendFilter}>送出</button> */}
      </div>
    </>
  );
};

export default Products;
