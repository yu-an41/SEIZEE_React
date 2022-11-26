import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import './../styles/OfficialPost.scss'

import OfficialPic from './../../dotown/toast.png'

function OfficialPost({ officialInfo }) {
  const { sid, title, img, content } = officialInfo
  return (
    <div className="y-official-card-container">
      <Link
        to={`/forum/cook/inner${officialInfo.sid}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="y-official-top">
          <div className="y-official-author">
            <p className="y-official-author-name">{`SEIZEE 編輯室`}</p>
          </div>
          <div className="y-official-title">
            <p>{title}</p>
          </div>
        </div>
        <div className="y-official-text">
          <p>{content}</p>
        </div>
        <div className="y-official-pic">
          <img src={OfficialPic} alt="official banner" />
        </div>
      </Link>
    </div>
  )
}

export default OfficialPost
