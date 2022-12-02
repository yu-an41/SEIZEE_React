import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "../components/style/ProductFilter.scss";
import YellowWave from "../../00-homepage/components/YellowWave.js";

function ProductFilter() {
  //篩選Data
  const [filterList, setFilterList] = useState([]);

  //checkbox篩選條件
  // const [categoryFilter, SetcategoryFilter] = useState([]);

  //使用者勾選篩選checkbox結果
  const [choice, setchoice] = useState([]);

  //
  const searchParam = new URLSearchParams();

  //篩選結果
  // const [filterResult, setFilterResult] = useState(1);
  //checkbox勾選狀態（用true & false判斷）
  // const [checked, setChecked] = useState(Array(10).fill(false))

  async function getFilter() {
    try {
      const { data } = await axios.get(
        `http://localhost:3004/product/category`
      );
      // console.log(data);
      setFilterList(data.category_rows);
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
  // //判斷category和index位置
  // const handleOnChange = (location) => {
  //   const newCheck =
  //   checked.map((cate, index) =>
  //     index === location ? !cate : cate
  //   )
  //   setChecked(newCheck)

  //category如果是true就放入array
  // let choiceList =
  // newCheck.map((c, index) => {
  //   if(c) {
  //       return choice[index].sid
  //     } else {
  //       return null
  //     }
  //   })

  // choiceList = choiceList.filter((c) => !!c)
  // SetcategoryFilter(choiceList)
  // if (choiceList.length !== 0) {
  //   setFilterResult = (0)
  // } else {
  // setFilterList = (1)
  // }

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
      <div className="a-category">
        <div className="a-categoryWrapper">
          {filterList.map((filter, i) => {
            return (
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
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductFilter;
