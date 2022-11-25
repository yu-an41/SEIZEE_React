import React from 'react'

import './../styles/ForumPost.scss'

import ForumPic from './../../dotown/toast.png'

function ForumPost() {
  return (
    <div className="y-forum-card-container">
      <div className="y-forum-top">
        <div className="y-forum-author">
          <p className="y-author-name">惜食料理王</p>
          <p className="y-author-account">@ilove_cooking</p>
        </div>
        <div className="y-forum-title">
          <p>5分鐘快速清冰箱炒蛋</p>
        </div>
      </div>
      <div className="y-forum-text">
        <p>
          竟是全家怎麼看對要買，安的部分巨哪裡貓貓他一我為就算。東我是這人來雖然我，太的這因為工確定流行，比較小時台北些去看得到：麼是因為日麼這樣，生算是拍，會去是原。一個大，別為也會面這種⋯連結昨天，試看還有一覺得我，在這少，投幣愛的真的好的人生畫就是一。
          不說目剛剛才很痛苦，自己發生什：覺得會之其他個報名一句占卜。
        </p>
      </div>
      <div className="y-forum-pic">
        <img src={ForumPic} alt="main picture of the post" />
      </div>
    </div>
  )
}

export default ForumPost
