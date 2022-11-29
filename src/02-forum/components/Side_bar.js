import React, { useState } from 'react'

import './../styles/Side_bar.scss'
import pixelHomeLine from './../p-imgs/pixel-home-line.svg'
import pixelOfficialLine from './../p-imgs/pixel-official-line.svg'
import pixelStorelLine from './../p-imgs/pixel-store-line.svg'
import pixelSharelLine from './../p-imgs/pixel-share-line.svg'
import pixelCookLine from './../p-imgs/pixel-cook-line.svg'
import pixelBookLine from './../p-imgs/pixel-book-line.svg'
import book from './../../dotown/book.png'

import YellowWave from './YellowWave'
import { Link } from 'react-router-dom'

function Side_bar() {
  const [barToggleState, setBarToggleState] = useState(1)
  const toggleBar = (index) => {
    setBarToggleState(index)
  }
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

          <div
            className={
              barToggleState === 2 ? 'p-buttonWrap p-activPage' : 'p-buttonWrap'
            }
          >
            <Link to={`/forum/official`}>
              <div className="p-imgWrap">
                <img className="p-official" src={pixelOfficialLine} alt="" />
              </div>
            </Link>
            <p>SEIZEE版</p>
          </div>

          <div className="p-buttonWrap">
            <Link to={`/forum/store`}>
              <div className="p-imgWrap">
                <img className="p-store" src={pixelStorelLine} alt="" />
              </div>
            </Link>
            <p>店家版</p>
          </div>
          <div className="p-buttonWrap">
            <Link to={`/forum/share`}>
              <div className="p-imgWrap">
                <img className="p-share" src={pixelSharelLine} alt="" />
              </div>
            </Link>
            <p>戰士版</p>
          </div>
          <div
            className={
              barToggleState === 5 ? 'p-buttonWrap p-activPage' : 'p-buttonWrap'
            }
            onClick={() => toggleBar(5)}
          >
            <Link to={`/forum/cook`}>
              <div className="p-imgWrap">
                <img className="p-cook" src={pixelCookLine} alt="" />
              </div>
            </Link>
            <p>剩食料理版</p>
          </div>
          <div className="p-buttonWrap">
            <Link to={`/forum/myPost`}>
              <div className="p-imgWrap">
                <img className="p-book" src={pixelBookLine} alt="" />
              </div>
            </Link>
            <p>我的發文</p>
          </div>
          <div className="p-buttonWrap p-btnBook">
            <Link to={`/forum/writeForm`}>
              <div className="p-imgWrap">
                <img className="p-book" src={book} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="p-YellowWaveWrap">
          <YellowWave />
        </div>
      </div>
    </>
  )
}

export default Side_bar
