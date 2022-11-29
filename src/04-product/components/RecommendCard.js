import { useState, useEffect } from 'react'
import axios from 'axios'
import './style/RecommendCard.scss'

function RecommendCard(picture_url) {
  const [recommend, setRecommend] = useState([])

  async function getRecommend() {
    const response = await axios.get(
      'http://localhost:3002/product?shop_list_sid=3'
    )
    console.log(response)
    setRecommend(response.data)
  }
  useEffect(() => {
    getRecommend()
  }, [])

  return (
    <>
      <div className="a-productRecommend">
        <div className="a-recommendText">
          <img src="04-product/svg/nut.svg" alt="" />
          <h3>惜食商品推薦</h3>
        </div>
        <div className="a-recommendWrapper">
          <img src={`img/${picture_url}`} alt="" />
          <img src={`img/${picture_url}`} alt="" />
          <img src={`img/${picture_url}`} alt="" />
          <img src={`img/${picture_url}`} alt="" />
        </div>
      </div>
    </>
  )
}

export default RecommendCard
