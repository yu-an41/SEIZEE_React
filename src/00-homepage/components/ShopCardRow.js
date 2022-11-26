import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/ShopCardRow.scss'

import ShopPost from './ShopPost'

function ShopCardRow() {
  const [ shopCardData, setShopCardData ] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 3,
      title: '',
      img: '',
      content: '',
      mb_name: '',
    },
  ])

  const getShopCardRow = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/home/shop-posts`)

      setShopCardData(res.data.shopPostRows)
      console.log(res.data.shopPostRows)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getShopCardRow()
  }, [])

  return (
    <div className="y-forum-card-wrap y-recipe-card-wrap">
      {shopCardData.map((v, i) => {
        return <ShopPost shopInfo={v} key={v.sid} />
      })}
    </div>
  )
}

export default ShopCardRow
