import { useState, useEffect, Link } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "../components/style/ProductFilter.scss";
import YellowWave from "../../00-homepage/components/YellowWave.js";
import { useNavigate } from "react-router-dom";

function ProductFilter() {
  //種類data
  const [filterList, setFilterList] = useState([]);
  //使用者勾選種類checkbox
  const [choice, setchoice] = useState([]);
  const navigate = useNavigate();
  //使用者勾選sideBar
  // const [productFilter, setProductFilter] = useState([""]);

  async function getFilter(categoriesString) {

    // http://localhost:3000/producst/category?category_sid=5,6

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
    let searchParam = new URLSearchParams();

    const categoryString = choice.reduce((acc, cur) => {
      return acc + `${cur},`;
    }, "");
    console.log( 'cate ' + categoryString);
    if (categoryString == "")
    {
      navigate(`/products`)
    } else {
      const sids = categoryString.substring(0,categoryString.length-1)
      searchParam.append("category_sid", sids);
    navigate(`/products?${searchParam.toString()}
    `)
    }
    // const sids = categoryString.substring(0,categoryString.length-1)
    // searchParam.append("category_sid", categoryString);
    // navigate(`/products?${searchParam.toString()}`)
    // getFilter(searchParam.toString());
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
        {/* CategoryFilter */}
        <div className="a-productFilterWrapper">
          <div className="a-category">
            <div className="a-categoryWrapper">
              {filterList.map((filter, i) => {
                return (
                  <div className="a-productFilterContent" key={i}>
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
            {/* <a href="{`${filter.sid}`}"> */}
            <button className="a-filterButton" onClick={handleSendFilter}>送出</button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
