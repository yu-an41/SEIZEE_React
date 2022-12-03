import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "../components/style/ProductFilter.scss";
import YellowWave from "../../00-homepage/components/YellowWave.js";

function ProductFilter() {
  //種類data
  const [filterList, setFilterList] = useState([]);
  //使用者勾選篩選checkbox結果
  const [choice, setchoice] = useState([]);
  //後端api
  const searchParam = new URLSearchParams();

  async function getFilter() {
    try {
      const response = await axios.get(
        ` http://localhost:3004/product/category?category_sid`
      );
      // console.log(data);
      const categoryData = response.data.category_rows;
      setFilterList(categoryData);
    } catch (e) {
      console.error(e.message);
    }
  }
  //searchBar input
  const [inputValue, setInputValue] = "";

  const sideBar = ["5折以下", "庫存告急", "100元以下", "50元以下", "評分5顆星"];

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

  return (
    <>
      <div className="y-index-container">
        <div className="a-navBarWrapper"></div>
        <section className="y-section y-section-nav-bg">
          <NavBar />
        </section>
        <section className="y-section y-section-search"></section>
        <section className="y-section y-section-merch"></section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        {/* ProductFilter */}
        <div className="a-category">
          <div className="a-categoryWrapper">
            {filterList.map((filter, i) => {
              return (
                <div className="a-productFilterWrapper">
                  <label
                    className="a-categoryContentWapper"
                    htmlFor={`a-categoryCheckBox${filter.sid}`}
                    key={filter.sid}
                  >
                    <input
                      className="a-categoryInput"
                      type="checkbox"
                      id={`a-categoryCheckBox${filter.sid}`}
                      name="cate"
                      value={filter.sid}
                      onChange={checkboxClick}
                    />
                    <span className="a-iconSpan">
                      <div className="a-iconWrapper">
                        <img
                          className="a-icon"
                          src={`/04-product/svg/${filter.category_icon}`}
                          alt=""
                        />
                      </div>
                      <h2 className="a-categoryName">{filter.category_name}</h2>
                    </span>
                  </label>
                </div>
              );
            })}
            <div className="a-searchBarWrapper">
              <input className="a-filterWrapper"></input>
              <input
                className="a-searchInput"
                value={inputValue}
                onChange={(i) => setInputValue.target.value(i)}
              />
              <h3 className="a-inputValue">{inputValue}</h3>
              <label></label>
            </div>
            <div className="a-filterProudct">
              <div className="a-filterImgWrapper">
                <img src="/04-product/img/10003.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
