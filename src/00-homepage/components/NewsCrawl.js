import React, { useEffect, useState } from 'react'
import './../styles/NewsCrawl.scss'

import NewsCrawlIcon from './../../dotown/pudding.png'
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
  })

  const getNewsCrawlData = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/home/news-crawl`)

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
          <img src={NewsCrawlIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「最新消息」：</p>
        </div>
        <div className="y-news-content">
          <a href={`/forum/cook/inner/`} alt="news">
            {newsCrawlData.seizeeNewsRow.title}
          </a>
        </div>
      </div>
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={NewsCrawlIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「有趣活動」：</p>
        </div>
        <div className="y-news-content">
          <a href="/#" alt="news">
            {newsCrawlData.eventNewsRow.name}
          </a>
        </div>
      </div>
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={NewsCrawlIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「戰士推薦」：</p>
        </div>
        <div className="y-news-content">
          <a href="/#" alt="news">
            {newsCrawlData.recipeNewsRow.content}
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCrawl
