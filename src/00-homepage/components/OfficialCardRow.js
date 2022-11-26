import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/OfficialCardRow.scss'

import OfficialPost from './OfficialPost'
import OfficialHead from './../images/homepage-forum-share.svg'

function OfficialCardRow() {
  const [officialCardData, setOfficialCardData] = useState([
    {
      sid: 1,
      categories_sid: 3,
      title: '',
      img: '',
      content: '',
    },
  ])

  const getOfficialCardRow = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/home/official-posts`)

      setOfficialCardData(res.data.officialPostRows)
      console.log(res.data.officialPostRows)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getOfficialCardRow()
  }, [])

  return (
    <div className="y-official-card-row">
      <div className="y-forum-head y-official-head">
        <img src={OfficialHead} alt="official posts" />
        <p>SEIZEE好文</p>
      </div>
      <div className="y-forum-card-wrap y-official-card-wrap">
        {officialCardData.map((v, i) => {
          return <OfficialPost officialInfo={v} key={v.sid} />
        })}
      </div>
    </div>
  )
}

export default OfficialCardRow
