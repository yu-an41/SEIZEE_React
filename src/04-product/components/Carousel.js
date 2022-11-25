import React, { useState } from "react";
import "./style/Carousel.scss";

export default function Carousel() {
  const [myArray, setMyArray] = useState(["0", "1", "2"]);

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

  return (
    <div className="a-caroudelWrapper">
      <div
        className={myArray[0] == 1 ? "myselectedImage" : ""}
        style={{
          order: myArray[0],
        }}
        onClick={(e) => {
          handleClick(0);
        }}
      >
        <img src="/04-product/img/10003.jpg" alt="" />
      </div>
      <div
        className={myArray[1] == 1 ? "myselectedImage" : ""}
        style={{
          order: myArray[1],
        }}
        onClick={(e) => handleClick(1)}
      >
        <img src="/04-product/img/10013.jpg" alt="" />
      </div>
      <div
        className={myArray[2] == 1 ? "myselectedImage" : ""}
        style={{
          order: myArray[2],
        }}
        onClick={(e) => handleClick(2)}
      >
        <img src="/04-product/img/10006.jpg" alt="" />
      </div>
    </div>
  );
}
