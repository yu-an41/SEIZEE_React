/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesForum.scss'
import LikeLabels from '../components/LikeLabels'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import dayjs from 'dayjs'

function LikesForum() {
  const [likeForum, setLikeForum] = useState([])

  const mb_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).mb_sid
    : '未登入'

  const getLikeForum = async () => {
    try {
      if (mb_sid === '未登入') {
        // console.log('未登入，無法取得收藏列表');
        return
      }
      const response = await axios.get(
        `http://localhost:3004/forum/forum_likes?mid=${mb_sid}`
      )
      const loveData = response.data.rows
      console.log({ loveData })
      //設定到state裡
      setLikeForum(loveData)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }
  // console.log(likeShops)
  // didMount時載入資料
  useEffect(() => {
    getLikeForum()
  }, [])
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-f">
              <h2 className="s-l-f-title">我的收藏</h2>
              <div className="s-l-f-card">
                <LikeLabels />
                <div className="s-l-f-card-inside">
                  {/* <div className="s-l-f-data">
                    <div className="s-l-f-line"></div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單日期</h3>
                      <span className="s-l-f-answer">forum</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單編號</h3>
                      <span className="s-l-f-answer">bb</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單金額</h3>
                      <span className="s-l-f-answer">cc</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單狀態</h3>
                      <span className="s-l-f-answer">dd</span>
                    </div>
                    <div className="s-l-f-items">
                      <h3 className="s-l-f-question">訂單備註</h3>
                      <span className="s-l-f-answer">查詢訂單</span>
                    </div>
                  </div> */}
                  {likeForum.map((v, i) => {
                    return (
                      <div className="p-love-card-container" key={i}>
                        <div className="p-love-card-title">
                          <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className="p-love-card-cover-middle">
                          <div className="p-love-card-cover-wrap">
                            <img
                              className="p-love-card-cover"
                              src={`http://localhost:3004/images/02-forum/cook/${v.img}`}
                            />
                          </div>
                        </div>
                        <div className="p-love-card-footer">
                          <p className="p-love-card-name">{v.title}</p>
                          <p className="p-love-card-info">
                            {dayjs(v.created_at).format('YYYY.MM.DD')}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LikesForum
