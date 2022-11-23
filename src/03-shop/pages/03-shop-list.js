import '../styles/03-shop-list.scss'
import ShopCard from '../components/03-shop-card'
import ShopMcard from '../components/03-shop-m-card'
import ShopMap from '../components/03-shop-map'
import ShopSideBar from '../components/03-shop-side-bar'
import ShopBanner from '../components/03-shop-banner'

import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function ShopList() {
  // 記錄原始資料用
  const [shops, setShops] = useState([])

  //記錄篩選資料用
  const [selectedCity, setSelectedCity] = useState(0)
  const [selectedArea, setSelectedArea] = useState(0)
  const [selectedCate, setSelectedCate] = useState('')
  const [selectedOpen, setSelectedOpen] = useState(0)
  const [filterShop, setFilterShop] = useState([])

  const getAllshops = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/shop')
      // console.log(response.data)
      let shopData = response.data

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
      // const openShop = shopData.filter(
      //   (v, i) =>
      //     v.rows.shop_opentime.substring(0, 2) <= theHour &&
      //     v.rows.shop_closetime.substring(0, 2) >= theHour
      // )
      // // console.log(openShop)
      // const opened = openShop.map((v, i) => {
      //   const a = { ...v.rows, open: true }
      //   return { ...v, rows: a }
      // })
      // console.log(opened)
      // const closedShop = shopData.filter(
      //   (v, i) =>
      //     v.rows.shop_opentime.substring(0, 2) > theHour ||
      //     v.rows.shop_closetime.substring(0, 2) < theHour
      // )
      // const closed = closedShop.map((v, i) => {
      //   const a = { ...v.rows, open: false }
      //   return { ...v, rows: a }
      // })
      // console.log(closed)
      // const newShop = [{ ...closed }, { ...opened }]
      // console.log(newShop)
      // console.log(closedShop)
      // const testShop = [{ ...openShop }, { ...closedShop }]
      // // console.log(testShop)
      // const newShop = { ...testShop }
      // const a = { ...newShop[0], rows: { ...newShop[0].rows, open: true } }

      const newShop = shopData.map((item, i) => {
        // console.log(item)
        if (item.rows[shopDay[theDay]]) {
          if (
            item.rows.shop_opentime.substring(0, 2) <= theHour &&
            item.rows.shop_closetime.substring(0, 2) >= theHour
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
      // console.log(newShop)
      return newShop
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }
  const goFilter = function () {
    // console.log(shops)
    let newData = shops
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

    // console.log(newData)
    setFilterShop(newData)
  }
  // console.log(filterShop)

  useEffect(() => {
    ;(async () => {
      const newShop = await getAllshops()
      setShops(newShop)
    })()
  }, [])

  return (
    <>
      <div className="r-container">
        <div className="r-main-visual">
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
            />
            <div className="r-btn-wrap">
              <div className="r-search-btn">
                <button onClick={goFilter}>
                  {/* <button> */}
                  <i className="fa-solid fa-caret-right"></i>
                  <span>搜尋GO</span>
                </button>
              </div>
            </div>
            <div className="r-btn-wrap">
              <div className="r-search-btn">
                <button>
                  <i className="fa-solid fa-caret-right"></i>
                  <span>清除Reset</span>
                </button>
              </div>
            </div>
          </div>

          <div className="r-wave"></div>
          <div className="r-shop-list">
            <ShopBanner />
            <ShopCard filterShop={filterShop} />
            {/* <ShopMap /> */}
            {/* <ShopMcard shops={shops} /> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopList
