import '../styles/06-event-04-map.scss'

import jCloud1 from '../svg/cloud1.svg'
import jCloud2 from '../svg/cloud2.svg'
import jCloud3 from '../svg/cloud3.svg'
import jCloud4 from '../svg/cloud4.svg'

import jMask from '../img/theater-masks.png'
import jMicrophone from '../img/microphone.png'
import jJuice from '../img/juice.png'
import jStage from '../img/stage.png'
import jCyber from '../img/augmented-reality.png'

function Maps() {
  return (
    <>
      <div className="j-event-middle-map">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            <div>場域地圖</div>
          </div>
        </div>
        <div className="j-map-wrap">
          <div className="j-map-background">
            <div className="j-cloudA">
              <img src={jCloud1} alt="" />
            </div>
            <div className="j-cloudB">
              <img src={jCloud2} alt="" />
            </div>
            <div className="j-cloudC">
              <img src={jCloud3} alt="" />
            </div>
            <div className="j-cloudD">
              <img src={jCloud4} alt="" />
            </div>
            <div className="j-show-pink-wrap">
              <div className="j-show-pink">
                <div>看的場所</div>
                <img src={jMask} alt="" />
              </div>
            </div>
            <div className="j-ted-blue-wrap">
              <div className="j-ted-blue">
                <div>泰迪托克</div>
                <img src={jMicrophone} alt="" />
              </div>
            </div>
            <div className="j-cook-green-wrap">
              <div className="j-cook-green">
                <div>穢土轉生</div>
                <img src={jJuice} alt="" />
              </div>
            </div>
            <div className="j-music-orange-wrap">
              <div className="j-music-orange">
                <div>橘色舞台</div>
                <img src={jStage} alt="" />
              </div>
            </div>
            <div className="j-cyber-purple-wrap">
              <div className="j-cyber-purple">
                <div>合法幻舞</div>
                <img src={jCyber} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Maps
