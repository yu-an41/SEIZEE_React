import React from 'react'
import './../styles/NewsCrawl.scss'

import NewsCrawlIcon from './../../dotown/pudding.png'

function NewsCrawl() {
  return (
    <div className="y-news-crawl-container">
      {/* 以下為map部分 */}
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={NewsCrawlIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「戰士版」</p>
        </div>
        <div className="y-news-content">
          <a href="/#" alt="news">
            simply dummy text of the printing and typesetting industry.
          </a>
        </div>
      </div>
      {/* 每次產生一個 .y-news-list-wrap */}
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={NewsCrawlIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「戰士版」</p>
        </div>
        <div className="y-news-content">
          <a href="/#" alt="news">
            simply dummy text of the printing and typesetting industry.
          </a>
        </div>
      </div>
      <div className="y-news-list-wrap">
        <div className="y-new-icon-wrap">
          <img src={NewsCrawlIcon} alt="icon for news crawl" />
        </div>
        <div className="y-news-category">
          <p>「戰士版」</p>
        </div>
        <div className="y-news-content">
          <a href="/#" alt="news">
            simply dummy text of the printing and typesetting industry.
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCrawl
