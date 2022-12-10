import React, { useEffect } from 'react'
import NavBar from './../../components/NavBar'

import './../styles/TapPay.scss'

function TapPay() {
  useEffect(() => {})
  const getCardView = () => {
    console.log('get card info')
  }
  return (
    <>
      {/* <div className="y-tappay-container">
        <div class="col-md-12">
          <div class="form-group">
            <label for="number">卡號</label>
            <div class="form-control" ref="number"></div>
            <small>(可填入： 4242 4242 4242 4242)</small>
          </div>
          <div class="form-group">
            <label for="cardExpirationDate">卡片到期日</label>
            <div class="form-control" ref="expirationDate"></div>
            <small>(可填入： 01/23)</small>
          </div>

          <div class="form-group">
            <label for="cardCcv">後三碼</label>
            <div class="form-control" ref="ccv"></div>
            <small>(可填入： 123)</small>
          </div>
        </div>
      </div> */}

      <div className="y-tappay-container">
        <div className="y-section y-section-nav-bg">
          <NavBar />
        </div>

        <div className="y-tappay-form">
          <label>TapPay</label>

          <div id="cardview-container" className="y-cardview-container">
            <div className="tpfield" id="card-number"></div>
            <div className="tpfield" id="card-expiration-date"></div>
            <div className="tpfield" id="card-ccv"></div>

            <button id="submit-button" onclick={getCardView}>
              Get Prime
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TapPay
