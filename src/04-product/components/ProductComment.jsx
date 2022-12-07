import axios from "axios";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./style/ProductComment.scss";

function ProductComment({ setDoRender, doRender, sid }) {
  //localStorage得到member_sid
  const mb_sid = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")).mb_sid
    : "尚未登入";

  //使用者輸入留言post後端
  const [comment, setComment] = useState({
    food_product_sid: sid,
    mb_sid: mb_sid,
    comment: "",
    rating: 0,
  });

  //   const [rating, setRating] = useState({
  //     food_product_sid: sid,
  //     mb_sid: mb_sid,
  //     rating :"",
  //   })

  //星星評分數
  const ratingChanged = (newRating) => {
    if (mb_sid === "尚未登入") {
      console.log("未登入！無法留言");
      return;
    }
    setComment({
      ...comment,
      rating: newRating,
    });
    console.log(newRating);
  };

  const addComment = async () => {
    if (mb_sid === "尚未登入") {
      console.log("未登入！無法留言");
      return;
    }
    console.log("會員編號：", mb_sid);
    // const fd = new FormData();
    // fd.append("mb_sid", comment.mb_sid);
    // fd.append("food_product_sid", comment.food_product_sid);
    // fd.append("user_comment", comment.user_comment);

    const { data } = await axios.post(
      "http://localhost:3004/product/comment?sid=" + sid,
      { ...comment }
    );
    console.log(data);

    if (data.user_comment.comment.success) {
      alert("留言成功");
      setDoRender(!doRender);
    }
  };

  return (
    <>
    <div className="a-productCommentWrapper">
      <div className="a-ratingWrapper">
        <ReactStars
          count={5}
          value={comment.rating}
          onChange={ratingChanged}
          size={40}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <div className="a-commentWrapper">
          <input
            className="a-commentInput"
            type="text"
            name="comment"
            placeholder="請輸入留言"
            value={comment.comment}
            onChange={(e) =>
              setComment({ ...comment, comment: e.target.value })
            }
          />
          <button className="a-sumbitButton" onClick={addComment}>
            送出
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductComment;
