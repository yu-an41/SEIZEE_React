import React from 'react'
import './../styles/Index.scss'
import YellowWave from '../components/YellowWave'

function Index() {
  return (
    <>
      <div className="y-index-container">
        <section className="y-section-nav">
          <YellowWave />
        </section>
        <section className="y-section-carousel">carousel</section>
        <section className="y-section-search">search</section>
        <section className="y-section-merch">merch</section>
      </div>
    </>
  )
}

export default Index
