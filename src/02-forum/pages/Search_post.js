import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import './../styles/PostSearch.scss'

import SideBar from '../components/Side_bar'
import { Card_cook } from '../components/Card_post'
import Card_search from '../components/Card_search'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function Search_post() {
  const [searchParams] = useSearchParams()
  const [srhFormPost, setSrhFormPost] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 4,
      title: '',
      img: '',
      icon: '22food.png',
      induction: '',
      serving: '3人份',
      times: '20分鐘',
      ps: '',
      creat_at: '',
    },
  ])
  const getShrPost = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3004/forum/searchPost?searchData=${searchParams.get(
          'searchData'
        )}`
      )
      setSrhFormPost(res.data.resSearData)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getShrPost()
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
          <div className="p-searchBarWrap">{/* <SearchBar /> */}</div>
          <div className="p-cardTabeCook">
            <div className="p-CardWrap">
              {srhFormPost &&
                srhFormPost.map((v, i) => {
                  return <Card_search searchData={v} key={i} />
                })}
            </div>
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

export default Search_post
