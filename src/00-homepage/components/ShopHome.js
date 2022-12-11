import '../styles/ShopHome.scss'
import '../../00-homepage/styles/YellowWave.scss'
import YellowWave from './YellowWave'
import ShopHcard from './ShopHcard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toppings } from '../toppings'
import { Link } from 'react-router-dom'
import WhiteWave from './WhiteWave'

function ShopHome() {
  // 記錄原始資料用
  const [shops, setShops] = useState([])
  // 錯誤訊息用
  // const [errorMessage, setErrorMessage] = useState('')
  //紀錄checkbox是否被勾選true/false
  const [checkedState, setCheckedState] = useState(Array(10).fill(false))
  //紀錄checkbox篩選條件
  const [cateFilters, setCateFilters] = useState([])
  //紀錄符合checkbox篩選條件的所有店舖
  const [selResultShop, setSelResultShop] = useState([])
  //紀錄店鋪展示區的狀態 有勾選條件/原始全部顯示
  const [statusShop, setstatusShop] = useState(1)

  const getShops = async () => {
    try {
      const response = await axios.get('http://localhost:3004/api/shop')
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
    // console.log(statusShop)
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
    if (selectedFilters.length !== 0) {
      setstatusShop(0)
    } else {
      setstatusShop(1)
    }
  }

  // !! "aa"  true
  // !! null  false
  // console.log(cateFilters)
  //----------- 店鋪多重複選測試------------------------
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
  const goFilterShop = function () {
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

    setSelResultShop(resultShop)
  }

  // didMount時載入資料
  useEffect(() => {
    getShops()
  }, [])

  useEffect(() => {
    goFilterShop()
  }, [cateFilters])

  return (
    <>
      <div className="r-shop-home-container">
        <div className="r-shop-home-main">
          <div className="r-shop-home-main-inner">
            <div className="r-shop-home-main-text">
              <p className="r-shop-home-main-text-p">
                Creating a better future through food.
              </p>
              <p className="r-shop-home-main-text-span">
                找不到靈感 ? <br />
                看看我們為您準備的特別推薦 !!
              </p>
              <Link to={'/gachapon'}>
                <span className="r-shop-home-main-text-btn-gachspon">
                  試手氣
                </span>
              </Link>
              <Link to={'/productFilter/'}>
                <span className="r-shop-home-main-text-btn-cate">看種類</span>
              </Link>
            </div>
          </div>
          <div className="r-shop-home-main-visual"></div>
        </div>
      </div>
      <div className="r-shop-home-carousel">
        <div className="r-wave-section">
          <WhiteWave />
        </div>
        <div className="r-shop-home-carousel-title">
          <h2 className="r-shop-home-carousel-h2">
            An idea, a way of living, a way of eating.
          </h2>
        </div>
        <div className="r-shop-home-carousel-check">
          {toppings.map(({ cate, imgurl }, index) => {
            return (
              <label
                className="r-check-wrap"
                htmlFor={`cate-checkbox-${index}`}
                key={index}
              >
                <input
                  className="r-shop-home-input"
                  type="checkbox"
                  id={`cate-checkbox-${index}`}
                  name="cate"
                  value={cate}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <span className="r-shop-home-carousel-check-span">
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
            <span className="r-shop-home-slider-inner1-span">推薦店鋪</span>
          </div>
          <ShopHcard
            shops={shops}
            selResultShop={selResultShop}
            statusShop={statusShop}
          />
        </div>
        <YellowWave />
      </div>
    </>
  )
}
export default ShopHome
