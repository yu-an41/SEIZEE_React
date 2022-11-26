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
      const shopData = response.data
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
    // console.log({ selectedFilters })
    setCateFilters(selectedFilters)
  }

  // !! "aa"  true
  // !! null  false
  console.log(cateFilters)

  // const total = []
  // shops.forEach((value) => {
  //   for (let i of value.cates) {
  //     for (let c of cateFilters) {
  //       if (c === i) {
  //         total.push(value)
  //         break
  //       }
  //     }
  //   }
  // })
  // const total = []
  // for (let value of shops) {
  //   label1: for (let i of value.cates) {
  //     for (let c of cateFilters) {
  //       if (c === i) {
  //         total.push(value)
  //         break label1
  //       }
  //     }
  //   }
  // }
  const resultShop = []
  for (let item of shops) {
    label1: for (let i of item.cates) {
      for (let c of cateFilters) {
        if (c === i) {
          resultShop.push(item)
          break label1
        }
      }
    }
  }
  console.log(resultShop)

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
                  name="cate"
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
