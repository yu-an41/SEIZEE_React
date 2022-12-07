import axios from 'axios'
import log from 'eslint-plugin-react/lib/util/log'
import React, { useState } from 'react'

import '../styles/TabCook.scss'

function TabCook({
  likeInstructions,
  setLikeInstructions,
  spendServing,
  setSpendServing,
  spendTime,
  setSpendTime,
}) {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  const likeOptions = [
    '高麗菜',
    '蛤蜊',
    '香菇',
    '蝦子',
    '蛋',
    '魚',
    '豬肉',
    '雞肉',
    '蒜頭',
    '玉米',
  ]
  const servingOptions = ['1人份', '2人份', '3人份', '4人份', '5人份', '6人份']
  const spendTimeOptions = ['10分鐘', '20分鐘', '30分鐘', '60分鐘']
  return (
    <>
      <div className="p-TabContainer">
        <div className="p-bloc-tabs">
          <button
            className={toggleState === 1 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(1)}
          >
            想要的食材
          </button>
          <button
            className={toggleState === 2 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(2)}
          >
            份量
          </button>
          <button
            className={toggleState === 3 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(3)}
          >
            烹飪時間
          </button>
        </div>

        <div className="p-content-tabs">
          <div
            className={
              toggleState === 1 ? 'p-content  p-active-content' : 'p-content'
            }
          >
            <h4 className="p-option p-option-hate">
              {likeOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption  p-likeOption">
                    <input
                      type="checkbox"
                      value={v}
                      onChange={(e) => {
                        const likeValue = e.target.value
                        if (e.target.checked) {
                          // selected
                          if (!likeInstructions.includes(likeValue)) {
                            setLikeInstructions([
                              ...likeInstructions,
                              likeValue,
                            ])
                          }
                        } else {
                          //cancle
                          if (likeInstructions.includes(likeValue)) {
                            setLikeInstructions(
                              likeInstructions.filter((v) => v !== likeValue)
                            )
                          }
                        }
                      }}
                    />
                    <label>{v}</label>
                  </div>
                )
              })}
            </h4>
          </div>

          <div
            className={
              toggleState === 2 ? 'p-content  p-active-content' : 'p-content'
            }
          >
            <h4 className="p-option p-option-hate">
            
              {servingOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption p-toolsOption">
                    <input
                      type="checkbox"
                      value={v}
                      onChange={(e) => {
                        const servingValue = e.target.value
                        if (e.target.checked) {
                          // selected
                          if (!spendServing.includes(servingValue)) {
                            setSpendServing([...spendServing, servingValue])
                          }
                        } else {
                          //cancle
                          if (spendServing.includes(servingValue)) {
                            setSpendServing(
                              spendServing.filter((v) => v !== servingValue)
                            )
                          }
                        }
                      }}
                    />
                    <label>{v}</label>
                  </div>
                )
              })}
            </h4>
          </div>
          <div
            className={
              toggleState === 3 ? 'p-content  p-active-content' : 'p-content'
            }
          >
            <h4 className="p-option p-option-hate">
              {spendTimeOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption  p-timeOption">
                    <input
                      type="checkbox"
                      value={v}
                      onChange={(e) => {
                        const timeValue = e.target.value
                        if (e.target.checked) {
                          // selected
                          if (!spendTime.includes(timeValue)) {
                            setSpendTime([...spendTime, timeValue])
                          }
                        } else {
                          //cancle
                          if (spendTime.includes(timeValue)) {
                            setSpendTime(
                              spendTime.filter((v) => v !== timeValue)
                            )
                          }
                        }
                      }}
                    />
                    <label>{v}</label>
                  </div>
                )
              })}
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabCook
