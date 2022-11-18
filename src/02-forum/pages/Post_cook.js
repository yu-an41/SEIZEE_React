import React from 'react'
import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import CardPost from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import { arraySchema } from 'eslint-plugin-jsx-a11y/lib/util/schemas'

function PostCook() {
  const arrayR = [1, 1, 1, 1, 1]
  const arrayM = [1, 1, 1, 1, 1]
  const arrayL = [1, 1, 1, 1, 1]
  return (
    <>
      <div className="p-PostWrap">
        <div className="p-sideBarWrap">
          <SideBar />
        </div>
        <div className="p-containerWrap">
          <SearchBar />
          <div className="p-CardWrap">
            <div className="p-CardPost p-CardPostL">
              {arrayR.map((v, i) => {
                return (
                  <div key={i} className="p-Card">
                    <CardPost />
                  </div>
                )
              })}
            </div>
            <div className="p-CardPost p-CardPostM">
              {arrayL.map((v, i) => {
                return (
                  <div key={i} className="p-Card">
                    <CardPost />
                  </div>
                )
              })}
            </div>
            <div className="p-CardPost p-CardPostR">
              {arrayR.map((v, i) => {
                return (
                  <div key={i} className="p-Card">
                    <CardPost />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="p-RecommendationWrap">
          <Recommendation />
        </div>
      </div>
    </>
  )
}

export default PostCook
