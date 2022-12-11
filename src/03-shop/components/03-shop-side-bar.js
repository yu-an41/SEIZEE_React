import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import './../styles/03-shop-side-bar.scss'

function ShopSideBar(props) {
  // 記錄原始資料用
  const [citys, setCitys] = useState([])
  const [areas, setAreas] = useState([])
  const [cates, setCates] = useState([])

  // 錯誤訊息用
  // const [errorMessage, setErrorMessage] = useState('')

  const getCity = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/api/shop/shop_city'
      )

      const cityData = response.data.city_rows
      return cityData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }

  const getArea = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/api/shop/shop_area'
      )

      const areaData = response.data.area_rows
      return areaData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }
  const getCate = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/api/shop/shop_cate'
      )

      const cateData = response.data.cate_rows
      return cateData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }

  const whenCityChanged = function (e) {
    const selectedCitySid = +e.currentTarget.value
    props.setSelectedCity(selectedCitySid)
    const selectedAreaSid = areas.find(
      (a) => a.shop_city_sid === selectedCitySid
    ).sid
    props.setSelectedArea(selectedAreaSid)
  }

  const handleChange = (e) => {
    props.setIsLoading(true)
    const keyword = e.target.value.trim()
    if (keyword === '') {
      props.setStartShop(1)
      return
    } else {
      const newData = props.shops
        .map((v, i) => {
          const c = [...[v.cates]]
          const dataRows = [...[v.rows], c]
          return dataRows
        })
        .filter((v, i) => {
          return v[0].shop_name.includes(keyword) || v[1][0].includes(keyword)
        })

      props.setFilterShop(newData)
      props.setStartShop(0)
    }
  }

  // const handleSearch = (e) => {
  //   // 搜尋用 - trim去除空白
  //   const newSearchWord = e.target.value.trim()
  //   // console.log(newSearchWord)
  //   // 傳至debounceFn中
  //   debounceHandleSearch(newSearchWord)
  // }

  // const debounceHandleSearch = useCallback(_.debounce(handleChange, 400), [])

  // didMount時載入資料
  useEffect(() => {
    ;(async () => {
      const cityData = await getCity()
      const areaData = await getArea()
      const cateData = await getCate()

      setCitys(cityData)
      setAreas(areaData)
      setCates(cateData)

      const selectedCitySid = cityData[1].sid
      const selectedAreaSid = areaData.find(
        (a) => a.shop_city_sid === selectedCitySid
      ).sid

      props.setSelectedCity(selectedCitySid)
      props.setSelectedArea(selectedAreaSid)

      const selectedCateSid = cateData[0].category_name
      props.setSelectedCate(selectedCateSid)
    })()
  }, [])
  return (
    <>
      <div className="r-search-wrap">
        <div className="r-search-article">
          <div className="r-shop-icon">
            <img src="/03-shop-img/town_house_02.png" alt="" />
          </div>
          <div className="r-shop-title">
            <span className="r-shop-title-span">ALL SHOP</span>
            <p className="r-shop-title-p">店鋪搜尋</p>
          </div>
        </div>

        <div className="r-search-keyword-wrap">
          <p className="r-search-keyword-wrap-p">搜尋關鍵字</p>
          <input
            className="r-search-keyword-wrap-input"
            type="search"
            name="search"
            id="search"
            onChange={handleChange}
          />
        </div>

        <div className="r-place-wrap">
          <div className="r-place-article">
            <div className="r-shop-icon-p">
              <img src="/03-shop-img/other_mappin_01.png" alt="" />
            </div>
            <div className="r-place-title">
              <span className="r-place-title-span">Place</span>
              <p className="r-place-title-p">地區搜尋</p>
            </div>
          </div>
          <div className="r-place-select-wrap">
            <div>
              <select
                className="r-place-select"
                name="r-selCity"
                id="r-selCity"
                onChange={whenCityChanged}
                value={props.selectedCity}
              >
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
                className="r-place-select"
                name="r-selArea"
                id="r-selArea"
                onChange={(e) => props.setSelectedArea(+e.currentTarget.value)}
                value={props.selectedArea}
              >
                {areas
                  .filter((a) => a.shop_city_sid === props.selectedCity)
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
              <span className="r-cate-title-span">Category</span>
              <p className="r-cate-title-p">種類搜尋</p>
            </div>
          </div>
          <div className="r-cate-select-wrap">
            <select
              className="r-cate-select"
              name="r-selCate"
              id="r-selCate"
              onChange={(e) => props.setSelectedCate(e.currentTarget.value)}
              value={props.selectedCate}
            >
              {cates.map((v) => {
                return (
                  <option value={v.category_name} key={v.sid}>
                    {v.category_name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="r-filter-wrap">
          <div className="r-filter-article">
            <div className="r-shop-icon-f">
              <img src="/03-shop-img/other_magnifyingglass_01.png" alt="" />
            </div>
            <div className="r-filter-title">
              <span className="r-filter-title-span">Filter</span>
              <p className="r-filter-title-p">進階搜尋</p>
            </div>
          </div>
          <div className="r-filter-select-wrap">
            <select
              className="r-filter-select"
              name="r-selOpen"
              id="r-selOpen"
              onChange={(e) => props.setSelectedOpen(+e.currentTarget.value)}
              value={props.selectedOpen}
            >
              <option value="0">全部店家</option>
              <option value="1">營業中</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopSideBar
