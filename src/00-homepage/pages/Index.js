import React from 'react'
import './../styles/Index.scss'
import YellowWave from '../components/YellowWave'

function Index() {
  return (
    <>
      <div className="y-index-container">
        <section className="y-section-nav">
          nav
          <YellowWave />
        </section>
        <section className="y-section-carousel">carousel</section>
        <section className="y-section-nav">nav</section>
      </div>
    </>
  )
}

export default Index
