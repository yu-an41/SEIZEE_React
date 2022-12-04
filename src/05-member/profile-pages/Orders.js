import '.././style/profile-pages/Orders.scss'

import React, { useEffect, useContext, useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import { useLocation } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import axios from 'axios'
import { PROFILE_ORDERS, PROFILE_ORDERS_DETAILS } from '../../my-config'
import dayjs from 'dayjs'
import ReactLoading from 'react-loading'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

function Orders() {
  // 訂單數
  // 總共多少筆訂單
  const [mbTotalOrder, setMbTotalOrder] = useState(0)
  // 總共訂單資料用
  const [mbOrderDisplay, setMbOrderDisplay] = useState([])

  // 錯誤訊息用
  const [errorMbOrederMg, setErrorMbOrederMg] = useState('')

  // 訂單細項數
  // 訂單編號
  const [orderIndex, setOrderIndex] = useState(null)
  // 總共多少筆訂單細項
  const [mbTotalOrderDetails, setMbTotalOrderDetails] = useState(0)
  // 總共訂單細項資料用
  const [mbOrderDisplayDetails, setMbOrderDisplayDetails] = useState([])

  // ====================================
  // 讀取訂單
  const location = useLocation()
  const { myAuth } = useContext(AuthContext)

  async function getOrders() {
    const { data } = await axios.get(PROFILE_ORDERS, {
      headers: {
        Authorization: 'Bearer ' + myAuth.token,
      },
    })
    // console.log(myAuth)
    // console.log(myAuth.token)
    // console.log(data)
    // console.log(data.row.length)
    // console.log(data.row)
    // console.log(data.row[1])
    // console.log(response.data)

    if (data.success) {
      setMbTotalOrder(data.row.length)
      setMbOrderDisplay(data.row)
      // alert('有訂單')
    } else {
      setErrorMbOrederMg('目前沒有訂單')
    }
  }

  // console.log(mbOrderDisplay[0])
  // console.log(mbOrderDisplay[1])

  useEffect(() => {
    getOrders()
  }, [location])

  // ====================================
  // 讀取訂單細節

  async function orderToggle(order_num) {
    if (orderIndex === order_num) {
      setOrderIndex(null)
    } else {
      setOrderIndex(order_num)

      const { data: mbOrderDetals } = await axios.post(PROFILE_ORDERS_DETAILS, {
        mbOrderNum: order_num,
      })

      setMbOrderDisplayDetails(mbOrderDetals.row)
      setMbTotalOrderDetails(mbOrderDetals.row.length)

      // console.log(mbOrderDetals)
      // console.log(mbOrderDetals.row)
    }
  }

  console.log('orderIndex', orderIndex)

  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-o">
              <h2 className="s-o-title">訂單查詢</h2>
              <div className="s-o-card">
                {/* orders */}
                {mbTotalOrder === 0 ? (
                  <div className="s-o-data s-o-data-error">
                    {errorMbOrederMg}
                  </div>
                ) : (
                  Array(mbTotalOrder)
                    .fill(mbOrderDisplay)
                    .map((v, i) => {
                      {
                        /* console.log('v', v)
                      console.log('i', i)
                      console.log('v[i].order_sid', v[i].order_sid) */
                      }
                      {
                        /* console.log('v[i].order_sid', v[i].order_sid) */
                      }

                      const day = dayjs(v[i].created_at)

                      return (
                        <React.Fragment key={v[i].order_sid}>
                          <div className="s-o-data">
                            <div className="s-o-line"></div>
                            <div className="s-o-items">
                              <h3 className="s-o-question">訂單日期</h3>
                              <span className="s-o-answer">
                                {day.isValid() &&
                                  day.format('YYYY-MM-DD HH:mm:ss')}
                              </span>
                            </div>
                            <div className="s-o-items">
                              <h3 className="s-o-question">訂單編號</h3>
                              <span className="s-o-answer">
                                {v[i].order_num}
                              </span>
                            </div>
                            <div className="s-o-items">
                              <h3 className="s-o-question">訂單金額</h3>
                              <span className="s-o-answer">$ {v[i].total}</span>
                            </div>
                            <div className="s-o-items">
                              <h3 className="s-o-question">訂單狀態</h3>
                              <span className="s-o-answer">
                                {v[i].order_status_name}
                              </span>
                            </div>
                            <div className="s-o-items">
                              <h3 className="s-o-question">訂單備註</h3>
                              <span
                                className={
                                  orderIndex !== v[i].order_num
                                    ? 's-o-answer s-mboNote1'
                                    : 's-o-answer s-mboNote1 s-o-active'
                                }
                                onClick={() => {
                                  orderToggle(v[i].order_num)
                                }}
                              >
                                查詢訂單
                              </span>
                              <span
                                className={
                                  orderIndex !== v[i].order_num
                                    ? 's-o-answer s-mboNote2'
                                    : 's-o-answer s-mboNote2 s-o-active'
                                }
                                onClick={() => {
                                  orderToggle(v[i].order_num)
                                }}
                              >
                                收合訂單
                              </span>
                            </div>
                          </div>

                          {/* order details */}
                          <div className="s-o-data-details-out">
                            {orderIndex !== v[i].order_num ? (
                              <div
                                className={
                                  orderIndex !== v[i].order_num
                                    ? 's-o-data-details s-orderCloumn'
                                    : 's-o-data-details s-orderCloumn s-o-active'
                                }
                              ></div>
                            ) : (
                              <div
                                className={
                                  orderIndex !== v[i].order_num
                                    ? 's-o-data-details s-orderCloumn'
                                    : 's-o-data-details s-orderCloumn s-o-active'
                                }
                              >
                                {Array(mbTotalOrderDetails)
                                  .fill(mbOrderDisplayDetails)
                                  .map((v, i) => {
                                    {
                                      /* console.log(
                                    'v[i].product_sid',
                                    v[i].product_sid
                                  ) */
                                    }

                                    return (
                                      <div
                                        key={v[i].product_sid}
                                        className="s-o-data-detail"
                                      >
                                        <div className="s-o-line-d"></div>
                                        <div className="s-o-items-d">
                                          <h3 className="s-o-question-d">
                                            商品名稱
                                          </h3>
                                          <span className="s-o-answer-d">
                                            {v[i].product_name}
                                          </span>
                                        </div>
                                        <div className="s-o-items-d">
                                          <h3 className="s-o-question-d">
                                            優惠價
                                          </h3>
                                          <span className="s-o-answer-d">
                                            $ {v[i].total_price / v[i].quantity}
                                          </span>
                                        </div>
                                        <div className="s-o-items-d">
                                          <h3 className="s-o-question-d">
                                            數量
                                          </h3>
                                          <span className="s-o-answer-d">
                                            {v[i].quantity}
                                          </span>
                                        </div>
                                        <div className="s-o-items-d">
                                          <h3 className="s-o-question-d">
                                            小計
                                          </h3>
                                          <span className="s-o-answer-d">
                                            $ {v[i].total_price}
                                          </span>
                                        </div>
                                      </div>
                                    )
                                  })}
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      )
                    })
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
// reference:
// 1. React.Fragment: https://ithelp.ithome.com.tw/m/articles/10278461

export default Orders
