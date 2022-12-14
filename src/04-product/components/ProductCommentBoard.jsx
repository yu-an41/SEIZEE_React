import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function ProductCommentBoard({ msgs }) {
  const [userComment, setUserComment] = useState([]);
  const [userRating, setUserRating] = useState([]);
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
      const ratingData = response.data.rows;
      const commentData = response.data.rows2;
      setUserRating(ratingData);
      setUserComment(commentData);
      console.log(commentData);
      console.log(ratingData);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getUserComment();
  }, [msgs]);
  // useEffect(() => {
  //   getUserComment();
  // }, [userComment, userRating]);

  // const com = commentData.map((v,i)=>{
  //   return <div key={i}>
  // {v.user_comment}
  //   </div>
  // })
  return (
    <>
      <div className="a-productUserComment">
        {userComment &&
          userComment.map((v, i) => {
            return (
              <div className="a-productUserContent" key={v.name}>
                <div className="a-memberPhoto">
                  <img
                    src={`http://localhost:3004/uploads/05-member/${v.mb_photo}`}
                    alt=""
                  />
                </div>
                <div className="a-memberName">{v.mb_name}</div>
                <div className="a-userComment">{v.user_comment}</div>
              </div>
            );
          })}
      </div>

      {/* {userComment.length} */}

      {userRating.map((v, i) => {
        return (
          <>
            <div className="a-startWrapper">
              <img src="/04-product/svg/start.png" alt=""/>
            </div>
            <div className="a-productRating">{v.rating}顆星</div>
          </>
        );
      })}
    </>
  );
}

export default ProductCommentBoard;
