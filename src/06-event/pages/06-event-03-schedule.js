import '../styles/06-event-03-schedule.scss'

import jLogo from '../svg/LOGO.svg'
import jWorm from '../svg/worm.svg'
import jMenu from '../svg/menu.svg'

import jStar from '../svg/star.svg'
import jHeart from '../svg/heart-none.svg'

function Schedule() {
  return (
    <>
      <div class="j-sides">
        <div class="j-left">
          <ul>
            <li>
              <img src={jLogo} alt="" />
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>所有活動</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>時間表</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>地圖</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
            <li>
              <div>我的票卷</div>
            </li>
            <li>
              <img src={jWorm} alt="" />
            </li>
          </ul>
        </div>
        <div class="j-right">
          <ul>
            <li>
              <img src={jMenu} alt="" />
            </li>
            <li>
              <div class="j-right-banner">我的時間表</div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="j-event-middle-schedule">
        <div class="j-cate-banner">
          <div class="j-cate-banner-deco">
            <div>時間表</div>
          </div>
        </div>
        <div>
          <div class="j-event-schedule">
            <div class="j-big-lego">
              <div class="j-stages-card-1">
                <div class="j-stage-deco">
                  <span class="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span class="j-stage-name">
                    穢土
                    <br />
                    轉生
                  </span>
                  <span class="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div class="j-stages-card-2">
                <div class="j-stage-deco">
                  <span class="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span class="j-stage-name">
                    橘色
                    <br />
                    舞台
                  </span>
                  <span class="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div class="j-stages-card-3">
                <div class="j-stage-deco">
                  <span class="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span class="j-stage-name">
                    泰迪
                    <br />
                    托克
                  </span>
                  <span class="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div class="j-stages-card-4">
                <div class="j-stage-deco">
                  <span class="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span class="j-stage-name">
                    合法
                    <br />
                    幻舞
                  </span>
                  <span class="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div class="j-stages-card-5">
                <div class="j-stage-deco">
                  <span class="j-star-left">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                  <span class="j-stage-name">
                    看的
                    <br />
                    場所
                  </span>
                  <span class="j-star-right">
                    <img src={jStar} alt="" />
                    <img src={jStar} alt="" />
                  </span>
                </div>
              </div>
              <div class="j-list-dash-1"></div>
              <div class="j-list-dash-2"></div>
              <div class="j-list-dash-3"></div>
              <div class="j-list-dash-4"></div>
              <div class="j-list-dash-5"></div>
              <div class="j-list-dash-6"></div>
              <div class="j-list-dash-7"></div>
              <div class="j-list-dash-8"></div>
              <div class="j-list-dash-9"></div>
              <div class="j-cookA">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">12:00-13:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">
                    全食物利用 <br />
                    -水果酵釀-
                  </div>
                  <div class="schedule-card-hashtag">#穢土轉生#工作坊</div>
                </div>
              </div>
              <div class="j-cookB">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">14:00-15:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">
                    全食物利用 <br />
                    -水果酵釀-
                  </div>
                  <div class="schedule-card-hashtag">#穢土轉生#工作坊</div>
                </div>
              </div>
              <div class="j-cookC">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">16:00-17:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">
                    全食物利用 <br />
                    -柚酵釀-
                  </div>
                  <div class="schedule-card-hashtag">#穢土轉生#工作坊</div>
                </div>
              </div>
              <div class="j-cookD">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">18:00-19:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">
                    全食物利用 <br />
                    -特製莎莎醬-
                  </div>
                  <div class="schedule-card-hashtag">#穢土轉生#工作坊</div>
                </div>
              </div>
              <div class="j-musicA">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">13:00-14:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">泥灘地浪人</div>
                  <div class="schedule-card-hashtag">#橘色舞台#音樂演出</div>
                </div>
              </div>
              <div class="j-musicB">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">15:00-16:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">顏社煮場秀</div>
                  <div class="schedule-card-hashtag">#橘色舞台#音樂演出</div>
                </div>
              </div>
              <div class="j-musicC">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">17:00-18:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">Robot Swing</div>
                  <div class="schedule-card-hashtag">#橘色舞台#音樂演出</div>
                </div>
              </div>
              <div class="j-musicD">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <div class="schedule-card-time">19:00-20:00</div>
                    <div class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </div>
                  </div>
                  <div class="schedule-card-name">Toe</div>
                  <div class="schedule-card-hashtag">#橘色舞台#音樂演出</div>
                </div>
              </div>
              <div class="j-tedA">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">12:00-13:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">Means Database</div>
                  <span class="schedule-card-hashtag">#泰迪托克#講座</span>
                </div>
              </div>
              <div class="j-tedB">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">14:00-15:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">Miss Eco</div>
                  <span class="schedule-card-hashtag">#泰迪托克#講座</span>
                </div>
              </div>
              <div class="j-tedC">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">16:00-17:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">Taste Me</div>
                  <span class="schedule-card-hashtag">#泰迪托克#講座</span>
                </div>
              </div>
              <div class="j-tedD">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">18:00-19:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">SEIZEE</div>
                  <span class="schedule-card-hashtag">#泰迪托克#講座</span>
                </div>
              </div>
              <div class="j-cyberA">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">13:00-14:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">2022廚房漫遊</div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-cyberB">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">15:00-16:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">惜食超能100</div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-cyberC">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">17:00-18:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">快對醜蔬果出手</div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-cyberD">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">19:00-20:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">搶救萎吉大兵</div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-showA">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">12:00-13:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">
                    令人討厭的
                    <br />
                    醜食的一生
                  </div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-showB">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">14:00-15:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">
                    歡迎來到好浪費
                    <br />
                    現代社會
                  </div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-showC">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">16:00-17:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">醜蔬果特派週報</div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
              <div class="j-showD">
                <div class="schedule-card">
                  <div class="schedule-card-head">
                    <span class="schedule-card-time">18:00-19:00</span>
                    <span class="schedule-card-heart">
                      <img src={jHeart} alt="" />
                    </span>
                  </div>
                  <div class="schedule-card-name">高年級惜食生</div>
                  <span class="schedule-card-hashtag">#合法幻舞#VR體驗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
