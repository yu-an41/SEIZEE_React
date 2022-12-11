import axios from 'axios'
import log from 'eslint-plugin-react/lib/util/log'
import strb from '../p-imgs/food/strawberry.png'
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  useContext,
} from 'react'
import { Form, useNavigate } from 'react-router-dom'
import ModalNotification from '../../components/ModalNotification'
import AuthContext from './../../contexts/AuthContext'
import '../styles/WriteForm.scss'

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import ImageItemPreview from './ImageItemPreview'

function WriteForm({ mbsid }) {
  // const [doRerender, setDoRerender] = useState(false)
  const { myAuth } = useContext(AuthContext)
  const [image, setImage] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [headerMs, setHeaderMs] = useState('')
  const [bodyMs, setBodyMs] = useState('')
  const [stepImages, setStepImages] = useState([])
  console.log({ myAuth, mbsid })
  const [writData, setWritData] = useState({
    sid: 1,
    member_sid: myAuth.mb_sid,
    categories_sid: 4,
    title: '',
    hashtag: [
      {
        categories_sid: 4,
        post_sid: 1,
        tagContent: '',
      },
    ],
    img: '',
    induction: '',
    times: '',
    serving: '',
    instructions: [
      {
        sid: '',
        instrucContent: '',
        portion: '',
      },
      {
        sid: '',
        instrucContent: '',
        portion: '',
      },
    ],
    steps: [
      {
        cooking_post_sid: '',
        step: '',
        stepImg: '',
        stepContent: '',
      },
      {
        cooking_post_sid: '',
        step: '',
        stepImg: '',
        stepContent: '',
      },
    ],
    ps: '',
  })
  console.log({ writData })
  const addFormData = async () => {
    console.log('stepImages')
    console.log(stepImages)
    const fileFormData = new FormData()
    fileFormData.append('file', image)
    const resp = await axios.post(
      'http://localhost:3004/forum/upload',
      fileFormData
    )
    const imageNewFileName = resp.data.newFileName
    const stepFileNames = await Promise.all(
      stepImages.map(async (i) => {
        const stepFilefd = new FormData()
        stepFilefd.append('file', i)
        const stepResp = await axios.post(
          'http://localhost:3004/forum/upload',
          stepFilefd
        )
        console.log(`stepResp.data.newFileName`)
        console.log(stepResp.data.newFileName)
        return stepResp.data.newFileName
      })
    )
    writData.img = imageNewFileName
    for (let i = 0; i < stepFileNames.length; i++) {
      writData.steps[i].stepImg = stepFileNames[i]
    }
    console.log('writDate')
    console.log(writData)

    const wfData = await axios.post(
      'http://localhost:3004/forum/writeForm',
      writData
    )
    if (wfData.data.success) {
      // alert('發文成功')
      console.log('success')
      setIsOpen(true)
      setHeaderMs('食譜發文狀態')
      setBodyMs('成功發文')
      //直接顯示留言無用重刷頁面
      // setDoRerender(!doRerender)
    }
  }
  //圖片預覽
  const [previewConImg, setPreviewConImg] = useState('')
  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!image) {
      setPreviewConImg('')
      return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreviewConImg(objectUrl)
    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])

  const [instrucNums, setInstrucNums] = useState(2)
  const [stepNums, setStepNums] = useState(2)

  const navigate = useNavigate()
  const closeModal = () => {
    setIsOpen(false)
    navigate('/forum/cook')
  }
  return (
    <>
      <div className="p-navBar">
        <NavBar />
      </div>
      <div className="p-writeForm">
        <form>
          <label className="p-writeTitleLab">
            <h3>標題</h3>
            <input
              className="p-writeTitle"
              type="text"
              name="username"
              placeholder="填入食譜標題"
              value={writData.title}
              onChange={(e) =>
                setWritData({ ...writData, title: e.target.value })
              }
              required
            />
          </label>
          {/* <label className="p-WriteTagWrap">
            <input
              className="p-wTag p-wTag-1"
              placeholder="輸入標籤"
              name="hashtag1"
              value={writData.hashtag[0].tagContent}
            ></input>
            <input
              className="p-wTag p-wTag-2"
              placeholder="輸入標籤"
              name="hashtag2"
            ></input>
            <input
              className="p-wTag p-wTag-3"
              placeholder="輸入標籤"
              name="hashtag3"
            ></input>
          </label> */}
          <label className="p-writeImageLab">
            <h3>圖片</h3>

            <div className="p-writImgBtn">
              {image && (
                <div className="p-imgPreview">
                  <img src={previewConImg} alt="" />
                </div>
              )}
              <input
                className="p-writeImage"
                type="file"
                name="contentImage"
                value={writData.image}
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <p>
                點擊上傳圖片 大小：1040x520 內容以食物為主
                （請勿上傳人像或動物）
              </p>
            </div>
          </label>
          <label className="p-writeContentLab">
            <h3>簡介</h3>
            <textarea
              className="p-writeContent"
              type="text"
              name="induction"
              placeholder="輸入食譜描述（最多150字）"
              value={writData.induction}
              onChange={(e) =>
                setWritData({ ...writData, induction: e.target.value })
              }
              required
            />
          </label>
          <div className="p-timeAdServing">
            <label className="p-writeTime">
              <h3>製作時間</h3>
              <input
                // className="p-writeTime"
                type="text"
                name="times"
                placeholder="例:90分鐘"
                value={writData.times}
                onChange={(e) =>
                  setWritData({ ...writData, times: e.target.value })
                }
                required
              />
            </label>
            <label className="p-writeServing">
              <h3>份量（人）</h3>
              <input
                // className="p-writeServing"
                type="text"
                name="serving"
                placeholder="例:2 人份"
                value={writData.serving}
                onChange={(e) =>
                  setWritData({ ...writData, serving: e.target.value })
                }
                required
              />
            </label>
          </div>

          <div className="p-instrucAdPortion">
            <h3>食材</h3>
            {Array(instrucNums)
              .fill(1)
              .map((v, i) => {
                return (
                  <div className="p-instruLabWrap" key={i}>
                    {writData && (
                      <label className="p-instrucContent">
                        <input
                          type="text"
                          name="instrucContent"
                          value={writData.instructions[i].instrucContent}
                          onChange={(e) => {
                            const inst = writData.instructions
                            inst[i] = {
                              ...inst[i],
                              instrucContent: e.target.value,
                            }
                            setWritData({
                              ...writData,
                              instructions: inst,
                            })
                          }}
                          required
                          placeholder="食材（最多１5字）"
                        />
                      </label>
                    )}
                    <label className="p-portion">
                      <input
                        type="text"
                        name="portion"
                        placeholder="食材份量"
                        value={writData.instructions[i].portion}
                        onChange={(e) => {
                          const portion = writData.instructions
                          portion[i] = {
                            ...portion[i],
                            portion: e.target.value,
                          }
                          setWritData({ ...writData, instructions: portion })
                        }}
                        required
                      />
                    </label>
                  </div>
                )
              })}
            <div className="p-InstBtnWrap">
              <button
                className="p-addInstru"
                type="button"
                onClick={() => {
                  writData.instructions.push({
                    sid: '',
                    instrucContent: '',
                    portion: '',
                  })
                  setInstrucNums(instrucNums + 1)
                }}
              >
                <p>加食材</p>
              </button>
              <button
                className="p-delInstru"
                type="button"
                onClick={() => {
                  if (instrucNums > 1) setInstrucNums(instrucNums - 1)
                }}
              >
                <p>減食材</p>
              </button>
            </div>
          </div>

          <div className="p-writeStep">
            <h3>步驟</h3>
            {Array(stepNums)
              .fill(1)
              .map((v, i) => {
                return (
                  <div className="p-stepLabWrap" key={i}>
                    <label
                      className="p-stepImg"
                      placeholder="點擊上傳圖片大小480x260px"
                    >
                      {stepImages && (
                        <div className="p-stepimgPreview">
                          <ImageItemPreview
                            index={i}
                            setStepImages={setStepImages}
                            stepImages={stepImages}
                          />
                        </div>
                      )}
                      {/* <input
                        type="file"
                        name="stepImg"
                        value={writData.steps.stepImg}
                        onChange={(e) => {
                          console.log('p-stepimgPreview')
                          const tempStepImages = stepImages
                          console.log('tempStepImages')
                          console.log(tempStepImages)
                          tempStepImages[i] = e.target.files[0]
                          setStepImages(tempStepImages)
                        }}
                      /> */}
                      <p>點擊上傳圖片大小480x260px</p>
                    </label>
                    <label className="p-stepNum">
                      <h3>STEP{i + 1}</h3>
                      <input
                        className="p-stepContent"
                        placeholder="步驟說明（最多150字）"
                        name="steps.stepContent"
                        value={writData.steps[i].stepContent}
                        onChange={(e) => {
                          const steps = writData.steps
                          steps[i] = {
                            ...steps[i],
                            stepContent: e.target.value,
                          }
                          setWritData({ ...writData, steps: steps })
                        }}
                        required
                      ></input>
                    </label>
                  </div>
                )
              })}
            <div className="p-stepBtnWrap">
              <button
                className="p-addStep"
                type="button"
                onClick={() => {
                  writData.steps.push({
                    cooking_post_sid: '',
                    step: '',
                    stepImg: '',
                    stepContent: '',
                  })
                  if (stepNums > 1) setStepNums(stepNums + 1)
                }}
              >
                <p>加步驟</p>
              </button>
              <button
                className="p-delStep"
                type="button"
                onClick={() => {
                  if (stepNums > 1) setStepNums(stepNums - 1)
                }}
              >
                <p>減步驟</p>
              </button>
            </div>
          </div>
          <label className="p-writePS">
            <h3>補充</h3>
            <input
              className="p-writePSContent"
              placeholder="其他補充說明（最多200字）"
              name="ps"
              value={writData.ps}
              onChange={(e) => setWritData({ ...writData, ps: e.target.value })}
            ></input>
          </label>
          <button
            className="p-sendWritData"
            onClick={addFormData}
            type="button"
          >
            送出
          </button>
        </form>

        <button
          className="p-writeData"
          type="button"
          onClick={() => {
            console.log('帶入123')
            setWritData({
              ...writData,
              title: '蕃茄菇菇雞肉飯',
              induction:
                '菇菇控最愛的香菇、杏鮑菇、蘑菇，三菇一體加上雞腿肉的多汁鮮甜蕃茄入菜帶出酸甜感，最後撒上烹大師鰹魚風味，獨到的煙燻香氣讓料理美味無可挑剔!',
              times: '20分鐘',
              serving: '2人份',
              instructions: [
                {
                  sid: '',
                  instrucContent: '番茄',
                  portion: '2顆',
                },
                {
                  sid: '',
                  instrucContent: '雞肉',
                  portion: '500g',
                },
              ],
              steps: [
                {
                  cooking_post_sid: '',
                  step: '1',
                  stepImg: '',
                  stepContent:
                    '雞腿肉先用醬油、胡椒粉、糖抓醃。白米洗乾淨瀝乾。',
                },
                {
                  cooking_post_sid: '',
                  step: '2',
                  stepImg: '',
                  stepContent:
                    '將洗好的白米放入內鍋，加入水、米酒、菇類、洋蔥、雞肉、小番茄、花椰菜，拌均勻，開始煮飯。',
                },
              ],
              ps: '食材稍微炒過後，香氣滋味會更好。',
            })
          }}
        >
          <img src={strb} />
        </button>
      </div>

      <div className="p-footer">
        <Footer />
      </div>
      <ModalNotification
        isOpen={isOpen}
        NotificationHeader={headerMs}
        NotificationBody={bodyMs}
        closeModal={closeModal}
      />
    </>
  )
}
export default WriteForm
