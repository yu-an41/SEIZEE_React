import { useState, useEffect } from "react";
import axios from "axios";
import "./style/Carousel.scss";

export default function Carousel({ sid }) {
    const [carousel, setCarousel] = useState([]);
    const [myArray, setMyArray] = useState([0, 0, 0]);
    const [myZindexArr, setMyZindexArr] = useState([0, 0, 0]);
    const [imgArray, setImgArray] = useState([]);
    
    async function getCarousel() {
      try {
        const response = await axios.get(
          `http://localhost:3004/product/picture?sid=` + sid
        );
        const Pdata = response.data.product_rows[0];
        setImgArray(Pdata.picture.split(","));
        setCarousel(Pdata);
        console.log(Pdata);
      } catch (e) {
        console.error(e.message);
      }
    }

  function handleClick(e) {
    switch (e) {
      case 0:
        setMyArray(["1", "1", "-2"]);
        setMyZindexArr(["1", "0", "0"]);
        break;
      case 1:
        setMyArray(["0", "0", "0"]);
        setMyZindexArr(["0", "1", "0"]);
        break;
      case 2:
        setMyArray(["2", "0", "1"]);
        setMyZindexArr(["0", "0", "2"]);
        break;
      default:
    }

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
  useEffect(() => {
    getCarousel();
  }, []);

  return (
    <div >
    {imgArray.length && (
        <div className="a-caroudelWrapper">
      <div
        className={myArray[0] == 1 ? "myselectedImage" : ""}
        style={{
            transform: `translateX(${myArray[0] * 200}px)`,
              transition: "transform 1s",
              zIndex: `${myZindexArr[0]}`,
        }}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src="/04-product/img/10003.jpg" alt="" />
      </div>

      {imgArray[1] && (
      <div
        className={myArray[1] == 1 ? "myselectedImage" : ""}
        style={{
            transform: `translateX(${myArray[1] * 200}px)`,
                transition: "transform 1s .1s",
                zIndex: `${myZindexArr[1]}`,
        }}
        onClick={(e) => handleClick(1)}
      >
        <img src="/04-product/img/10013.jpg" alt="" />
      </div>
      )}

      {imgArray[2] && (
      <div
        className={myArray[2] == 1 ? "myselectedImage" : ""}
        style={{
            transform: `translateX(${myArray[2] * 200}px)`,
                transition: "transform 1s .2s",
                zIndex: `${myZindexArr[2]}`,
        }}
        onClick={(e) => handleClick(2)}
      >
        <img src="/04-product/img/10006.jpg" alt="" />
      </div>
      )}
      </div>
      )}
    </div>
  );
}
