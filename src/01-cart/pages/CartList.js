import React from 'react'
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowLineWave from './../images/line-wave.svg'

function CartList() {
  return (
    <>
      <div className="y-CartList-container">
        <div className="y-Cart-nav">nav</div>
        <div className="y-Cart-top">
          <div className="y-Cart-page">page</div>
          <div className="y-Cart-status">status</div>
        </div>
        <div className="y-Cart-main">
          <div className="y-Cart-shop">shop</div>
          <div className="y-Cart-details">
            details
            {/* <img src={YellowLineWave} alt="Yellow Line Wave" /> */}
          </div>
          <div className="y-Cart-rec">rec</div>
        </div>
        <div className="y-Cart-bottom">
          bottom
          <div className="y-Cart-rec">rec</div>
          <div className="y-Cart-rec">rec</div>
        </div>
      </div>
    </>
  )
}

export default CartList
