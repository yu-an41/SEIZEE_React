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
  //紀錄checkbox是否被勾選true/false
  const [checkedState, setCheckedState] = useState(Array(10).fill(false))
  //紀錄checkbox篩選條件
  const [cateFilters, setCateFilters] = useState([])
  //紀錄符合checkbox篩選條件的所有店舖
  const [selResultShop, setSelResultShop] = useState([])
  //紀錄店鋪展示區的狀態 有勾選條件/原始全部顯示
  const [statusShop, setstatusShop] = useState(1)
  //取得店家資料
  const getShops = async () => {
    try {
      const response = await axios.get('http://localhost:3004/api/shop')
      const shopData = response.data
      setShops(shopData)
    } catch (e) {
      console.error(e.message)
    }
  }
  //選取種類要變底色,利用位置index找出被選取的種類,把狀態toggle,沒選到的不改變
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    //設定回去被勾選的種類底色判斷的陣列
    setCheckedState(updatedCheckedState)
    //取出所有被選取的種類名稱
    let selectedFilters = updatedCheckedState.map((v, index) => {
      if (v) {
        return toppings[index].cate
      } else {
        return null
      }
    })
    // !! "aa"  true
    // !! null  false
    //過濾null 回傳所有被選取的種類名稱
    selectedFilters = selectedFilters.filter((v) => !!v)

    setCateFilters(selectedFilters)
    if (selectedFilters.length !== 0) {
      //狀態顯示篩選結果店鋪
      setstatusShop(0)
    } else {
      //狀態顯示初始未篩選店鋪
      setstatusShop(1)
    }
  }
  //拿篩選條件進行店鋪篩選
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
