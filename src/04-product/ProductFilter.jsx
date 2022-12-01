import { useState, useEffect } from "react";
import axios from "axios";
import "./components/style/ProductFilter.scss";

function ProductFilter() {
  const [filter, setFilter] = useState([]);
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
//   const addComment = async () => {
//     const fd = new FormData();
//     // fd.append("food_product_sid", comment.food_product_sid);
//     // fd.append("comment", comment.user_comment);
//     // fd.append("test", filter);
//     const { Cdata } = await axios.post(
//       "http://localhost:3004/product/comment",
//       fd
//     );
//   }
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
