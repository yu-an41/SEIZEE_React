import { useEffect, useState } from 'react'
import { imgUrl, imgServerUrl } from '../shop-config'
import axios from 'axios'

function ShopCard({ filterShop, startShop }) {

  const [demoShop, setDemoShop] = useState([])

  const getDemoShop = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3002/api/shop/shop_demo'
      )
      // console.log(response.data)
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
        // console.log(item)
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
      // console.log(newDemoData)
      return newDemoData
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }

  useEffect(() => {
    ;(async () => {
      const newDemoData = await getDemoShop()
      setDemoShop(newDemoData)
    })()
  }, [])
  // console.log(demoShop)
  // console.log(filterShop )
  // console.log(!!filterShop )
  // console.log('card')
  return (
    <>
      {startShop ? (
        <div className="r-card-wrap">
          {demoShop.map((v, i) => {
            return (
              <div className="r-col" key={v.rows.sid}>
                <div className="r-card-container">
                  <div className="r-card-img-wrap">
                    <span style={v.rows.open ? {} : { background: '#ccc' }}>
                      營業中
                    </span>
                    <img
                      src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                      alt=""
                    />
                  </div>
                  <div className="r-card-body">
                    <h2>{v.rows.shop_name}</h2>
                    <div className="r-card-body-cates">
                      {v.cates.map((v, i) => {
                        return <span key={i}>{v}</span>
                      })}
                    </div>
                    <div className="r-card-week-btn">
                      <small
                        style={v.rows.shop_mon ? {} : { background: '#ccc' }}
                      >
                        一
                      </small>
                      <small
                        style={v.rows.shop_tue ? {} : { background: '#ccc' }}
                      >
                        二
                      </small>
                      <small
                        style={v.rows.shop_wed ? {} : { background: '#ccc' }}
                      >
                        三
                      </small>
                      <small
                        style={v.rows.shop_thu ? {} : { background: '#ccc' }}
                      >
                        四
                      </small>
                      <small
                        style={v.rows.shop_fri ? {} : { background: '#ccc' }}
                      >
                        五
                      </small>
                      <small
                        style={v.rows.shop_sat ? {} : { background: '#ccc' }}
                      >
                        六
                      </small>
                      <small
                        style={v.rows.shop_sun ? {} : { background: '#ccc' }}
                      >
                        日
                      </small>
                    </div>
                    <p>{v.rows.shop_phone}</p>
                    <p>
                      營業時間:
                      <span>
                        {v.rows.shop_opentime}-{v.rows.shop_closetime}
                      </span>
                    </p>
                    <p>
                      {v.rows.shop_city}
                      {v.rows.shop_area}
                      {v.rows.shop_address_detail}
                    </p>

                    <div className="r-card-button">
                      <a href="/#">
                        <i className="fa-solid fa-caret-right"></i>
                        <span>去逛逛</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="r-card-wrap">
          {filterShop.map((v, i) => {
            return (
              <div className="r-col" key={v[0].sid}>
                <div className="r-card-container">
                  <div className="r-card-img-wrap">
                    <span style={v[0].open ? {} : { background: '#ccc' }}>
                      營業中
                    </span>
                    <img
                      src={`${imgServerUrl}/images/03-shop/${v[0].shop_cover}`}
                      alt=""
                    />
                  </div>
                  <div className="r-card-body">
                    <h2>{v[0].shop_name}</h2>
                    <div className="r-card-body-cates">
                      {v[1].map((v, i) => {
                        return <span key={i}>{v}</span>
                      })}
                    </div>
                    <div className="r-card-week-btn">
                      <small
                        style={v[0].shop_mon ? {} : { background: '#ccc' }}
                      >
                        一
                      </small>
                      <small
                        style={v[0].shop_tue ? {} : { background: '#ccc' }}
                      >
                        二
                      </small>
                      <small
                        style={v[0].shop_wed ? {} : { background: '#ccc' }}
                      >
                        三
                      </small>
                      <small
                        style={v[0].shop_thu ? {} : { background: '#ccc' }}
                      >
                        四
                      </small>
                      <small
                        style={v[0].shop_fri ? {} : { background: '#ccc' }}
                      >
                        五
                      </small>
                      <small
                        style={v[0].shop_sat ? {} : { background: '#ccc' }}
                      >
                        六
                      </small>
                      <small
                        style={v[0].shop_sun ? {} : { background: '#ccc' }}
                      >
                        日
                      </small>
                    </div>
                    <p>{v[0].shop_phone}</p>
                    <p>
                      營業時間:
                      <span>
                        {v[0].shop_opentime}-{v[0].shop_closetime}
                      </span>
                    </p>
                    <p>
                      {v[0].shop_city}
                      {v[0].shop_area}
                      {v[0].shop_address_detail}
                    </p>

                    <div className="r-card-button">
                      <a href="/#">
                        <i className="fa-solid fa-caret-right"></i>
                        <span>去逛逛</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
export default ShopCard
