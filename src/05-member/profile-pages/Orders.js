import '.././style/profile-pages/Orders.scss'

import React, { useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'

function Orders() {
  const [orderIndex, setOrderIndex] = useState(1)

  function orderToggle() {
    if (orderIndex === 1) {
      setOrderIndex(0)
    } else {
      setOrderIndex(1)
    }
  }
  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-o">
              <h2 className="s-o-title">訂單查詢</h2>
              <div className="s-o-card">
                <div className="s-o-data">
                  <div className="s-o-line"></div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單日期</h3>
                    <span className="s-o-answer" id="mboDate">
                      2022-10-05 14:42:59
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單編號</h3>
                    <span className="s-o-answer" id="mboNum">
                      20220923114231
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單金額</h3>
                    <span className="s-o-answer" id="mboTotalPrice">
                      NT $5000
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單狀態</h3>
                    <span className="s-o-answer" id="mboStatus">
                      {' '}
                      訂單完成{' '}
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單備註</h3>
                    <span
                      className={
                        orderIndex === 1
                          ? 's-o-answer s-mboNote1'
                          : 's-o-answer s-mboNote1 s-o-active'
                      }
                      onClick={orderToggle}
                    >
                      查詢訂單
                    </span>
                    <span
                      className={
                        orderIndex === 1
                          ? 's-o-answer s-mboNote2'
                          : 's-o-answer s-mboNote2 s-o-active'
                      }
                      onClick={orderToggle}
                    >
                      收合訂單
                    </span>
                  </div>
                </div>
                <div className="s-o-data-details-out">
                  <div
                    className={
                      orderIndex === 1
                        ? 's-o-data-details s-orderCloumn'
                        : 's-o-data-details s-orderCloumn s-o-active'
                    }
                  >
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d" id="mbpDate">
                          4
                        </span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d">4</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d">4</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d">4</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="s-o-data">
                  <div className="s-o-line"></div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單日期</h3>
                    <span className="s-o-answer" id="mboDate">
                      2022-10-05 14:42:59
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單編號</h3>
                    <span className="s-o-answer" id="mboNum">
                      20220923114231
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單金額</h3>
                    <span className="s-o-answer" id="mboTotalPrice">
                      NT $5000
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單狀態</h3>
                    <span className="s-o-answer" id="mboStatus">
                      {' '}
                      訂單完成{' '}
                    </span>
                  </div>
                  <div className="s-o-items">
                    <h3 className="s-o-question">訂單備註</h3>
                    <span className="s-o-answer s-mboNote1">查詢訂單</span>
                    <span className="s-o-answer s-mboNote2">收合訂單</span>
                  </div>
                </div>
                <div className="s-o-data-details-out">
                  <div className="s-o-data-details s-orderCloumn">
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d" id="mbpDate">
                          4
                        </span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d">4</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                    <div className="s-o-data-detail">
                      <div className="s-o-line-d"></div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">商品名稱</h3>
                        <span className="s-o-answer-d">漢堡</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">優惠價</h3>
                        <span className="s-o-answer-d">$59</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">數量</h3>
                        <span className="s-o-answer-d">4</span>
                      </div>
                      <div className="s-o-items-d">
                        <h3 className="s-o-question-d">小計</h3>
                        <span className="s-o-answer-d">$236</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-footer"></div>
      </div>
    </>
  )
}

export default Orders
