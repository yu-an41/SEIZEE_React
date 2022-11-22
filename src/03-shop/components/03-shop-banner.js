function ShopBanner() {
  return (
    <>
      <div className="r-banner-wrap">
        <div className="r-banner-article">
          <div className="r-banner-icon">
            <img src="/03-shop-img/other_glitter_01.png" alt="" />
          </div>
          <div className="r-banner-title">
            <div className="r-banner-inner">
              <small>SHOP LIST</small>
              <p>店鋪一覽</p>
            </div>
          </div>
        </div>
        <div className="r-banner-button-wrap">
          <div className="r-banner-button">
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
    </>
  )
}
export default ShopBanner
