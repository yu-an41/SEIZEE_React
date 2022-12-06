import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { filter, product } from "ramda";
import { object } from "prop-types";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState([]);
  const [cardList, setCardList] = useState([]);
  // const [curFilters, setCurFilteres] = useState([]);
  const location = useLocation();

  const categories = new URLSearchParams(window.location.search).get(
    "category_sid"
  );
  console.log(categories);

  async function getFilter() {
    try {
      const response = await axios.get(
        ` http://localhost:3004/product/category?category_sid=${categories}`
      );
      // console.log(data);
      const categoryData = response.data.category_rows;
      // console.log("initial", categoryData);
      setProducts(categoryData);
      // console.log(categoryData);
    } catch (e) {
      console.error(e.message);
    }
  }
  useEffect(() => {
    getFilter();
  }, []);

  // const filterO = {
  //   "5折以下":true,
  //   "庫存告急":true,
  //   "100元以下":true,
  //   "50元以上":true,
  //   "評分5顆星":true
  // }
  // console.log(filterO["5折以下"])

  const filterDisplay = [
    "低於5折以下",
    "庫存低於3個",
    "價格100元以上",
    "價格50元以下",
    "評分4星以上",
  ];

  const productFilter =[
    {
      label:'低於5折以下',
      value:5,
    },
    { 
      label:'庫存低於3個',
      value:3,
    },
    { 
      label:'價格100元以上',
      value:100,
    },
    { 
      label:'價格50元以下',
      value:50,
    },
    { 
      label:'評分4星以上',
      value:4,
    },
  ]
  //使用者打勾篩選條件
  const [filterCheck, setFilterCheck] = useState([]);
  console.log(filterCheck);

  // const filterOptions = {
  //   fiftyPercentOff: "5折以下",
  //   qtyUrgent: "庫存告急",
  //   underHundred: "100元以下",
  //   overFifty: "50元以上",
  //   fiveStarts: "評分5顆星",
  // };
  // const filterOptionsKeys = Object.keys(filterOptions);
  // const filterOptionsVals = Object.values(filterOptions);
  // console.log(filterOptionsVals);

  // const OptionsVals = filterOptionsVals.filter((v) => !!v)
  // setFilter(OptionsVals)
  // if (filterOptionsVals.length !== 0) {
  //   setCardsate(0)
  // } else {
  //   setCardsate(1)
  // }

  const checkboxResult = (e) => {
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
    <div className="a-productCardsWrapper">
      {/* SideBar */}
      <div className="a-sideBarWrapper">
        {/* <div className="a-aladdinWrapper">
        <img src="/04-product/svg/aladin.png" alt="" />
      </div> */}
        <div className="a-searchBarWrapper">
          <div className="a-sideBarOptionsWrapper">
            {productFilter.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    checked={filterCheck.includes(v)}
                    value={v.value}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (filterCheck.includes(value)) {
                        // 如果此項目值在state陣列中 -> 移出state陣列
                        const newFilterCheck = filterCheck.filter(
                          (v2, i2) => v2 !== value
                        );
                        setFilterCheck(newFilterCheck);
                      } else {
                        // 如果不在此state陣列中 -> 加到state陣列中
                        const newLikeList = [...filterCheck, value];
                        setFilterCheck(newLikeList);
                      }
                    }}
                  />
                  <label>{v.label}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ProductCard */}
      <div className="a-filterProductCard">
        {products
          .filter((v, i) => {
            let flag = false;
            if (filterCheck.includes("5折以下")) {
              flag = v.sale_price < 5;
            }
            if (filterCheck.includes("50元以下")) {
              flag = v.product_price < 50;
            }
            if (filterCheck.includes("100元以下")) {
              flag = v.product_price < 100;
            }
            if (filterCheck.includes("庫存告急")) {
              flag = v.qty < 5;
            }
            if (filterCheck.includes("評分5顆星")) {
              flag = v.rating === 5;
            }

            if (filterCheck.length === 0) flag = true;

            return flag;
          })
          .map((p, i) => {
            return (
              <div className="a-filterProudctWrapper" key={i + p.product_name}>
                <div className="a-filterImgWrapper">
                  <img src={`/04-product/img/${p.picture_url}`} alt="" />
                </div>
                <h2 className="a-filterProudctName">{p.product_name}</h2>
                <div className="a-filterTextWrapper">
                  <p className="a-filterText">{p.product_price}元</p>
                  <p className="a-filterText">{p.sale_price}折</p>
                </div>
                <p className="a-filterText">剩餘數量{p.qty}</p>
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
