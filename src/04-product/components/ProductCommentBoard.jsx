import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductCommentBoard() {
  const [userComment, setUserComment] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { sid } = useParams();

  async function getUserComment() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/userComment/${sid}`
      );
      const commentData = response.data;
      setUserComment(commentData);
      //   console.log(commentData);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getUserComment();
  }, []);

  return (
    <>
      {userComment.map((v, i) => {
        return (
          <div className="a-productUserComment">
            <div className="a-productUserContent">
              <div className="a-memberPhoto">
                <img
                  src={`http://localhost:3004/uploads/05-member/${v.mb_photo}`}
                  alt=""
                />
              </div>
              <div className="a-memberName">{v.mb_name}</div>
            </div>
            <div className="a-memberCommentWrapper">
              <div className="a-memberComment">{v.user_comment}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCommentBoard;
