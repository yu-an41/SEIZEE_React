import log from 'eslint-plugin-react/lib/util/log'
import { imgUrl, imgServerUrl } from '../shop-config'

function ShopMcard({ shops, shopCate }) {
  console.log(shops)
  return (
    <>
      <div className="r-m-card-wrap">
        {shops.map((v, i) => {
          return (
            <div className="r-m-col" key={v.sid}>
              <div className="r-m-card-container">
                <div className="r-m-card-img">
                  <div className="r-m-card-img-wrap">
                    <img
                      src={`${imgServerUrl}/images/03-shop/${v.shop_cover}`}
                      alt=""
                    />
                  </div>
                  <p>營業中</p>
                  <span>{v.shop_cate}</span>
                </div>
                <div className="r-m-card-body">
                  <h2>{v.shop_name}</h2>
                  <div className="r-m-card-week-btn">
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

                  <div className="r-m-card-button">
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
export default ShopMcard
