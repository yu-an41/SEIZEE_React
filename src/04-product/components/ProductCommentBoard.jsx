import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function ProductCommentBoard() {
  const [userComment, setUserComment] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { sid } = useParams();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  async function getUserComment() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/userComment/${sid}`
      );
      const commentData = response.data;
      setUserComment(commentData);
        // console.log(commentData);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getUserComment();
  }, [setUserComment]);

  return (
    <>
    {/* <ReactStars
          count={5}
          value={userComment.rating}
          // onChange={ratingChanged}
          size={40}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        /> */}
      {userComment.map((v, i) => {
        return (
          <div className="a-productUserComment" key={i.name}>
            <div className="a-productUserContent">
              <div className="a-memberPhoto">
                <img
                  src={`http://localhost:3004/uploads/05-member/${v.mb_photo}`}
                  alt=""
                />
              </div>
              <div className="a-memberName">{v.mb_name}</div>
              <div className="a-userComment">{v.user_comment}</div>
            </div>
            {/* <div className="a-memberCommentWrapper">
            </div> */}
            {/* <div className="a-productRating">{v.rating}顆星</div> */}
          </div>
        );
      })}
    </>
  );
}

export default ProductCommentBoard;
