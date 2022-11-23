import { useEffect } from 'react'
import { imgUrl, imgServerUrl } from '../shop-config'

function ShopCard({ filterShop }) {
  // console.log(filterShop)
  return (
    <>
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
                    <small style={v[0].shop_mon ? {} : { background: '#ccc' }}>
                      一
                    </small>
                    <small style={v[0].shop_tue ? {} : { background: '#ccc' }}>
                      二
                    </small>
                    <small style={v[0].shop_wed ? {} : { background: '#ccc' }}>
                      三
                    </small>
                    <small style={v[0].shop_thu ? {} : { background: '#ccc' }}>
                      四
                    </small>
                    <small style={v[0].shop_fri ? {} : { background: '#ccc' }}>
                      五
                    </small>
                    <small style={v[0].shop_sat ? {} : { background: '#ccc' }}>
                      六
                    </small>
                    <small style={v[0].shop_sun ? {} : { background: '#ccc' }}>
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
    </>
  )
}
export default ShopCard
