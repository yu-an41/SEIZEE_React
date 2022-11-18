import './styles/03-shop-home.scss'
import './../00-homepage/styles/YellowWave.scss'
import YellowWave from '../00-homepage/components/YellowWave'

function ShopHome() {
  return (
    <>
      <div className="r-shop-home-container">
        <YellowWave />
        <div className="r-shop-home-main">
          <div className="r-shop-home-main-inner">
            <div class="r-shop-home-main-text">
              <p>Creating a better future through food.</p>
              <span>An idea, a way of living, a way of eating.</span>
              <div className="r-shop-home-main-btn">
                {/* <i className="fa-solid fa-caret-right"></i>
                          <span>探索更多美味</span> */}
                <input placeholder="請輸入地址" />
                <a href="/#">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="r-shop-home-main-visual"></div>
        </div>
      </div>
      <div className="r-shop-home-carousel">
        <div className="r-wave-section">
          <div className="r-wave-wrap"></div>
        </div>
        <div className="r-shop-home-carousel-check">
          <label className="r-check-wrap" htmlFor="cate1">
            <input type="checkbox" id="cate1" />
            <span>
              中式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_rice_02.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate2">
            <input type="checkbox" id="cate2" />
            <span>
              美式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_hamburger_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate3">
            <input type="checkbox" id="cate3" />
            <span>
              日式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_osushi_03.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate4">
            <input type="checkbox" id="cate4" />
            <span>
              泰式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_ramen_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate5">
            <input type="checkbox" id="cate5" />
            <span>
              義式
              <div className="r-check-icon">
                <img src="/03-shop-img/food_spaghetti_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap">
            <input type="checkbox" id="cate6" />
            <span>
              麵包{' '}
              <div className="r-check-icon">
                <img src="/03-shop-img/food_croissant_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate7">
            <input type="checkbox" id="cate7" />
            <span>
              冰品
              <div className="r-check-icon">
                <img src="/03-shop-img/food_shaved_ice_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate8">
            <input type="checkbox" id="cate8" />
            <span>
              飲料
              <div className="r-check-icon">
                <img src="/03-shop-img/food_cola_s_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate9">
            <input type="checkbox" id="cate9" />
            <span>
              早餐
              <div className="r-check-icon">
                <img src="/03-shop-img/food_plain_bread_01.png" alt="" />
              </div>
            </span>
          </label>
          <label className="r-check-wrap" htmlFor="cate10">
            <input type="checkbox" id="cate10" />
            <span>
              甜點
              <div className="r-check-icon">
                <img src="/03-shop-img/food_cake_01.png" alt="" />
              </div>
            </span>
          </label>
        </div>
        <div className="r-shop-slider">
          <div className="r-shop-slider-train1">
            <div className="r-shop-slider-img-wrap">
              <img src="/03-shop-img/01cover.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopHome
