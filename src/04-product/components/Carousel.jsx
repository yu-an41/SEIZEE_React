import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./style/Carousel.scss";


function Carousel() {
  const [myArray, setMyArray] = useState(["0", "1", "2"]);
  const [carousel, setCarousel] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  function handleClick(e) {
    switch (e) {
      case 0:
        setMyArray(["1", "2", "0"]);
        break;
      case 1:
        setMyArray(["0", "1", "2"]);
        break;
      case 2:
        setMyArray(["2", "0", "1"]);
        break;
      default:
    }
    return;
    console.log("e", e.currentTarget.innerText);
  
    if (e.currentTarget.innerText[0] === "0") {
      setMyArray(["1", "2", "0"]);
    }
    if (e.currentTarget.innerText[0] === "1") {
      setMyArray(["0", "1", "2"]);
    }
    if (e.currentTarget.innerText[0] === "2") {
      setMyArray(["2", "0", "1"]);
    }
  }

  

  async function getCarousel() {
    try {
      const response = await axios.get(
        "http://localhost:3002/product/picture?sid=${sid}"
      );
      console.log(response);
      const Cdata = response.data.picture_rows;
      setCarousel(Cdata.data);
    } catch (e) {
      console.error(e.message);
      setErrorMessage(e.message);
    }

    return (
      <>
        {carousel.map((carousel, i) => {
          return (
            <div className="a-caroudelWrapper" key={carousel.sid}>
              <div
                className={myArray[0] == 1 ? "myselectedImage" : ""}
                style={{
                  order: myArray[0],
                }}
                onClick={(e) => {
                  handleClick(0);
                }}
              >
                <img src={`/04-product/img/${carousel.pic.split('\r')[0]}`} alt="" />
              </div>
              
              {/* <div
                className={myArray[1] == 1 ? "myselectedImage" : ""}
                style={{
                  order: myArray[1],
                }}
                onClick={(e) => handleClick(1)}
              >
                <img src={`/04-product/img/${carousel.picture_url}`} alt="" />
              </div>
              <div
                className={myArray[2] == 1 ? "myselectedImage" : ""}
                style={{
                  order: myArray[2],
                }}
                onClick={(e) => handleClick(2)}
              >
                <img src={`/04-product/img/${carousel.picture_url}`} alt="" />
              </div> */}
            </div>
          );
        })}
      </>
    );
  }
}

export default Carousel;
