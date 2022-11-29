import React, { useEffect, useState } from 'react'
import './../styles/NewsCrawl.scss'

// import NewsCrawlIcon from './../../dotown/pudding.png'
import RecipeNewsIcon from './../../dotown/pudding.png'
import SeizeeNewsIcon from './../../dotown/pizza.png'
import ShopNewsIcon from './../../dotown/strawberry.png'
import EventNewsIcon from './../../dotown/book.png'
import axios from 'axios'

function NewsCrawl() {
  const [newsCrawlData, setNewsCrawlData] = useState({
    recipeNewsRow: {
      sid: 1,
      title: '',
      content: '',
    },
    eventNewsRow: {
      sid: 1,
      title: '',
      content: '',
    },
    seizeeNewsRow: {
      sid: 1,
      title: '',
      content: '',
    },
    shopNewsRow: {
      sid: 1,
      title: '外型不可愛，但口感很可以的新鮮草莓上市囉',
      content: '',
    },
  })

  const getNewsCrawlData = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/home/news-crawl`)

      const newsCrawl = res.data
      console.log(newsCrawl)

      setNewsCrawlData(res.data)
      // console.log(res.data.NewsCrawlRows)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getNewsCrawlData()
  }, [])

  return (
    <div className="y-news-crawl-container">
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={SeizeeNewsIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「最新SEIZEE消息」：</p>
        </div>
        <div className="y-news-content">
          <a href={`/forum/cook/inner/`} alt="news">
            {newsCrawlData.seizeeNewsRow.title}
          </a>
        </div>
      </div>
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={EventNewsIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「本週活動焦點」：</p>
        </div>
        <div className="y-news-content">
          <a href={`/forum/cook/inner/`} alt="news">
            {newsCrawlData.eventNewsRow.name}
          </a>
        </div>
      </div>
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={RecipeNewsIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「戰士美味食譜」：</p>
        </div>
        <div className="y-news-content">
          <a
            href={`/forum/cook/inner/${newsCrawlData.recipeNewsRow.sid}`}
            alt="news"
          >
            {newsCrawlData.recipeNewsRow.title}
          </a>
        </div>
      </div>
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={ShopNewsIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「友善商家推薦」：</p>
        </div>
        <div className="y-news-content">
          {/* <a
            href={`/forum/store/inner/${newsCrawlData.shopNewsRow.sid}`}
            alt="news"
          >
            {newsCrawlData.shopNewsRow.title}
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default NewsCrawl
