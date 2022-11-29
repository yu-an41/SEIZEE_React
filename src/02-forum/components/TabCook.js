import log from 'eslint-plugin-react/lib/util/log'
import React, { useState } from 'react'

import '../styles/TabCook.scss'

function TabCook() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  const [hateInstructions, setHateInstructions] = useState([''])
  const [likeInstructions, setLikeInstructions] = useState([''])
  const [tools, setTools] = useState([''])
  const [spendTime, setSpendTime] = useState([''])

  const hateOptions = [
    '蛋',
    '香菜',
    '紅蘿蔔',
    '蝦子',
    '螃蟹',
    '魚',
    '香菇',
    '芹菜',
    '芋頭',
    '牛奶',
  ]
  const likeOptions = [
    '高麗菜',
    '牛肉',
    '香菇',
    '蝦子',
    '螃蟹',
    '魚',
    '豬肉',
    '雞肉',
    '巧克力',
    '牛奶',
  ]
  const toolsOptions = ['炒鍋', '電鍋', '平底鍋', '氣炸鍋', '微波爐', '烤箱']
  const spendTimeOptions = ['30分鐘內', '60分鐘內', '90分鐘內', '100分鐘以上']

  return (
    <>
      <div className="p-TabContainer">
        <div className="p-bloc-tabs">
          <button
            className={toggleState === 1 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(1)}
          >
            不要的食材
          </button>
          <button
            className={toggleState === 2 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(2)}
          >
            想要的食材
          </button>
          <button
            className={toggleState === 3 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(3)}
          >
            烹飪器具
          </button>
          <button
            className={toggleState === 4 ? 'p-tabs p-active-tabs' : 'p-tabs'}
            onClick={() => toggleTab(4)}
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
              {hateOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption  p-hateOption">
                    <input
                      type="checkbox"
                      checked={hateInstructions.includes(v)}
                      value={v}
                      onChange={(e) => {
                        const hateValue = e.target.value
                        if (hateInstructions.includes(hateValue)) {
                          const newHateInstru = hateInstructions.filter(
                            (hateV, hateI) => hateV !== hateValue
                          )
                          setHateInstructions(newHateInstru)
                        } else {
                          const newHateInstru = [...hateInstructions, hateValue]
                          setHateInstructions(newHateInstru)
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
              {likeOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption  p-likeOption">
                    <input
                      type="checkbox"
                      checked={likeInstructions.includes(v)}
                      value={v}
                      onChange={(e) => {
                        const likeValue = e.target.value
                        if (likeInstructions.includes(likeValue)) {
                          const newLikeInstru = likeInstructions.filter(
                            (likeV, likeI) => likeV !== likeValue
                          )
                          setLikeInstructions(newLikeInstru)
                        } else {
                          const newLikeInstru = [...likeInstructions, likeValue]
                          setLikeInstructions(newLikeInstru)
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
              {toolsOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption p-toolsOption">
                    <input
                      type="checkbox"
                      checked={tools.includes(v)}
                      value={v}
                      onChange={(e) => {
                        const toolsValue = e.target.value
                        if (tools.includes(toolsValue)) {
                          const newToolsInstru = tools.filter(
                            (toolsV, toolsI) => toolsV !== toolsValue
                          )
                          setTools(newToolsInstru)
                        } else {
                          const newToolsInstru = [...tools, toolsValue]
                          setTools(newToolsInstru)
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
              toggleState === 4 ? 'p-content  p-active-content' : 'p-content'
            }
          >
            <h4 className="p-option p-option-hate">
              {spendTimeOptions.map((v, i) => {
                return (
                  <div key={i} className="p-checkOption  p-timeOption">
                    <input
                      type="checkbox"
                      checked={spendTime.includes(v)}
                      value={v}
                      onChange={(e) => {
                        setSpendTime(e.target.value)
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
