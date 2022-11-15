import './03-shop-map.scss'
import './../../node_modules/leaflet/dist/leaflet.css';
import './../../node_modules/leaflet/dist/leaflet';
import Map from './map'
// import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet'

function ShopMap() {
    return (
      <>
        <div className="r-container">
          <div className="r-main-visual">
            <div className="r-slide-bar">
              <div className="r-search-wrap">
                <div className="r-search-article">
                  <div className="r-shop-icon">
                    <img src='/03-shop-img/town_house_02.png' alt="" />
                  </div>
                  <div className="r-shop-title">
                    <span>ALL SHOP</span>
                    <p>店鋪搜尋</p>
                  </div>
                </div>
                <div className="r-place-wrap">
                  <div className="r-place-title">
                    <span>Place</span>
                    <p>地區搜尋</p>
                  </div>
                  <div className="r-place-select">
                    <div>
                      <select name="" id="">
                        <option value="">請選擇</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">2</option>
                        <option value="">2</option>
                        <option value="">2</option>
                      </select>
                    </div>
                    <div>
                      <select name="" id="">
                        <option value="">請選擇</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="r-cate-wrap">
                  <div className="r-cate-title">
                    <span>Category</span>
                    <p>種類搜尋</p>
                  </div>
                  <div className="r-cate-check">
                    <div className="r-check-left">
                      <label className="r-check-wrap" htmlFor="cate1">
                        <input type="checkbox" id="cate1"/>
                        <span>中式<div className="r-check-icon">
                          <img src='/03-shop-img/food_rice_02.png' alt="" />
                        </div></span>
                      </label>
                      <label className="r-check-wrap" htmlFor="cate2">
                        <input type="checkbox" id="cate2"/>
                        <span>美式<div className="r-check-icon">
                          <img src='/03-shop-img/food_hamburger_01.png' alt="" />
                        </div></span>
                        
                      </label>
                      <label className="r-check-wrap" htmlFor="cate3">
                        <input type="checkbox" id="cate3"/>
                        <span>日式<div className="r-check-icon">
                          <img src='/03-shop-img/food_osushi_03.png' alt="" />
                        </div></span>
                        
                      </label>
                      <label className="r-check-wrap" htmlFor="cate4">
                        <input type="checkbox" id="cate4"/>
                        <span>泰式<div className="r-check-icon">
                          <img src='/03-shop-img/food_ramen_01.png' alt="" />
                        </div></span>
                        
                      </label>
                      <label className="r-check-wrap" htmlFor="cate5">
                        <input type="checkbox" id="cate5"/>
                        <span>義式<div className="r-check-icon">
                          <img src='/03-shop-img/food_spaghetti_01.png' alt="" />
                        </div></span>
                        
                      </label>
                    </div>
                    <div className="r-check-right" htmlFor="cate6">
                      <label className="r-check-wrap">
                        <input type="checkbox" id="cate6"/>
                        <span>麵包 <div className="r-check-icon">
                          <img src='/03-shop-img/food_croissant_01.png' alt="" />
                        </div></span>
                       
                      </label>
                      <label className="r-check-wrap" htmlFor="cate7">
                        <input type="checkbox" id="cate7"/>
                        <span>冰品<div className="r-check-icon">
                          <img src='/03-shop-img/food_shaved_ice_01.png' alt="" />
                        </div></span>
                        
                      </label>
                      <label className="r-check-wrap" htmlFor="cate8">
                        <input type="checkbox" id="cate8"/>
                        <span>飲料<div className="r-check-icon">
                          <img src='/03-shop-img/food_cola_s_01.png' alt="" />
                        </div></span>
                        
                      </label>
                      <label className="r-check-wrap"  htmlFor="cate9">
                        <input type="checkbox" id="cate9"/>
                        <span>早餐<div className="r-check-icon">
                          <img src='/03-shop-img/food_plain_bread_01.png' alt="" />
                        </div></span>
                        
                      </label>
                      <label className="r-check-wrap" htmlFor="cate10">
                        <input type="checkbox" id="cate10"/>
                        <span>甜點<div className="r-check-icon">
                          <img src='/03-shop-img/food_cake_01.png' alt="" />
                        </div></span>
                        
                      </label>
                    </div>
                  </div>
                  <div className="r-btn-wrap">
                      <div className="r-search-btn">
                        <button><i className="fa-solid fa-caret-right"></i><span>搜尋GO</span></button>
                      </div>
                  </div>
                  <div className="r-btn-wrap">
                      <div className="r-search-btn">
                        <button> <i className="fa-solid fa-caret-right"></i><span>清除Reset</span></button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="r-wave"></div>
            <div className="r-shop-list" >
                <div className="r-banner-wrap">
                  <div className="r-banner-article">
                    <div className="r-banner-icon">
                      <img src='/03-shop-img/other_glitter_01.png' alt=""/>
                    </div>
                    <div className="r-banner-title">
                    <div className="r-banner-inner">
                      <small>SHOP LIST</small>
                      <p>店鋪一覽</p>
                    </div>
                    </div>
                  </div>
                  <div className="r-banner-select-wrap">
                    <div className="r-banner-select">
                        <select name="" id="">
                          <option value="">全部店鋪</option>
                          <option value="">營業中</option>
                        </select>
                        <select name="" id="">
                          <option value="">依列表檢視</option>
                          <option value="">依地圖檢視</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div className="r-shop-map">
                    <Map/>
                </div>
                <div className="r-m-card-wrap">
                  <div className="r-m-col">
                    <div className="r-m-card-container">
                        <div class="r-m-card-img">
                          <div className="r-m-card-img-wrap">
                            <img src='/03-shop-img/01cover.jpg' alt=""/>
                          </div>
                          <p>營業中</p>
                        </div>
                        <div className="r-m-card-body">
                        <h2>惜食店鋪SEIZEE</h2>
                        <div className="r-m-card-week-btn">
                          <small>一</small>
                          <small>二</small>
                          <small>三</small>
                          <small>四</small>
                          <small>五</small>
                          <small>六</small>
                          <small>日</small>
                        </div>
                        <p>02-12345678</p>
                        <p>營業時間:<span>9:00-21:00</span></p>
                        <p>台北市大安區復興南路一段390號</p>
                        
                        <div className="r-m-card-button">
                          <a href="/#"><i className="fa-solid fa-caret-right"></i>
                            <span>去逛逛</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="r-m-col">
                    <div className="r-m-card-container">
                        <div class="r-m-card-img">
                          <div className="r-m-card-img-wrap">
                            <img src='/03-shop-img/01cover.jpg' alt=""/>
                          </div>
                          <p>營業中</p>
                        </div>
                        <div className="r-m-card-body">
                        <h2>惜食店鋪SEIZEE</h2>
                        <div className="r-m-card-week-btn">
                          <small>一</small>
                          <small>二</small>
                          <small>三</small>
                          <small>四</small>
                          <small>五</small>
                          <small>六</small>
                          <small>日</small>
                        </div>
                        <p>02-12345678</p>
                        <p>營業時間:<span>9:00-21:00</span></p>
                        <p>台北市大安區復興南路一段390號</p>
                        
                        <div className="r-m-card-button">
                          <a href="/#"><i className="fa-solid fa-caret-right"></i>
                            <span>去逛逛</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="r-m-col">
                    <div className="r-m-card-container">
                        <div class="r-m-card-img">
                          <div className="r-m-card-img-wrap">
                            <img src='/03-shop-img/01cover.jpg' alt=""/>
                          </div>
                          <p>營業中</p>
                        </div>
                        <div className="r-m-card-body">
                        <h2>惜食店鋪SEIZEE</h2>
                        <div className="r-m-card-week-btn">
                          <small>一</small>
                          <small>二</small>
                          <small>三</small>
                          <small>四</small>
                          <small>五</small>
                          <small>六</small>
                          <small>日</small>
                        </div>
                        <p>02-12345678</p>
                        <p>營業時間:<span>9:00-21:00</span></p>
                        <p>台北市大安區復興南路一段390號</p>
                        
                        <div className="r-m-card-button">
                          <a href="/#"><i className="fa-solid fa-caret-right"></i>
                            <span>去逛逛</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="r-m-col">
                    <div className="r-m-card-container">
                        <div class="r-m-card-img">
                          <div className="r-m-card-img-wrap">
                            <img src='/03-shop-img/01cover.jpg' alt=""/>
                          </div>
                          <p>營業中</p>
                        </div>
                        <div className="r-m-card-body">
                        <h2>惜食店鋪SEIZEE</h2>
                        <div className="r-m-card-week-btn">
                          <small>一</small>
                          <small>二</small>
                          <small>三</small>
                          <small>四</small>
                          <small>五</small>
                          <small>六</small>
                          <small>日</small>
                        </div>
                        <p>02-12345678</p>
                        <p>營業時間:<span>9:00-21:00</span></p>
                        <p>台北市大安區復興南路一段390號</p>
                        
                        <div className="r-m-card-button">
                          <a href="/#"><i className="fa-solid fa-caret-right"></i>
                            <span>去逛逛</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  export default ShopMap