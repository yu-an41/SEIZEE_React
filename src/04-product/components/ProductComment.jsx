import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style/ProductComment.scss";

function ProductComment({ setDoRender, doRender, sid }) {
  const [comment, setComment] = useState({
    food_product_sid: 0,
    mb_sid: 0,
    comment: '',
  });

  //localStorage得到member_sid
  const mb_sid = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")).mb_sid
    : "尚未登入";

  const addComment = async () => {
    if (mb_sid === "尚未登入") {
      console.log("未登入！無法留言");
      return;
    }
    console.log('會員編號：',mb_sid)
    const fd = new FormData();
    fd.append("mb_sid", comment.mb_sid);
    fd.append("food_product_sid", comment.food_product_sid);
    fd.append("user_comment", comment.user_comment);
    const { commentData } = await axios.post(
      "http://localhost:3004/product/comment?sid=" + sid,
      fd
    );
    console.log(commentData);

    if (commentData.success) {
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
          onChange={(e) => setComment({ comment: e.target.value,
           })}
        />
        <button className="a-sumbitButton" onClick={addComment}>
          送出
        </button>
      </div>
    </>
  );
}

export default ProductComment;
