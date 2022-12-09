import '../styles/03-shop-list.scss'
import ShopCard from '../components/03-shop-card'
import ShopMcard from '../components/03-shop-m-card'
import ShopMap from '../components/03-shop-map'
import ShopSideBar from '../components/03-shop-side-bar'
import ShopBanner from '../components/03-shop-banner'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'


function ShopList() {
  // 記錄原始資料用
  const [shops, setShops] = useState([])
  //紀錄demo資料用
  const [demoShop, setDemoShop] = useState([])
  //記錄篩選資料用
  const [selectedCity, setSelectedCity] = useState(0)
  const [selectedArea, setSelectedArea] = useState(0)
  const [selectedCate, setSelectedCate] = useState('')
  const [selectedOpen, setSelectedOpen] = useState(0)
  const [filterShop, setFilterShop] = useState([])
  const [startShop, setStartShop] = useState(1)
  const [toggleStatus, setToggleStatus] = useState(1)
  const [findPos, setFindPos] = useState({
    lat: 25.0440612,
    lng: 121.5139518,
  })
  const [isLoading, setIsLoading] = useState(false)

  const getAllShops = async () => {
    try {
      const response = await axios.get('http://localhost:3004/api/shop')

      const shopData = response.data

      const theHour = new Date().getHours()
      const theDay = new Date().getDay()
      const shopDay = [
        'shop_sun',
        'shop_mon',
        'shop_tue',
        'shop_wed',
        'shop_thu',
        'shop_fri',
        'shop_sat',
      ]

      const newShop = shopData.map((item, i) => {

        if (item.rows[shopDay[theDay]]) {
          if (
            item.rows.shop_opentime.substring(0, 2) <= theHour &&
            item.rows.shop_closetime.substring(0, 2) > theHour
          ) {
            const a = { ...item.rows, open: 1 }
            return { ...item, rows: a }
          } else {
            const b = { ...item.rows, open: 0 }
            return { ...item, rows: b }
          }
        } else {
          const c = { ...item.rows, open: 0 }
          return { ...item, rows: c }
        }
      })

      return newShop
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }
  const getDemoShop = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/api/shop/shop_demo'
      )

      const demoData = response.data

      const theHour = new Date().getHours()
      const theDay = new Date().getDay()
      const shopDay = [
        'shop_sun',
        'shop_mon',
        'shop_tue',
        'shop_wed',
        'shop_thu',
        'shop_fri',
        'shop_sat',
      ]

      const newDemoData = demoData.map((item, i) => {

        if (item.rows[shopDay[theDay]]) {
          if (
            item.rows.shop_opentime.substring(0, 2) <= theHour &&
            item.rows.shop_closetime.substring(0, 2) > theHour
          ) {
            const a = { ...item.rows, open: 1 }
            return { ...item, rows: a }
          } else {
            const b = { ...item.rows, open: 0 }
            return { ...item, rows: b }
          }
        } else {
          const c = { ...item.rows, open: 0 }
          return { ...item, rows: c }
        }
      })

      return newDemoData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }
  const goFilter = function () {
    setIsLoading(true)

    const newData = shops
      .map((v, i) => {
        const c = [...[v.cates]]
        const dataRows = [...[v.rows], c]
        return dataRows
        // return v.cates
      })
      .filter((v, i) => {
        if (selectedOpen) {
          return (
            v[0].shop_address_city_sid === selectedCity &&
            v[0].shop_address_area_sid === selectedArea &&
            v[1][0].includes(selectedCate) &&
            v[0].open === 1
          )
        } else {
          return (
            v[0].shop_address_city_sid === selectedCity &&
            v[0].shop_address_area_sid === selectedArea &&
            v[1][0].includes(selectedCate)
          )
        }
      })


    setFilterShop(newData)
    setStartShop(0)
    // setFindPos({
    //   lat: filterShop[0][0].shop_lat,
    //   lng: filterShop[0][0].shop_lng,
    // })
  }

  // function ChangePos() {
  //   setFindPos({ lat: 25.043589, lng: 121.5607293 })
  // }

  // 延後1.5秒才關掉指示器
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }, [isLoading])

  useEffect(() => {
    ;(async () => {
      const newShop = await getAllShops()
      const newDemoData = await getDemoShop()
      setShops(newShop)
      // 先開啟載入指示器
      setIsLoading(true)
      setDemoShop(newDemoData)
    })()
  }, [])

  return (
    <>
      <div className="r-shop-container">
        <div className="r-main-visual">
          <NavBar />
          <div className="r-side-bar">
            <ShopSideBar
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              selectedCate={selectedCate}
              setSelectedCate={setSelectedCate}
              selectedOpen={selectedOpen}
              setSelectedOpen={setSelectedOpen}
              setFilterShop={setFilterShop}
              setStartShop={setStartShop}
              shops={shops}
              setIsLoading={setIsLoading}
            />
            <div className="r-btn-wrap">
              <div className="r-search-btn">
                <button className="r-search-btn-button" onClick={goFilter}>
                  <i className="fa-solid fa-caret-right"></i>
                  <span className="r-search-btn-button-span">搜尋GO</span>
                </button>
              </div>
            </div>
          </div>

          <div className="r-wave"></div>
          <div className="r-shop-list">
            <ShopBanner
              setToggleStatus={setToggleStatus}
              toggleStatus={toggleStatus}
            />
            {toggleStatus ? (
              <ShopCard
                filterShop={filterShop}
                startShop={startShop}
                shops={shops}
                demoShop={demoShop}
                isLoading={isLoading}
              />
            ) : (
              <>
                <ShopMap
                  demoShop={demoShop}
                  findPos={findPos}
                  shops={shops}
                  filterShop={filterShop}
                  startShop={startShop}
                />
                <ShopMcard
                  filterShop={filterShop}
                  startShop={startShop}
                  shops={shops}
                  demoShop={demoShop}
                  setFindPos={setFindPos}
                  isLoading={isLoading}
                />
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default ShopList
