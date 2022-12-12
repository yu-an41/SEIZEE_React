import React, { useEffect, useRef } from 'react'
import '../styles/AboutUs.scss'

export default function AboutUs() {
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <div className="a-video">
      <p className="a-aboutUs">關於我們 About</p>
      <div className="a-videoWrapper">
        <video
          playsInline
          loop
          muted
          alt="All the devices"
          src="/04-product/video/home-about-us.mp4"
          type="video/mp4"
          ref={videoEl}
        />
      </div>
    </div>
  )
}
