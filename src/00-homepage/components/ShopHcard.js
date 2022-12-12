import { imgUrl, imgServerUrl } from '../../03-shop/shop-config'
import { Link } from 'react-router-dom'

function ShopHcard({ shops, selResultShop, statusShop }) {

  return (
    <>
      {statusShop ? (
        <div className="r-shop-slider-traintop">
          {shops.map((v, i) => {
            return (
              <div className="r-shop-slider-img-wrap" key={v.rows.sid}>
                <Link to={`/productList/${v.rows.sid}`}>
                  <img
                    src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                    alt=""
                  />
                </Link>
                <div className="r-shop-slider-content">
                  <p className="r-shop-slider-content-p">{v.rows.shop_name}</p>
                  <div className="r-shop-slider-content-cate">
                    {v.cates.map((value, index) => {
                      return (
                        <span
                          key={index}
                          className="r-shop-slider-content-span"
                        >
                          {value}/
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="r-shop-slider-traintop">
          {selResultShop.map((v, i) => {
            return (
              <div className="r-shop-slider-img-wrap" key={v.rows.sid}>
                <Link to={`/productList/${v.rows.sid}`}>
                  <img
                    src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                    alt=""
                  />
                </Link>
                <div className="r-shop-slider-content">
                  <p className="r-shop-slider-content-p">{v.rows.shop_name}</p>
                  <div className="r-shop-slider-content-cate">
                    {v.cates.map((value, index) => {
                      return (
                        <span
                          key={index}
                          className="r-shop-slider-content-span"
                        >
                          {value}/
                        </span>
                      )
                    })}
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
export default ShopHcard
