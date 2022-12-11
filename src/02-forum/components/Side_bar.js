import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'

import './../styles/Side_bar.scss'

import ModalNotification from '../../components/ModalNotification'
import AuthContext from './../../contexts/AuthContext'

import pixelHomeLine from './../p-imgs/pixel-home-line.svg'
import pixelOfficialLine from './../p-imgs/pixel-official-line.svg'
import pixelStorelLine from './../p-imgs/pixel-store-line.svg'
import pixelSharelLine from './../p-imgs/pixel-share-line.svg'
import pixelCookLine from './../p-imgs/pixel-cook-line.svg'
import pixelBookLine from './../p-imgs/pixel-book-line.svg'
import book from './../../dotown/book.png'

import YellowWave from './YellowWave'

function Side_bar() {
  const [barToggleState, setBarToggleState] = useState('')
  const navigate = useNavigate()
  const { myAuth } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const [headerMs, setHeaderMs] = useState('')
  const [bodyMs, setBodyMs] = useState('')
  // const aaa = (i) => {
  //   setBarToggleState(i)
  //   console.log(barToggleState)
  // }

  const location = useLocation()
  const closeModal = () => {
    setIsOpen(false)
    // navigate('/forum/cook')
  }
  // console.log(location.pathname)
  const cagPat = location.pathname.split('/')[2]
  console.log(cagPat)
  // console.log(params)
  useEffect(() => {
    setBarToggleState(cagPat)
  }, [])

  return (
    <>
      <div className="p-side-bar">
        <div className="p-side-bar-button">
          <div className="p-buttonWrap">
            <Link to={`/forum/`}>
              <div className="p-imgWrap">
                <img className="p-Home" src={pixelHomeLine} alt="" />
              </div>
            </Link>
            <p>首頁</p>
          </div>

          <div className="p-buttonWrap">
            <Link to={`/forum/official`}>
              <div
                className={
                  barToggleState === 'official' ? ' p-activPage' : 'p-imgWrap'
                }
              >
                <img
                  className={
                    barToggleState === 'official' ? 'p-activImg' : 'p-official'
                  }
                  src={pixelOfficialLine}
                  alt=""
                />
              </div>
            </Link>
            <p>SEIZEE版</p>
          </div>

          <div className="p-buttonWrap">
            <Link to={`/forum/store`}>
              <div
                className={
                  barToggleState === 'store' ? ' p-activPage' : 'p-imgWrap'
                }
              >
                <img
                  className={
                    barToggleState === 'store' ? ' p-activImg' : 'p-store'
                  }
                  src={pixelStorelLine}
                  alt=""
                />
              </div>
            </Link>
            <p>店家版</p>
          </div>
          <div className="p-buttonWrap">
            <Link to={`/forum/share`}>
              <div
                className={
                  barToggleState === 'share' ? ' p-activPage' : 'p-imgWrap'
                }
              >
                <img
                  className={
                    barToggleState === 'share' ? ' p-activImg' : 'p-share'
                  }
                  src={pixelSharelLine}
                  alt=""
                />
              </div>
            </Link>
            <p>戰士版</p>
          </div>
          <div className="p-buttonWrap">
            <Link to={`/forum/cook`}>
              <div
                className={
                  barToggleState === 'cook' ? ' p-activPage' : 'p-imgWrap'
                }
              >
                <img
                  className={
                    barToggleState === 'cook' ? ' p-activImg' : 'p-cook'
                  }
                  src={pixelCookLine}
                  alt=""
                />
              </div>
            </Link>
            <p>剩食料理版</p>
          </div>
          <a
            onClick={() => {
              if (myAuth.authorised) {
                navigate('/forum/myPost')
              } else {
                // alert('login first')
                setIsOpen(true)
                setHeaderMs('請先登入')
                setBodyMs('您還未成為惜食戰士')
              }
            }}
          >
            <div className="p-buttonWrap">
              <div
                className={
                  barToggleState === 'myPost' ? ' p-activPage' : 'p-imgWrap'
                }
              >
                <img
                  className={
                    barToggleState === 'myPost' ? ' p-activImg' : 'p-book'
                  }
                  src={pixelBookLine}
                  alt=""
                />
              </div>

              <p>我的發文</p>
            </div>
          </a>
          <div className="p-buttonWrap p-btnBook">
            <Link to={`/forum/writeForm`}>
              <div
                className={
                  barToggleState === 'writeForm' ? 'p-activPage' : 'p-cook'
                }
              >
                <img
                  className={
                    barToggleState === 'writeForm' ? ' p-activImg' : 'p-cook'
                  }
                  src={book}
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="p-YellowWaveWrap">
          <YellowWave />
        </div>
      </div>
      <ModalNotification
        isOpen={isOpen}
        NotificationHeader={headerMs}
        NotificationBody={bodyMs}
        closeModal={closeModal}
      />
    </>
  )
}

export default Side_bar
