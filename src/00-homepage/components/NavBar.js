import React from 'react'
import LogoBluePink from './../../logo-and-fonts/LOGO-blue-pink.svg'
import Menu from './../../components/Menu'

function NavBar() {
  return (
    <>
      <section className="y-section y-section-nav">
        <div className="y-logo-wrap">
          <div className="y-svg-wrap">
            <img src={LogoBluePink} alt="SEIZEE_logo" />
          </div>
        </div>
        <div className="y-nav-right">
          <div className="y-icon-round y-cart-icon"></div>
          <div className="y-icon-round y-member-icon"></div>
          <Menu />
        </div>
      </section>
    </>
  )
}

export default NavBar
