import React, { useState, useEffect } from 'react';
import './style/Carousel.scss';
import axios from "axios";
import { color } from '@mui/system';

export default function Carousel({sid=1}) {
    const [carousel, setCarousel] = useState([]);
    const [myArray, setMyArray] = useState([0, 0, 0]);
    const [myZindexArr, setMyZindexArr] = useState([0, 0, 0]);
    const [imgArray, setImgArray] = useState([]);
    const [centerImg, setCenterImg] = useState('')
  
  async function getCarousel() {
    try {
      const response = await axios.get(
        `http://localhost:3004/product/picture?sid=` + sid
      );
      const Pdata = response.data.product_rows[0];
      setImgArray(Pdata.picture.split(","));
      setCarousel(Pdata);
    //   console.log(Pdata);
    } catch (e) {
      console.error(e.message);
    }
  }

    function handleClick(i, img) {
        // console.log('e', e.target.innerText);
        setCenterImg(img)
        // console.log(i, img);

        if (i === 0) {
            setMyArray([1, 1, -2]);
            setMyZindexArr([1, 0, 0]);
        }
        if (i === 1) {
            setMyArray([0, 0, 0]);
            setMyZindexArr([0, 1, 0]);
        }
        if (i === 2) {
            setMyArray([2, -1, -1]);
            setMyZindexArr([0, 0, 2]);
        }
    }

     useEffect(() => {
    getCarousel();
  }, []);

  if (imgArray.length==0){
    return <></>
  }

    return (
        <div className='a-carouselWrapper' style={{ display: 'flex' }}>
            {/* <div className="a-carouselBorder"></div> */}
            <div
                className="bg-1"
                style={{
                    width: '450px',
                    height: '450px',
                    fontSize: '1.5rem',
                    //background: 'red',
                    // border: centerImg===imgArray[0] ? '3px solid red':'',
                    transform: `translateX(${myArray[0] * 400}px)`,
                    transition: 'transform 1s',
                    zIndex: `${myZindexArr[0]}`,
                }}
                onClick={() => {
                    handleClick(0, imgArray[0])
                }}
            >
                <img src={`/04-product/img/${imgArray[0]}`} />
            </div>
            <div
                className="bg-2"
                style={{
                    width: '450px',
                    height: '450px',
                    fontSize: '1.5rem',
                    // background: 'blue',
                    transform: `translateX(${myArray[1] * 400}px)`,
                    transition: 'transform 1s .1s',
                    zIndex: `${myZindexArr[1]}`,
                }}
                onClick={() => handleClick(1, imgArray[1])}
            >
                <img src={`/04-product/img/${imgArray[1]}`}/>
            </div>
            <div
                className="bg-3"
                style={{
                    width: '450px',
                    height: '450px',
                    fontSize: '1.5rem',
                    // background: 'green',
                    transform: `translateX(${myArray[2] * 400}px)`,
                    transition: 'transform 1s .2s',
                    zIndex: `${myZindexArr[2]}`,
                }}
                onClick={() => handleClick(2, imgArray[2])}
            >
                <img src={`/04-product/img/${imgArray[2]}`} />
            </div>
        </div>
    );
}