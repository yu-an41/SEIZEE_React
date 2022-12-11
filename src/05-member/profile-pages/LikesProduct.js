import React, { useState, useContext } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesProduct.scss'
import LikeLabels from '../components/LikeLabels'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useLocation } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import axios from 'axios'
import { PROFILE_LIKE_PRODUCT } from '../../my-config'
import { useEffect } from 'react'
import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

function LikesProduct() {
  // 商品收藏細項數
  // 商品收藏編號
  const [LikePIndex, setLikePIndex] = useState(null)
  // 總共多少筆商品收藏細項
  const [LikePDetails, setLikePDetails] = useState(0)
  // 總共商品收藏細項資料用
  const [LikePDisplayDetails, setLikePDisplayDetails] = useState([])

  // 錯誤訊息用
  const [errorLikePMg, setLikePMg] = useState('')

  // Modal
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  // ====================================
  // 讀取商品收藏
  const location = useLocation()
  const { myAuth } = useContext(AuthContext)

  async function getLikeP() {
    const { data } = await axios.get(PROFILE_LIKE_PRODUCT, {
      headers: { Authorization: 'Bearer ' + myAuth.token },
    })

    // console.log(response)
    // console.log(data)
    // console.log(data.row)

    if (data.success) {
      setLikePDetails(data.row.length)
      setLikePDisplayDetails(data.row)
    } else {
      setLikePMg('目前沒有收藏')
    }
  }

  useEffect(() => {
    getLikeP()
  }, [location])

  // ====================================
  // 取消收藏

  // console.log('LikePIndex0', LikePIndex)

  async function LikePToggle(likePSid) {
    // console.log('likePSid1', likePSid)
    // console.log('LikePIndex1', LikePIndex)

    setLikePIndex(likePSid)

    openModal1()
    setHeaderMg('商品收藏')
    setBodyMg('確定要取消收藏?')

    // console.log('likePSid2', likePSid)
    // console.log('LikePIndex2', LikePIndex)
    // console.log(response)

    // keyword: axios withcredentials jwt delete
    // reference: https://stackoverflow.com/questions/51069552/axios-delete-request-with-request-body-and-headers
    // }
  }

  // ModalConfirm
  function openModal1() {
    setIsOpen1(true)
    // console.log('2')
  }

  async function closeModalConfirm() {
    setIsOpen1(false)
    openModal2()

    await axios.delete(PROFILE_LIKE_PRODUCT, {
      headers: { Authorization: 'Bearer ' + myAuth.token },
      data: {
        mbLikePSid: LikePIndex,
      },
    })

    setHeaderMg('商品收藏')
    setBodyMg('取消收藏成功')

    // console.log('3')
  }

  function closeModalCancel() {
    setIsOpen1(false)
  }

  // ModalNotification
  function openModal2() {
    setIsOpen2(true)
  }

  function closeModal() {
    setIsOpen2(false)

    // 重刷頁面 取得最新收藏狀態
    getLikeP()

    // console.log('4')
  }

  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-p">
              <h2 className="s-l-p-title">我的收藏</h2>
              <div className="s-l-p-card">
                <LikeLabels />

                <div className="s-l-p-card-inside">
                  {LikePDetails === 0 ? (
                    <div className=" s-l-p-data-error">{errorLikePMg}</div>
                  ) : (
                    Array(LikePDetails)
                      .fill(LikePDisplayDetails)
                      .map((v, i) => {
                        {
                          /* console.log(v)
                          console.log(v[i].sid) */
                        }
                        return (
                          <div key={v[i].sid} className="r-love-card-container">
                            <div
                              className="r-love-card-title"
                              id="mbLikePSid"
                              onClick={() => {
                                LikePToggle(v[i].sid)
                              }}
                            >
                              <i
                                className={'fa-solid fa-heart s-l-p-heart'}
                              ></i>
                            </div>
                            <div className="r-love-card-cover-middle">
                              <div className="r-love-card-cover-wrap">
                                <img
                                  className="r-love-card-cover"
                                  src={`/04-product/img/${v[i].picture_url}`}
                                />
                                {/* {v[i].picture_url} */}
                              </div>
                            </div>
                            <div className="r-love-card-footer">
                              <p className="r-love-card-name">
                                {v[i].product_name}
                              </p>
                              <p className="r-love-card-info">
                                優惠價 ${v[i].product_price}
                              </p>
                            </div>
                          </div>
                        )
                      })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reference:
        1. how to read a photo from public: https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js */}
        <div className="s-footer">
          <Footer />
        </div>
      </div>

      <ModalConfirm
        closeModalConfirm={closeModalConfirm}
        closeModalCancel={closeModalCancel}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />

      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen2}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default LikesProduct
