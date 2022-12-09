import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './../styles/PostCook.scss'

import AuthContext from '../../contexts/AuthContext'
import ModalNotification from '../../components/ModalNotification'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import WriteBtn from '../components/WriteBtn'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import SideBar from '../components/Side_bar'
import { Card_cook } from '../components/Card_post'

import './../styles/PostCook.scss'

function MyPost() {
  const navigate = useNavigate()
  const { myAuth } = useContext(AuthContext)
  console.log('myAuth', myAuth)
  const [isOpen, setIsOpen] = useState(false)
  const [headerMs, setHeaderMs] = useState('')
  const [bodyMs, setBodyMs] = useState('')

  //console.log(mbSid)
  const [myPostData, setMyPostData] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 4,
      title: '',
      img: '',
      induction: '',
      serving: '',
      times: '',
      likes: 1,
      creat_at: '',
      mb_photo: '',
      mb_name: '惜食料理王',
      mb_email: 'test1@abc.com',
    },
  ])
  console.log('myPostData', myPostData)
  const getMyPostData = async () => {
    try {
      const mbSid = JSON.parse(localStorage.getItem('auth')).mb_sid
      const res = await axios.get(
        `http://localhost:3004/forum/myPost?mid=${mbSid}`
      )
      //console.log(res)
      //   {myAuth.mb_sid}
      setMyPostData(res.data.myCookPostRows)
      //console.log(res.data.myCookPostRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getMyPostData()
  }, [])
  return (
    <>
      <div className="p-navBar">
        <NavBar />
      </div>
      <div className="p-PostWrap">
        <div className="p-sideBarWrap">
          <SideBar />
        </div>
        <div className="p-containerWrap">
          <div className="p-searchBarWrap">
            <SearchBar />
          </div>
          <div className="p-CardWrap">
            {myPostData &&
              myPostData.map((v, i) => {
                return (
                  <>
                    <Card_cook postData={v} key={v.i} />
                  </>
                )
              })}
          </div>
        </div>

        <div className="p-recomAdWrit">
          <div className="p-RecommendationWrap">
            <Recommendation />
          </div>
          <div className="p-writWrap">
            <WriteBtn />
          </div>
        </div>
      </div>
      {/* <div className="p-footer">
        <Footer />
      </div> */}
    </>
  )
}

export default MyPost
