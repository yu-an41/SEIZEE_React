import './styles/03-shop-list.scss'
import ShopCard from './components/03-shop-card'
import ShopMcard from './components/03-shop-m-card'
import ShopMap from './components/03-shop-map'

function ShopList() {
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
                  <div className="r-place-article">
                    <div className="r-shop-icon-p">
                      <img src='/03-shop-img/mappin_01.png' alt="" />
                    </div>
                    <div className="r-place-title">
                      <span>Place</span>
                      <p>地區搜尋</p>
                    </div>
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
                <div className="r-cate-article">
                    <div className="r-shop-icon-c">
                      <img src='/03-shop-img/food_hamburger_01.png' alt="" />
                    </div>
                    <div className="r-cate-title">
                    <span>Category</span>
                    <p>種類搜尋</p>
                  </div>
                  </div>
                  <div className="r-cate-select">
                    <select name="" id="">
                        <option value="">請選擇</option>
                        <option value="">中式</option>
                        <option value="">美式</option>
                        <option value="">日式</option>
                    </select>
                  </div>
                </div>
                <div className="r-filter-wrap">
                <div className="r-filter-article">
                    <div className="r-shop-icon-f">
                      <img src='/03-shop-img/food_donuts_01.png' alt="" />
                    </div>
                    <div className="r-filter-title">
                    <span>Filter</span>
                    <p>進階搜尋</p>
                  </div>
                  </div>
                  <div className="r-filter-select">
                    <select name="" id="">
                        <option value="">請選擇</option>
                        <option value="">營業中</option>
                        <option value="">全部店家</option>
                    </select>
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
                  <div className="r-banner-button-wrap">
                    <div class="r-banner-button">
                      <div className="r-btn-list-map">
                      <a href="/#">
                      <i className="fa-solid fa-caret-right"></i>
                      <span>依列表檢視</span>
                      </a>
                      </div>
                      <div className="r-btn-list-map">
                      <a href="/#">
                      <i className="fa-solid fa-caret-right"></i>
                      <span>依地圖檢視</span>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ShopCard/>
                {/* <ShopMap/> */}
                {/* <ShopMcard/> */}
            </div>
          </div>
        </div>
      </>
    )
  }
  export default ShopList