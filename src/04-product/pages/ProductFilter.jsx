import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "../components/style/ProductFilter.scss";

function ProductFilter() {
  //篩選全部資料
  const [] = useState([]);
  //checkbox勾選狀態（用true & false判斷）
  const [checked, setChecked] = useState(Array(10).fill(false))
  //checkbox篩選條件
  const [categoryFilter, SetcategoryFilter] = useState
  //使用者勾選篩選checkbox
  const [filter, setFilter] = useState([])
  //錯誤訊息提醒
  const [errorMessage, setErrorMessage] = useState([]);

  async function getFilter() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/category`
      );
      // console.log(response);
      const Fdata = response.data.category_rows;
      setFilter(Fdata);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }

//判斷category和index位置
const handleOnChange = (location) => {
  const newCheck = 
  checked.map((cate, index) => 
    index === location ? !cate : cate
  )
  setChecked(newCheck)

//category如果是true就放入array
let choiceList = 
newCheck.map((c, index) => { 
  if(c) {
      return filter[index].sid
    } else {
      return null
    }
  })

  choiceList = choiceList.map((c) => !!c)
  SetcategoryFilter(choiceList)
  if (choiceList.length !== 0) {

  }
}
  useEffect(() => {
    getFilter();
  }, []);

  return (
    <>
      <div className="a-categoryWrapper">
        {filter.map((filter, i) => {
          return (
            <label className="a-categoryContentWapper"
            htmlFor={`a-categoryCheckBox${filter.sid}`}
            key={filter.sid}
            >
             <input
                className="a-categoryInput"
                  type="checkbox"
                  id={`a-categoryCheckBox${filter.sid}`}
                  name="cate"
                  value={filter.sid}
                //   checked={checkedState(filter.sid)}
                //   onChange={() => {handleOnChange(filter.sid)}}
                />
              <div className="a-iconWrapper">
                <img className="a-icon" src={`/04-product/svg/${filter.category_icon}`} alt="" />
              </div>
              <h2 className="a-categoryName">{filter.category_name}</h2>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default ProductFilter;
