import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/OfficialCardRow.scss'

import OfficialPost from './OfficialPost'

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
    <div className="y-forum-card-wrap y-recipe-card-wrap">
      {officialCardData.map((v, i) => {
        return <OfficialPost officialInfo={v} key={v.sid} />
      })}
    </div>
  )
}

export default OfficialCardRow
