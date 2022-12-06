import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./style/RecommendCard.scss";

function RecommendCard({ sid }) {
  const [recommend, setRecommend] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  async function getRecommend() {
    try {
      const response = await axios.get(
        "http://localhost:3004/product/suggest?sid=" + sid
      );
      // console.log(response.data);
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
      <div className="a-recommendTextWrapper">
        <div className="a-iconWrapperNut">
          <img src="/04-product/svg/nut.svg" alt="" />
        </div>
        <h3 className="a-recommendText">惜食商品推薦</h3>
      </div>

      <div className="a-productRecommend">
        {recommend.map((recommend, i) => {
          return (
            <a href={`${recommend.sid}`}>
              <div className="a-recommendContent" key={i}>
                <div className="a-recommendImgWrapper">
                  <img
                    src={`/04-product/img/${recommend.picture_url}`}
                    alt=""
                  />
                </div>
                <div className="a-shop-slider-content">
                  {/* <p className="a-shop-slider-content-p">麵包</p> */}
                </div>
              </div>
            
            </a>
          );
        })}
      </div>
    </>
  );
}

export default RecommendCard;
