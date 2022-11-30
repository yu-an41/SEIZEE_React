import { useState, useEffect } from "react";
import axios from "axios";

function ProductFilter() {
  const [filter, setFilter] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  async function getFilter() {
    try {
    const response = await axios.get(
      `http://localhost:3004/product/category`
    );
    const Cdata = response.data.category_rows
    setFilter(Cdata)
  } catch (e) {
    console.error('this is e-message:',e.message);
    setErrorMessage(e.message);
  }
}
    // const addComment = async () => {
    //   const fd = new FormData();
    //   // fd.append("food_product_sid", comment.food_product_sid);
    //   // fd.append("comment", comment.user_comment);
    //   // fd.append("test", filter);
    //   const { Cdata } = await axios.post(
    //     "http://localhost:3004/product/comment",
    //     fd
    //   );
  // }
  useEffect(() => {
    getFilter();
  }, []);
      
  

  return (
    <>
    <div className="a-categoryWrapper">

    </div>
    <div></div>
    
    </>
  )
}

export default ProductFilter
