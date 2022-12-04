import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Step.scss'
function Step() {
  const { sid } = useParams()
  const [step, setStep] = useState([
    {
      sid: '',
      cooking_post_sid: '',
      stepImg: '',
      img: '',
      content: '',
    },
  ])
  console.log(step.stepImg);
  const getStep = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/forum/step`)
      console.log(res.data.stepRows)
      setStep(res.data.stepRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getStep()
  }, [])

  return (
    <>
      {step.map((v, i) => {
        const { sid, cooking_post_sid, step, stepImg, content } = v

        return (
          <div className="p-step">
            <div className="p-stepImg">
              <img
                src={`http://localhost:3004/images/02-forum/cook/${stepImg}`}
                alt=""
              />
            </div>
            <div className="p-stepContent">
              <h3>STEP{step}</h3>
              <h4>{content}</h4>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Step
