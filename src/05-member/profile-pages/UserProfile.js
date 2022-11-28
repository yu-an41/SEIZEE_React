import '.././style/profile-pages/UserProfile.scss'
import { Link } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { PROFILE, imgServerUrl } from '../../my-config'
import dayjs from 'dayjs'
import AuthContext from '../../contexts/AuthContext'

function UserProfile() {
  // -----取得sid-----
  const { sid } = useParams()

  // -----會員資料-----
  // 會員資料
  const [listFD, setListFD] = useState({
    mbpPhoto: 'noname.png',
    mbpName: '',
    mbpEmail: '',
    mbpGender: '',
    mbpAddressCity: '',
    mbpAddressArea: '',
    mbpAddressDetail: '',
    mbpPhone: '',
  })

  // 讀取資料
  const location = useLocation()
  const { myAuth } = useContext(AuthContext)

  // console.log(myAuth.token)

  async function getList() {
    // if(!myAuth.authorised) {}

    const response = await axios.get(PROFILE, {
      headers: {
        Authorization: 'Bearer ' + myAuth.token,
      },
    })
    // setListData(response.data)
    console.log(response.data.row)
    // console.log(response)

    setListFD({
      ...listFD,
      mbpPhoto: response.data.row.mb_photo,
      mbpName: response.data.row.mb_name,
      mbpEmail: response.data.row.mb_email,
      mbpPhone: response.data.row.mb_phone,
      mbpDate: response.data.row.mb_created_at,
    })
  }

  useEffect(() => {
    // console.log(2);
    getList()
  }, [location])

  const day = dayjs(listFD.mbpDate)

  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-up">
              <h2 className="s-up-title">我的帳號</h2>
              <div className="s-up-card">
                <div className="s-up-imgBx">
                  <img
                    className="s-up-img"
                    src={`${imgServerUrl}/uploads/05-member/${listFD.mbpPhoto}`}
                    alt=""
                  />
                </div>
                <div className="s-up-content">
                  <h2 className="s-up-username" id="mbpName">
                    {listFD.mbpName}
                  </h2>
                  <div className="s-up-details">
                    <div className="s-up-data">
                      <div className="s-up-items">
                        <h3 className="s-up-question">使用者名稱</h3>
                        <span className="s-up-answer" id="mbpName">
                          {listFD.mbpName}
                        </span>
                      </div>
                      <div className="s-up-items">
                        <h3 className="s-up-question">電子郵件</h3>
                        <span className="s-up-answer" id="mbpEmail">
                          {listFD.mbpEmail}
                        </span>
                      </div>
                      <div className="s-up-items">
                        <h3 className="s-up-question">電話號碼</h3>
                        <span className="s-up-answer" id="mbpPhone">
                          {listFD.mbpPhone}
                        </span>
                      </div>
                      <div className="s-up-items">
                        <h3 className="s-up-question">成為SEIZEE會員時間</h3>
                        <span className="s-up-answer" id="mbpDate">
                          {day.isValid() && day.format('YYYY-MM-DD')}
                        </span>
                      </div>
                    </div>
                    <div className="s-up-actionBtns">
                      <Link
                        className="s-up-actionBtn"
                        to="/profile/update-info"
                      >
                        編輯個人資料
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="s-up-line" />
              <h2 className="s-up-deleteTitle">移除帳號</h2>
              <button className="s-up-deleteAccount">刪除帳號</button>
            </div>
          </div>
        </div>
        <div className="s-footer"></div>
      </div>
    </>
  )
}

export default UserProfile
