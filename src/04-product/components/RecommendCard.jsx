import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./style/RecommendCard.scss";

function RecommendCard() {
  const [recommend, setRecommend] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { sid } = useParams();

  async function getRecommend() {
    try {
      const response = await axios.get(
        "http://localhost:3004/product/suggest?sid=${sid}"
      );
      console.log(response.data);
      const Sdata = response.data.suggest_rows;
      setRecommend(Sdata);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    getRecommend();
  }, []);

  return (
    <>
      <div className="a-recommendText">
        <img src="/04-product/svg/nut.svg" alt="" />
        <h3>惜食商品推薦</h3>
      </div>
      <div className="a-productRecommend">
        {recommend.map((recommend, i) => {
          return (
            <div className="a-recommendImgWrapper" key={recommend.sid}>
              <div className="a-recommendWrapper" >
                <img src={`/04-product/img/${recommend.picture_url}`} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecommendCard;
