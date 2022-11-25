import '../styles/03-shop-home.scss'
import '../../00-homepage/styles/YellowWave.scss'
import YellowWave from '../../00-homepage/components/YellowWave'
import ShopHcard from '../components/03-shop-h-card'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { toppings } from './../toppings'

function ShopHome() {
  // 記錄原始資料用
  const [shops, setShops] = useState([])
  // 錯誤訊息用
  // const [errorMessage, setErrorMessage] = useState('')
  const [checkedState, setCheckedState] = useState(Array(10).fill(false))
  const [cateFilters, setCateFilters] = useState([])

  const getShops = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/seizee')
      // console.log(response.data.shop_c_rows)
      const shopData = response.data.shop_c_rows
      //設定到state裡
      setShops(shopData)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)

    // cateFilters
    let selectedFilters = updatedCheckedState.map((v, index) => {
      if (v) {
        return toppings[index].cate
      } else {
        return null
      }
    })
    selectedFilters = selectedFilters.filter((v) => !!v)
    console.log({ selectedFilters })
    setCateFilters(selectedFilters)
  }

  // !! "aa"  true
  // !! null  false

  // didMount時載入資料
  useEffect(() => {
    getShops()
  }, [])

  // console.log(shops);
  return (
    <>
      <div className="r-shop-home-container">
        <YellowWave />
        <div className="r-shop-home-main">
          <div className="r-shop-home-main-inner">
            <div className="r-shop-home-main-text">
              <p>Creating a better future through food.</p>
              <span>開啟屬於你的惜食地圖</span>
              <div className="r-shop-home-main-btn">
                <input placeholder="請輸入地址" />
                <a href="/#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="r-shop-home-main-visual"></div>
        </div>
      </div>
      <div className="r-shop-home-carousel">
        <div className="r-wave-section">
          <div className="r-wave-wrap"></div>
        </div>
        <div className="r-shop-home-carousel-title">
          <p>An idea, a way of living, a way of eating.</p>
        </div>
        <div className="r-shop-home-carousel-check">
          {toppings.map(({ cate, imgurl }, index) => {
            return (
              <label className="r-check-wrap" htmlFor="cate1" key={index}>
                <input
                  type="checkbox"
                  id={`cate-checkbox-${index}`}
                  name={cate}
                  value={cate}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <span>
                  {cate}
                  <div className="r-check-icon">
                    <img src={`/03-shop-img/${imgurl}`} alt="" />
                  </div>
                </span>
              </label>
            )
          })}

          {/* <label className="r-check-wrap" htmlFor="cate2">
            <input type="checkbox" id="cate2" />
            <span>
              美式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_hamburger_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate3">
            <input type="checkbox" id="cate3" />
            <span>
              日式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_osushi_03.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate4">
            <input type="checkbox" id="cate4" />
            <span>
              泰式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_ramen_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate5">
            <input type="checkbox" id="cate5" />
            <span>
              義式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_spaghetti_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap">
            <input type="checkbox" id="cate6" />
            <span>
              麵包
              <div className="r-check-icon">
                <img src="/03-shop-img/food_croissant_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate7">
            <input type="checkbox" id="cate7" />
            <span>
              冰品
              <div className="r-check-icon">
                <img src="/03-shop-img/food_shaved_ice_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate8">
            <input type="checkbox" id="cate8" />
            <span>
              飲料
              <div className="r-check-icon">
                <img src="/03-shop-img/food_cola_s_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate9">
            <input type="checkbox" id="cate9" />
            <span>
              早餐
              <div className="r-check-icon">
                <img src="/03-shop-img/food_plain_bread_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate10">
            <input type="checkbox" id="cate10" />
            <span>
              甜點
              <div className="r-check-icon">
                <img src="/03-shop-img/food_cake_01.png" alt="" />
              </div>
            </span>
          </label> */}
        </div>
        <div className="r-shop-slider">
          <div className="r-shop-home-slider-inner1">
            <span>推薦店鋪</span>
          </div>
          <div className="r-shop-slider-traintop">
            <ShopHcard shops={shops} />
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopHome
