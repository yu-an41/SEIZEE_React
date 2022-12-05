import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "../components/style/ProductFilter.scss";
import YellowWave from "../../00-homepage/components/YellowWave.js";
import ReactStars from "react-rating-stars-component";

function ProductFilter() {
  //種類data
  const [filterList, setFilterList] = useState([]);
  //使用者勾選種類checkbox
  const [choice, setchoice] = useState([]);
  //使用者勾選sideBar
  const [productFilter, setProductFilter] = useState([""]);

  async function getFilter(categoriesString) {
    try {
      const response = await axios.get(
        ` http://localhost:3004/product/category?${categoriesString}`
      );
      // console.log(data);
      const categoryData = response.data.category_rows;
      setFilterList(categoryData);
    } catch (e) {
      console.error(e.message);
    }
  }

  //searchBar
  const [inputValue, setInputValue] = "";
  const sideBarOptions = [
    "5折以下",
    "庫存告急",
    "100元以下",
    "50元以下",
    "評分5顆星",
  ];

  const checkboxClick = (e) => {
    const val = +e.target.value;
    const c = e.target.checked;
    if (c) {
      if (!choice.includes(val)) {
        setchoice([...choice, val]);
      }
    } else {
      const newChoice = choice.filter((v) => v !== val);
      setchoice(newChoice);
    }
  };

  useEffect(() => {
    getFilter();
  }, []);

  const handleSendFilter = () => {
    const searchParam = new URLSearchParams();

    const categoryString = choice.reduce((acc, cur) => {
      return acc + `${cur},`;
    }, "");
    // const sids = categoryString.substring(0,categoryString.length-1)

    searchParam.append("category_sid", choice);
    getFilter(searchParam.toString());
  };

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
        {/* ProductFilter */}
        <div className="a-productFilterWrapper">
          <div className="a-searchBarWrapper">
            {sideBarOptions.map((v, i) => {
              return (
                <div key={i} className="a-sideBarOptionsWrapper">
                  {/* <input
                    type="checkbox"
                    className="a-sideBarInput"
                    checked={productFilter.includes(v)}
                    value={v}
                    onChange={(e) => 
                      const productValue = e.target.value
                      if (productFilter.includes(productValue)) {
                        const newproductValue = productFilter.filter (
                          () 
                        )
                      }

                  /> */}
                </div>
              );
            })}
          </div>
          {/* <input
            className="a-searchInput"
            value={inputValue}
            onChange={(i) => setInputValue.target.value(i)}
          />
          <h3 className="a-inputValue">{inputValue}</h3> */}

          {/* CategoryFilter */}
          <div className="a-category">
            <div className="a-categoryWrapper">
              {filterList.map((filter, i) => {
                return (
                  <div className="a-productFilterWrapper" key={i}>
                    <label
                      className="a-categoryContentWapper"
                      htmlFor={`a-categoryCheckBox${filter.sid}`}
                      key={filter.sid}
                    >
                      <span className="a-iconSpan">
                        <div className="a-iconWrapper">
                          <img
                            className="a-icon"
                            src={`/04-product/svg/${filter.category_icon}`}
                            alt=""
                          />
                        </div>
                        <div className="a-categoryIconWrapper">
                          <input
                            className="a-categoryInput"
                            type="checkbox"
                            id={`a-categoryCheckBox${filter.sid}`}
                            name="cate"
                            value={filter.sid}
                            onChange={checkboxClick}
                          />
                          <h2 className="a-categoryName">
                            {filter.category_name}
                          </h2>
                        </div>
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <button onClick={handleSendFilter}>Do Filter</button>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
