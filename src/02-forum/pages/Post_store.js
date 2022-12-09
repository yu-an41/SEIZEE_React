import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import { Card_store } from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function PostCook() {
  const [storePostData, setStorePostData] = useState([
    {
      sid: '',
      member_sid: '',
      categories_sid: '',
      store_sid: '',
      title: '',
      img: 'https://reurl.cc/Z19pAp',
      video: null,
      content: '',
      likes: '',
      creat_at: '',
    },
  ])
  const getStorePostData = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/forum/post_store`)

      setStorePostData(res.data.storePostRows)
      console.log(res.data.storePostRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getStorePostData()
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
            {storePostData &&
              storePostData.map((v) => {
                return <Card_store postData={v} key={v.sid} />
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
