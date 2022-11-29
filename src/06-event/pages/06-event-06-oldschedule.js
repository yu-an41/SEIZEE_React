// import '../styles/06-event-03-schedule.scss'

// import jStar from '../svg/star.svg'
// import jHeart from '../svg/heart-none.svg'
// import Eventcard from '../components/06-event-comp-box'

// function Schedule() {
//   return (
//     <>
//       <div className="j-event-middle-schedule">
//         <div className="j-cate-banner">
//           <div className="j-cate-banner-deco">
//             <div>時間表</div>
//           </div>
//         </div>
//         <div>
//           <div className="j-event-schedule">
//             <div className="j-big-lego">
//               <div className="j-stages-card-1">
//                 <div className="j-stage-deco">
//                   <span className="j-star-left">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                   <span className="j-stage-name">
//                     穢土
//                     <br />
//                     轉生
//                   </span>
//                   <span className="j-star-right">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                 </div>
//               </div>
//               <div className="j-stages-card-2">
//                 <div className="j-stage-deco">
//                   <span className="j-star-left">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                   <span className="j-stage-name">
//                     橘色
//                     <br />
//                     舞台
//                   </span>
//                   <span className="j-star-right">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                 </div>
//               </div>
//               <div className="j-stages-card-3">
//                 <div className="j-stage-deco">
//                   <span className="j-star-left">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                   <span className="j-stage-name">
//                     泰迪
//                     <br />
//                     托克
//                   </span>
//                   <span className="j-star-right">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                 </div>
//               </div>
//               <div className="j-stages-card-4">
//                 <div className="j-stage-deco">
//                   <span className="j-star-left">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                   <span className="j-stage-name">
//                     合法
//                     <br />
//                     幻舞
//                   </span>
//                   <span className="j-star-right">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                 </div>
//               </div>
//               <div className="j-stages-card-5">
//                 <div className="j-stage-deco">
//                   <span className="j-star-left">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                   <span className="j-stage-name">
//                     看的
//                     <br />
//                     場所
//                   </span>
//                   <span className="j-star-right">
//                     <img src={jStar} alt="" />
//                     <img src={jStar} alt="" />
//                   </span>
//                 </div>
//               </div>
//               <div className="j-list-dash-1"></div>
//               <div className="j-list-dash-2"></div>
//               <div className="j-list-dash-3"></div>
//               <div className="j-list-dash-4"></div>
//               <div className="j-list-dash-5"></div>
//               <div className="j-list-dash-6"></div>
//               <div className="j-list-dash-7"></div>
//               <div className="j-list-dash-8"></div>
//               <div className="j-list-dash-9"></div>
//               <div className="j-cookA">
//                 {/* <Eventcard
//                   data={{
//                     time: '12:00-13:00',
//                     txt1: '全食物利用',
//                     txt2: '-水果酵釀-',
//                     tags: '#穢土轉生#工作坊',
//                   }}
//                 /> */}
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">12:00-13:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">
//                     全食物利用 <br />
//                     -水果酵釀-
//                   </div>
//                   <div className="j-schedule-card-hashtag">#穢土轉生#工作坊</div>
//                 </div>
//               </div>
//               <div className="j-cookB">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">14:00-15:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">
//                     全食物利用 <br />
//                     -花酵釀-
//                   </div>
//                   <div className="j-schedule-card-hashtag">#穢土轉生#工作坊</div>
//                 </div>
//               </div>
//               <div className="j-cookC">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">16:00-17:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">
//                     全食物利用 <br />
//                     -柚酵釀-
//                   </div>
//                   <div className="j-schedule-card-hashtag">#穢土轉生#工作坊</div>
//                 </div>
//               </div>
//               <div className="j-cookD">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">18:00-19:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">
//                     全食物利用 <br />
//                     -特製莎莎醬-
//                   </div>
//                   <div className="j-schedule-card-hashtag">#穢土轉生#工作坊</div>
//                 </div>
//               </div>
//               <div className="j-musicA">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">13:00-14:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">泥灘地浪人</div>
//                   <div className="j-schedule-card-hashtag">#橘色舞台#音樂演出</div>
//                 </div>
//               </div>
//               <div className="j-musicB">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">15:00-16:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">顏社煮場秀</div>
//                   <div className="j-schedule-card-hashtag">#橘色舞台#音樂演出</div>
//                 </div>
//               </div>
//               <div className="j-musicC">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">17:00-18:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">Robot Swing</div>
//                   <div className="j-schedule-card-hashtag">#橘色舞台#音樂演出</div>
//                 </div>
//               </div>
//               <div className="j-musicD">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <div className="j-schedule-card-time">19:00-20:00</div>
//                     <div className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </div>
//                   </div>
//                   <div className="j-schedule-card-name">Toe</div>
//                   <div className="j-schedule-card-hashtag">#橘色舞台#音樂演出</div>
//                 </div>
//               </div>
//               <div className="j-tedA">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">12:00-13:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">Means Database</div>
//                   <span className="j-schedule-card-hashtag">#泰迪托克#講座</span>
//                 </div>
//               </div>
//               <div className="j-tedB">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">14:00-15:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">Miss Eco</div>
//                   <span className="j-schedule-card-hashtag">#泰迪托克#講座</span>
//                 </div>
//               </div>
//               <div className="j-tedC">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">16:00-17:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">Tasteme</div>
//                   <span className="j-schedule-card-hashtag">#泰迪托克#講座</span>
//                 </div>
//               </div>
//               <div className="j-tedD">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">18:00-19:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">SEIZEE</div>
//                   <span className="j-schedule-card-hashtag">#泰迪托克#講座</span>
//                 </div>
//               </div>
//               <div className="j-cyberA">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">13:00-14:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">2022廚房漫遊</div>
//                   <span className="j-schedule-card-hashtag">#合法幻舞#VR體驗</span>
//                 </div>
//               </div>
//               <div className="j-cyberB">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">15:00-16:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">惜食超能100</div>
//                   <span className="j-schedule-card-hashtag">#合法幻舞#VR體驗</span>
//                 </div>
//               </div>
//               <div className="j-cyberC">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">17:00-18:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">快對醜蔬果出手</div>
//                   <span className="j-schedule-card-hashtag">#合法幻舞#VR體驗</span>
//                 </div>
//               </div>
//               <div className="j-cyberD">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">19:00-20:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">搶救萎吉大兵</div>
//                   <span className="j-schedule-card-hashtag">#合法幻舞#VR體驗</span>
//                 </div>
//               </div>
//               <div className="j-showA">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">12:00-13:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">
//                     令人討厭的
//                     <br />
//                     醜食的一生
//                   </div>
//                   <span className="j-schedule-card-hashtag">#看的場所#劇場</span>
//                 </div>
//               </div>
//               <div className="j-showB">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">14:00-15:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">
//                     歡迎來到好浪費
//                     <br />
//                     現代社會
//                   </div>
//                   <span className="j-schedule-card-hashtag">#看的場所#劇場</span>
//                 </div>
//               </div>
//               <div className="j-showC">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">16:00-17:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">醜蔬果特派週報</div>
//                   <span className="j-schedule-card-hashtag">#看的場所#劇場</span>
//                 </div>
//               </div>
//               <div className="j-showD">
//                 <div className="j-schedule-card">
//                   <div className="j-schedule-card-head">
//                     <span className="j-schedule-card-time">18:00-19:00</span>
//                     <span className="j-schedule-card-heart">
//                       <img src={jHeart} alt="" />
//                     </span>
//                   </div>
//                   <div className="j-schedule-card-name">高年級惜食生</div>
//                   <span className="j-schedule-card-hashtag">#看的場所#劇場</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Schedule
