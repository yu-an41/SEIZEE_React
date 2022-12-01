<<<<<<< HEAD
import './../styles/03-shop-banner.scss'

function ShopBanner({ toggleStatus, setToggleStatus }) {
  function shopToggle() {
    if (toggleStatus === 1) {
      setToggleStatus(0)
    } else {
      setToggleStatus(1)
    }
  }

  // console.log(toggleStatus)
  return (
    <>
      <div className="r-banner-wrap">
        <div className="r-banner-article">
          <div className="r-banner-icon">
            <img src="/03-shop-img/other_glitter_01.png" alt="" />
          </div>
          <div className="r-banner-title">
            <div className="r-banner-inner">
              <small className="r-banner-inner-small">SHOP LIST</small>
              <p className="r-banner-inner-p">店鋪一覽</p>
            </div>
          </div>
        </div>
        <div className="r-banner-button-wrap">
          <div className="r-banner-button">
            <div className="r-btn-list">
              <button
                className="r-btn-list-button"
                onClick={shopToggle}
                style={
                  toggleStatus
                    ? { background: '#113f75', color: '#fff' }
                    : { background: '#fff', color: '#113f75' }
                }
              >
                <i className="fa-solid fa-caret-right"></i>
                <span className="r-btn-list-button-span">依列表檢視</span>
              </button>
            </div>
            <div className="r-btn-map">
              <button
                className="r-btn-map-button"
                onClick={shopToggle}
                style={
                  toggleStatus
                    ? { background: '#fff', color: '#113f75' }
                    : { background: '#113f75', color: '#fff' }
                }
              >
                <i className="fa-solid fa-caret-right"></i>
                <span className="r-btn-map-button-span">依地圖檢視</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopBanner
=======
// function ShopBanner({ toggleStatus, setToggleStatus }) {
//   function shopToggle() {
//     if (toggleStatus === 1) {
//       setToggleStatus(0)
//     } else {
//       setToggleStatus(1)
//     }
//   }

//   // console.log(toggleStatus)
//   return (
//     <>
//       <div className="r-banner-wrap">
//         <div className="r-banner-article">
//           <div className="r-banner-icon">
//             <img src="/03-shop-img/other_glitter_01.png" alt="" />
//           </div>
//           <div className="r-banner-title">
//             <div className="r-banner-inner">
//               <small>SHOP LIST</small>
//               <p>店鋪一覽</p>
//             </div>
//           </div>
//         </div>
//         <div className="r-banner-button-wrap">
//           <div className="r-banner-button">
//             <div className="r-btn-list">
//               <button
//                 onClick={shopToggle}
//                 style={
//                   toggleStatus
//                     ? { background: '#113f75', color: '#fff' }
//                     : { background: '#fff', color: '#113f75' }
//                 }
//               >
//                 <i className="fa-solid fa-caret-right"></i>
//                 <span>依列表檢視</span>
//               </button>
//             </div>
//             <div className="r-btn-map">
//               <button
//                 onClick={shopToggle}
//                 style={
//                   toggleStatus
//                     ? { background: '#fff', color: '#113f75' }
//                     : { background: '#113f75', color: '#fff' }
//                 }
//               >
//                 <i className="fa-solid fa-caret-right"></i>
//                 <span>依地圖檢視</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default ShopBanner
>>>>>>> 4d0636de6cc68618b47ffbd9474d4bfd6e477538
