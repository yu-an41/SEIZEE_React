/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import { Card_official } from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import TabCook from '../components/TabCook'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function PostCook() {
  const [officialPostData, setOfficialPostData] = useState([
    {
      sid: '',
      categories_sid: '',
      title: '',
      img: '',
      video: '',
      induction: '',
      content: '',
      hashtag: '',
      created_at: '',
      tag: [
        {
          categories_sid: 1,
          post_sid: 1,
          tagContent: '',
          created_at: '',
        },
      ],
    },
  ])
  const getOfficialData = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/forum/post_official`)

      setOfficialPostData(res.data.officialPostRows)
      console.log(res.data.officialPostRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getOfficialData()
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
            {officialPostData &&
              officialPostData.map((v, i) => {
                return <Card_official postData={v} key={i} />
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
