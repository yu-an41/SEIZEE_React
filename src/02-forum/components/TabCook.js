import axios from 'axios'
import log from 'eslint-plugin-react/lib/util/log'
import React, { useState } from 'react'

import '../styles/TabCook.scss'

function TabCook({ likeInstructions, setLikeInstructions, setCookPostData }) {
  const [toggleState, setToggleState] = useState(1)
  // const searchInstru = URLSearchParams()
  const toggleTab = (index) => {
    setToggleState(index)
  }
  const [hateInstructions, setHateInstructions] = useState([''])

  const [tools, setTools] = useState([''])
  const [spendTime, setSpendTime] = useState([''])
  const searchParme = new URLSearchParams()
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
    '蛋',
    '魚',
    '豬肉',
    '雞肉',
    '巧克力',
    '牛奶',
  ]
  const servingOptions = ['1人份', '2人份', '3人份', '4人份', '5人份', '6人份']
  const spendTimeOptions = ['30分鐘', '60分鐘', '90分鐘', '100分鐘']
  const getChoos = async (choosInst) => {
    const { data } = await axios.get(
      `http://localhost:3002/forum/post_cook?${choosInst}`
    )
    console.log(data)
    setCookPostData(data.cookPostRows)
  }
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
                      // checked={likeInstructions.includes(v)}
                      value={v}
                      onChange={(e) => {
                        const likeValue = e.target.value
                        if (likeInstructions.includes(likeValue)) {
                          const newLikeInstru = likeInstructions.filter(
                            (likeV, likeI) => likeV !== likeValue
                          )
                          getChoos(newLikeInstru)
                          setLikeInstructions(newLikeInstru)
                        } else {
                          if (likeInstructions === '') {
                            searchParme.append('likes[]', likeValue)
                            const LikeString = searchParme.toString()
                            console.log(LikeString)
                            getChoos(LikeString)
                            setLikeInstructions(LikeString)
                          } else {
                            searchParme.append('likes[]', likeValue)
                            const LikeString = searchParme.toString()
                            const LikeStringParm =
                              likeInstructions + '&' + LikeString
                            console.log(LikeStringParm)
                            getChoos(LikeStringParm)
                            setLikeInstructions(LikeStringParm)
                          }

                          // const likes = cook.toString()
                          // const newLikeInstru = [...likeInstructions, likeValue]

                          // setLikeInstructions(newLikeInstru)
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
              {servingOptions.map((v, i) => {
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
