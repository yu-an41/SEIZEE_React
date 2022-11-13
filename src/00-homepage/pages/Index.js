import React from 'react'
import './../styles/Index.scss'

function Index() {
  return (
    <>
      <div>
        Index
        <div className="y-index-container">
          <section className="y-section-nav">
            <div className="y-wave-section">
              <div class="wave-base"></div>
              <div class="wave"></div>
            </div>
            <p className="y-test">loremmmmm</p>
          </section>
          <section className="y-section-carousel">carousel</section>
          <section className="y-section-nav">nav</section>
        </div>
      </div>
    </>
  )
}

export default Index
