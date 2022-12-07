import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { filter, product } from "ramda";
import { object } from "prop-types";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import YellowWave from "../../00-homepage/components/YellowWave";

const Products = () => {
  const [products, setProducts] = useState([]);
  //使用者打勾篩選條件
  const [filterCheck, setFilterCheck] = useState({
    fiftyPercentOff: false,
    priceUnder50: false,
    priceOver100: false,
    ratingOver4: false,
  });
  console.log(filterCheck);
  //post使用者打勾結果
  const [curFilter, setCurFilteres] = useState([]);
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

  // const filterDisplay = [
  //   "低於5折以下",
  //   "庫存低於3個",
  //   "價格100元以上",
  //   "價格50元以下",
  //   "評分4星以上",
  // ];

  const productFilter = [
    {
      label: "低於5折以下",
      value: "fiftyPercentOff",
    },
    {
      label: "價格50元以下",
      value: "priceUnder50",
    },
    {
      label: "價格100元以上",
      value: "priceOver100",
    },
    {
      label: "評分4星以上",
      value: "ratingOver4",
    },
  ];

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

  // const checkboxResult = (e) => {
  //   const val = +e.target.value;
  //   const c = e.target.checked;
  //   if (c) {
  //     if (!cardList.includes(val)) {
  //       setCardList([...cardList, val]);
  //     }
  //   } else {
  //     const newCard = cardList.filter((v) => v !== val);
  //     setCardList(newCard);
  //   }
  // };

  const handleSend = async () => {
    // return;
    // filterCheck.forEach(function (filterName) {
    //   curFilter[filterName] = 1
    // })
    const sendData = { categories };
    for (let k in filterCheck) {
      if (filterCheck[k]) {
        sendData[k] = 1;
      }
    }

    //curFilter['categories'] = categories
    // console.log('filter', curFilter);
    const { data } = await axios.post(
      `http://localhost:3004/product/productFilter`,
      sendData
    );
    //console.log(curFilter);
    console.log(data.filter_rows);

    setCurFilteres(data.filter_rows);

    // const filterData = data.filter_rows;
    // console.log("filter", filterData);
  };
  useEffect(() => {
    handleSend();
  }, [filterCheck]);

  // const showProducts = products.filter((p) => {
  //   const booleanArr = [];

  //   if (curFilter.includes("fiftyPercentOff")) {
  //     booleanArr.push(p.sale_price <= 5);
  //   }
  //   if (curFilter.includes("qtyEnough")) {
  //     booleanArr.push(p.qty <= 3);
  //   }
  //   if (curFilter.includes("underHundred")) {
  //     booleanArr.push(p.product_price < 100);
  //   }
  //   if (curFilter.includes("underFifty")) {
  //     booleanArr.push(p.product_price < 50);
  //   }
  //   if (curFilter.includes("fiveStarts")) {
  //     booleanArr.push(p.rating === 5);
  //   }
  //   if (curFilter.includes("fourStarts")) {
  //     booleanArr.push(p.rating >= 4);
  //   }
  //   if (curFilter.includes("threeStarts")) {
  //     booleanArr.push(p.rating >= 3);
  //   }
  //   return booleanArr.every((boo) => boo === true);
  // });

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
                    <div key={v.value}>
                      <input
                        type="checkbox"
                        checked={filterCheck[v.value]}
                        value={v.value}
                        onChange={(e) => {
                          console.log(e.currentTarget);
                          console.log(e.currentTarget.checked);
                          console.log(e.currentTarget.value);
                          console.log({
                            ...filterCheck,
                            [e.currentTarget.value]: e.currentTarget.checked,
                          });
                          setFilterCheck({
                            ...filterCheck,
                            [e.currentTarget.value]: e.currentTarget.checked,
                          });

                          /*
                      setFilterCheck(old=>{
                        return {...old, [v.value]: e.currentTarget.checked}
                      })        
*/
                          /*
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
                      */
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
          <div className="a-porductCards">
            <div className="a-filterProductCard">
              {/* <div className="a-oldOpthion">
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
          }
      </div> */}
              {curFilter.map((p, i) => {
                return (
                  <div className="a-filterProudctWrapper">
                    {p.name}
                    <div className="a-filterImgWrapper">
                      <img src={`/04-product/img/${p.picture_url}`} alt="" />
                    </div>
                    <h2 className="a-filterProudctName">{p.product_name}</h2>
                    <div className="a-filterTextWrapper">
                      <p className="a-filterText">{p.product_price}元</p>
                      <p className="a-filterText">{p.sale_price}折</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="a-filterCardButton" onClick={handleSend}>
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
