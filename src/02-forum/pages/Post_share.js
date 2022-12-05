import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import { Card_share } from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import TabCook from '../components/TabCook'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function PostCook() {
  const [sharePostData, setSharePostData] = useState([
    {
      sid: '',
      categories_sid: '',
      title: '',
      img: '',
      video: '',
      content: '',
      hashtag: '',
      created_at: '',
    },
  ])
  const getSharePostData = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/forum/post_share`)

      setSharePostData(res.data.sharePostRows)
      console.log(res.data.sharePostRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getSharePostData()
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
            {sharePostData &&
              sharePostData.map((v) => {
                return <Card_share postData={v} key={v.sid} />
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
      <div className="p-footer">
        <Footer />
      </div>
    </>
  )
}

export default PostCook
