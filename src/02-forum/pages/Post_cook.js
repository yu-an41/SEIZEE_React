import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import CardPost from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import TabCook from '../components/TabCook'

function PostCook() {
  const [cookPostData, setCookPostData] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 4,
      title: '',
      img: '',

      content: '',
      serving: '',
      times: '',
      likes: 1,
      creat_at: '2022-11-13T00:30:51.000Z',
    },
  ])
  const getCookPostData = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/forum/post_cook`)

      setCookPostData(res.data.cookPostRows)
      console.log(res.data.cookPostRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getCookPostData()
  }, [])

  return (
    <>
      <div className="p-PostWrap">
        <div className="p-sideBarWrap">
          <SideBar />
        </div>
        <div className="p-containerWrap">
          <div className="p-searchBarWrap">
            <SearchBar />
          </div>
          <div className="p-tabCookWrap">
            <TabCook />
          </div>
          <div className="p-CardWrap">
            {cookPostData &&
              cookPostData.map((v) => {
                return <CardPost cookinner={v} key={v.sid} />
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
    </>
  )
}

export default PostCook
