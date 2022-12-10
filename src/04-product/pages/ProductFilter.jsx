import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../components/style/ProductFilter.scss";
import NavBar from "../../components/NavBar";
import YellowWave from "../../00-homepage/components/YellowWave.js";
import Footer from "../../components/Footer";
// import Theme from "../components/Theme";

function ProductFilter() {
  //種類data
  const [filterList, setFilterList] = useState([]);
  //使用者勾選種類checkbox
  const [choice, setChoice] = useState([]);
  // //使用者勾選sideBar
  // const [productFilter, setProductFilter] = useState([""]);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(0);
  const handleClick = () => {
    setTheme(theme === 0 ? 1 : 0)
  }
  // console.log(theme);
  // const [mode, setMode] = useState([]);
  // const [theme, setTheme] = () => {
  //   setTheme(mode === "aladdin" ? "seizee" : "aladdin");
  // };
  // const [themeState, setThemeState] = useState(1);
  // setThemeState(themeState === 1 ? 0 : 1);

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

  const checkboxClick = (e) => {
    const val = +e.target.value;
    const c = e.target.checked;
    if (c) {
      if (!choice.includes(val)) {
        setChoice([...choice, val]);
      }
    } else {
      const newChoice = choice.filter((v) => v !== val);
      setChoice(newChoice);
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
    //getFilter(searchParam.toString());
    navigate("/products?" + searchParam.toString());
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
        {/* <Theme /> */}
        {/* <div>
          <button onClick={mode}>
            {themeState === 1 ? (
              <div className="a-iconAladdinWrapper">
                <img src="/04-product/svg/aladdin.png" alt="" />
              </div>
            ) : (
              <div className="a-iconAvengersWrapper">
                <img src="/04-product/svg/avengers.png" alt="" />
              </div>
            )}
          </button>
        </div> */}
        <div className="a-iconsWrapper">
          <div className={`a-iconAladdinWrapper ${theme === 1 ? "blueTheme" : "" }`}
          onClick={() => handleClick()}>

            <img src="/04-product/svg/aladdin.png" alt="" />
          </div>
          <div className= {`a-iconAvengersWrapper ${theme === 0 ? "yellowTheme" : "" }`}>
            <img src="/04-product/svg/avengers.png" alt="" />
          </div>
        </div>
        <div className="a-productFilterWrapper">
          <div className="a-category">
            <div className={`a-categoryWrapper ${theme === 1 ? "blueTheme" : "yellowTheme" }`}
          onClick={() => handleClick()}>

              {filterList.map((filter, i) => {
                return (
                  <div className="a-productFilterContent" key={i}>
                    <label
                      className="a-categoryContentWapper"
                      htmlFor={`a-categoryCheckBox${filter.sid}`}
                      key={filter.sid}
                    >
                      <div className="a-categoryFIlter">
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
                        </div>
                    </label>
                  </div>
                );
              })}
            </div>
            <button className="a-filterButton" onClick={handleSendFilter}>
              送出
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductFilter;
