import '../styles/03-shop-list.scss'
import ShopCard from '../components/03-shop-card'
import ShopMcard from '../components/03-shop-m-card'
import ShopMap from '../components/03-shop-map'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function ShopList() {
  // 記錄原始資料用
  const [shops, setShops] = useState([])
  const [citys, setCitys] = useState([])
  const [areas, setAreas] = useState([])
  const [cates, setCates] = useState([])
  const [selectedCity, setSelectedCity] = useState(0)
  const [selectedArea, setSelectedArea] = useState(0)

  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  const getAllshops = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/shop')
      // console.log(response.data.shop_rows)
      const shopData = response.data.shop_rows
      return shopData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }
  const getCity = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3002/api/shop/shop_city'
      )
      // console.log(response.data.city_rows)
      const cityData = response.data.city_rows
      return cityData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

  const getArea = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3002/api/shop/shop_area'
      )
      // console.log(response.data.area_rows)
      const areaData = response.data.area_rows
      return areaData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }
  const getCate = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3002/api/shop/shop_cate'
      )
      // console.log(response.data.cate_rows)
      const cateData = response.data.cate_rows
      return cateData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

  const whenCityChanged = function (e) {
    const selectedCitySid = +e.currentTarget.value
    setSelectedCity(selectedCitySid)
    const selectedAreaSid = areas.find(
      (a) => a.shop_city_sid === selectedCitySid
    ).sid

    setSelectedArea(selectedAreaSid)
  }

  // didMount時載入資料
  useEffect(() => {
    ;(async () => {
      const shopData = await getAllshops()
      const cityData = await getCity()
      const areaData = await getArea()
      const cateData = await getCate()

      setShops(shopData)
      setCitys(cityData)
      setAreas(areaData)
      setCates(cateData)

      const selectedCitySid = cityData[1].sid
      const selectedAreaSid = areaData.find(
        (a) => a.shop_city_sid === selectedCitySid
      ).sid
      console.log({ selectedCitySid, selectedAreaSid })
      setSelectedCity(selectedCitySid)
      setSelectedArea(selectedAreaSid)
    })()
  }, [])

  return (
    <>
      <div className="r-container">
        <div className="r-main-visual">
          <div className="r-slide-bar">
            <div className="r-search-wrap">
              <div className="r-search-article">
                <div className="r-shop-icon">
                  <img src="/03-shop-img/town_house_02.png" alt="" />
                </div>
                <div className="r-shop-title">
                  <span>ALL SHOP</span>
                  <p>店鋪搜尋</p>
                </div>
              </div>

              <div className="r-place-wrap">
                <div className="r-place-article">
                  <div className="r-shop-icon-p">
                    <img src="/03-shop-img/other_mappin_01.png" alt="" />
                  </div>
                  <div className="r-place-title">
                    <span>Place</span>
                    <p>地區搜尋</p>
                  </div>
                </div>
                <div className="r-place-select">
                  <div>
                    <select
                      name="r-selCity"
                      id="r-selCity"
                      onChange={whenCityChanged}
                      value={selectedCity}
                    >
                      {/* <option value="">請選擇</option> */}
                      {citys.map((v, i) => {
                        return (
                          <option value={v.sid} key={v.sid}>
                            {v.shop_city}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div>
                    <select
                      name="r-selArea"
                      id="r-selArea"
                      onChange={(e) => setSelectedArea(+e.currentTarget.value)}
                      value={selectedArea}
                    >
                      {/* <option value="">請選擇</option> */}
                      {areas
                        .filter((a) => a.shop_city_sid === selectedCity)
                        .map((v) => {
                          return (
                            <option value={v.sid} key={v.sid}>
                              {v.shop_area}
                            </option>
                          )
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="r-cate-wrap">
                <div className="r-cate-article">
                  <div className="r-shop-icon-c">
                    <img src="/03-shop-img/food_hamburger_01.png" alt="" />
                  </div>
                  <div className="r-cate-title">
                    <span>Category</span>
                    <p>種類搜尋</p>
                  </div>
                </div>
                <div className="r-cate-select">
                  <select name="r-selCate" id="r-selCate">
                    <option value="">請選擇</option>
                    {cates.map((v, i) => {
                      return (
                        <option value={v.product_categories} key={v.sid}>
                          {v.product_categories}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className="r-filter-wrap">
                <div className="r-filter-article">
                  <div className="r-shop-icon-f">
                    <img
                      src="/03-shop-img/other_magnifyingglass_01.png"
                      alt=""
                    />
                  </div>
                  <div className="r-filter-title">
                    <span>Filter</span>
                    <p>進階搜尋</p>
                  </div>
                </div>
                <div className="r-filter-select">
                  <select name="" id="">
                    <option value="">請選擇</option>
                    <option value="營業中">營業中</option>
                    <option value="全部店家">全部店家</option>
                  </select>
                </div>
              </div>
              <div className="r-btn-wrap">
                <div className="r-search-btn">
                  <button>
                    <i className="fa-solid fa-caret-right"></i>
                    <span>搜尋GO</span>
                  </button>
                </div>
              </div>
              <div className="r-btn-wrap">
                <div className="r-search-btn">
                  <button>
                    {' '}
                    <i className="fa-solid fa-caret-right"></i>
                    <span>清除Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="r-wave"></div>
          <div className="r-shop-list">
            <div className="r-banner-wrap">
              <div className="r-banner-article">
                <div className="r-banner-icon">
                  <img src="/03-shop-img/other_glitter_01.png" alt="" />
                </div>
                <div className="r-banner-title">
                  <div className="r-banner-inner">
                    <small>SHOP LIST</small>
                    <p>店鋪一覽</p>
                  </div>
                </div>
              </div>
              <div className="r-banner-button-wrap">
                <div className="r-banner-button">
                  <div className="r-btn-list-map">
                    <a href="/#">
                      <i className="fa-solid fa-caret-right"></i>
                      <span>依列表檢視</span>
                    </a>
                  </div>
                  <div className="r-btn-list-map">
                    <a href="/#">
                      <i className="fa-solid fa-caret-right"></i>
                      <span>依地圖檢視</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ShopCard shops={shops} />
            {/* <ShopMap /> */}
            {/* <ShopMcard shops={shops} /> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopList
