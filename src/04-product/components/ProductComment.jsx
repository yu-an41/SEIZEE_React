import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './style/ProductComment.scss'


function ProductComment({ setDoRender, doRender }) {
  const [comment, setComment] = useState({
    food_product_sid: 0,
    comment: '',
  });
  const { sid } = useParams();

  const addComment = async () => {
    const fd = new FormData();
    fd.append("food_product_sid", comment.food_product_sid);
    fd.append("comment", comment.user_comment);
    const { Cdata } = await axios.post(
      "http://localhost:3004/product/comment",
      fd
    );
    console.log(Cdata);
    if (Cdata.success) {
      alert("留言成功");
      setDoRender(!doRender);
    }
  };

  return (
    <>
      <div className="a-buttonWrapper">
        <input
          id="a-input"
          type="text"
          name="comment"
          placeholder="請輸入留言"
          value={comment.comment}
          onChange={(e) => setComment({comment: e.target.value})}
        />
        <button className="a-sumbitButton" onClick={addComment}>送出</button>
      </div>
    </>
  );
}

export default ProductComment;
