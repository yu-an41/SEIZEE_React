import React from 'react'

import './../styles/Side_bar.scss'
import pixelHomeLine from './../p-imgs/pixel-home-line.svg'
import pixelOfficialLine from './../p-imgs/pixel-official-line.svg'
import pixelStorelLine from './../p-imgs/pixel-store-line.svg'
import pixelSharelLine from './../p-imgs/pixel-share-line.svg'
import pixelCookLine from './../p-imgs/pixel-cook-line.svg'
import pixelBookLine from './../p-imgs/pixel-book-line.svg'
import book from './../../dotown/book.png'

import YellowWave from './YellowWave'

function side_bar() {
  return (
    <>
      <div className="p-side-bar">
        <div className="p-side-bar-button">
          <div className="p-buttonWrap">
            <div className="p-imgWrap">
              <img className="p-Home" src={pixelHomeLine} alt="" />
            </div>
            <p>首頁</p>
          </div>
          <div className="p-buttonWrap">
            <div className="p-imgWrap">
              <img className="p-official" src={pixelOfficialLine} alt="" />
            </div>
            <p>SEIZEE版</p>
          </div>
          <div className="p-buttonWrap">
            <div className="p-imgWrap">
              <img className="p-store" src={pixelStorelLine} alt="" />
            </div>
            <p>店家版</p>
          </div>
          <div className="p-buttonWrap">
            <div className="p-imgWrap">
              <img className="p-share" src={pixelSharelLine} alt="" />
            </div>
            <p>戰士版</p>
          </div>
          <div className="p-buttonWrap">
            <div className="p-imgWrap">
              <img className="p-cook" src={pixelCookLine} alt="" />
            </div>
            <p>剩食料理版</p>
          </div>
          <div className="p-buttonWrap">
            <div className="p-imgWrap">
              <img className="p-book" src={pixelBookLine} alt="" />
            </div>
            <p>我的發文</p>
          </div>
          <div className="p-buttonWrap p-btnBook">
            <div className="p-imgWrap">
              <img className="p-book" src={book} alt="" />
            </div>
          </div>
        </div>
        <YellowWave />
      </div>
    </>
  )
}

export default side_bar
