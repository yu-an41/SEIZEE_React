import { imgUrl, imgServerUrl } from '../shop-config'

function ShopHcard({ shops }) {
  // console.log(shops)
  // const { shops } = props
  // console.log([shops][0])
  return (
    <>
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
    </>
  )
}
export default ShopHcard
