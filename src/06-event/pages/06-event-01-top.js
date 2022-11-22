import '../styles/06-event-01-top.scss'

import carrot from '../svg/carrot.svg'
import tCircle from '../svg/tiltCircle.svg'
import jSeizee from '../svg/SEIZEE.svg'
import jFesti from '../svg/feastival.svg'
import jStar from '../svg/star.svg'
import jOGstar from '../svg/orangeStar.svg'

function Top() {
  return (
    <>
      <div class="j-buleBack">
        <div class="j-middle-group-top">
          <div class="j-carrot">
            <img src={carrot} alt="" />
          </div>
          <div class="j-circle"></div>
          <div class="j-tilt-circle">
            <img src={tCircle} alt="" />
          </div>
          <div class="j-rectangle"></div>
          <div class="j-front-word-1">
            <img src={jSeizee} alt="" />
          </div>
          <div class="j-front-word-2">
            <img src={jFesti} alt="" />
          </div>
          <div class="j-star1">
            <img src={jStar} alt="" />
          </div>
          <div class="j-star2">
            <img src={jOGstar} alt="" />
          </div>
          <div class="j-star3">
            <img src={jOGstar} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Top
