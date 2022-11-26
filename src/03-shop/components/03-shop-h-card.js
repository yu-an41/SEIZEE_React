import { imgUrl, imgServerUrl } from '../shop-config'

function ShopHcard({ shops, selResultShop, statusShop }) {
  // console.log(selResultShop)
  // console.log(shops)
  return (
    <>
      {statusShop ? (
        <div className="r-shop-slider-traintop">
          {shops.map((v, i) => {
            return (
              <div className="r-shop-slider-img-wrap" key={v.rows.sid}>
                <img
                  src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                  alt=""
                />
                <div className="r-shop-slider-content">
                  <p>{v.rows.shop_name}</p>
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
                <img
                  src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                  alt=""
                />
                <div className="r-shop-slider-content">
                  <p>{v.rows.shop_name}</p>
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
