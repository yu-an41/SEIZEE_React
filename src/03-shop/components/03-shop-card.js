import { imgUrl, imgServerUrl } from '../shop-config'

function ShopCard({ shops }) {
  console.log(shops)
  return (
    <>
      <div className="r-card-wrap">
        {shops.map((v, i) => {
          return (
            <div className="r-col" key={v.sid}>
              <div className="r-card-container">
                <div className="r-card-img-wrap">
                  <span>營業中</span>
                  <img
                    src={`${imgServerUrl}/images/03-shop/${v.shop_cover}`}
                    alt=""
                  />
                </div>
                <div className="r-card-body">
                  <h2>{v.shop_name}</h2>
                  <div className="r-card-week-btn">
                    <small style={v.shop_mon ? {} : { background: '#ccc' }}>
                      一
                    </small>
                    <small style={v.shop_tue ? {} : { background: '#ccc' }}>
                      二
                    </small>
                    <small style={v.shop_wed ? {} : { background: '#ccc' }}>
                      三
                    </small>
                    <small style={v.shop_thu ? {} : { background: '#ccc' }}>
                      四
                    </small>
                    <small style={v.shop_fri ? {} : { background: '#ccc' }}>
                      五
                    </small>
                    <small style={v.shop_sat ? {} : { background: '#ccc' }}>
                      六
                    </small>
                    <small style={v.shop_sun ? {} : { background: '#ccc' }}>
                      日
                    </small>
                  </div>
                  <p>{v.shop_phone}</p>
                  <p>
                    營業時間:
                    <span>
                      {v.shop_opentime}-{v.shop_closetime}
                    </span>
                  </p>
                  <p>
                    {v.shop_city}
                    {v.shop_area}
                    {v.shop_address_detail}
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
