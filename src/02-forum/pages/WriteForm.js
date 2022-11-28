import React, { useState, useEffect } from 'react'
import { Form } from 'react-router-dom'
import '../styles/WriteForm.scss'

function WriteForm() {
  const [writDate, setWritDate] = useState({
    title: '',
    image: '',
    content: '',
    time: '',
    serving: '',
    instrucContent: '',
    portion: '',

    stepImg: '',
    stepContent: '',
    ps: '',
  })
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const [preview, setPreview] = useState('')
  // server上的圖片網址
  const [imgServerUrl, setImgServerUrl] = useState('')

  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    console.log(objectUrl)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const changeHandler = (e) => {
    const file = e.target.files[0]

    if (file) {
      setIsFilePicked(true)
      setSelectedFile(file)
      setImgServerUrl('')
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
      setImgServerUrl('')
    }
  }

  const handleSubmission = () => {
    const formData = new FormData()

    // 對照server上的檔案名稱 req.files.avatar
    formData.append('avatar', selectedFile)

    fetch(
      'http://localhost:3002/forum/post_cook', //server url
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result)
        setImgServerUrl('http://localhost:3002/uploads/' + result.data.name)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <div className="p-writeForm">
        <form onChange={changeHandler}>
          <label className="p-writeTitleLab">
            <h3>標題</h3>
            <input
              className="p-writeTitle"
              type="text"
              name="username"
              placeholder="填入食譜標題"
              value={writDate.title}
              onChange={changeHandler}
              required
            />
          </label>
          <label className="p-writeImageLab">
            <h3>圖片</h3>

            <div className="p-writImgBtn">
              {selectedFile && (
                <div className="p-imgPreview">
                  <img src={preview} alt="" />
                </div>
              )}
              <input
                className="p-writeImage"
                type="file"
                name="contentImage"
                value={writDate.image}
                onChange={changeHandler}
                required
              />
              <p>上傳圖片</p>
            </div>
          </label>
          <label className="p-writeContentLab">
            <h3>簡介</h3>
            <textarea
              className="p-writeContent"
              type="text"
              name="content"
              value={writDate.content}
              onChange={changeHandler}
              required
            />
          </label>
          <div className="p-timeAdServing">
            <label className="p-writeTime">
              <h3>製作時間</h3>
              <input
                // className="p-writeTime"
                type="text"
                name="time"
                value={writDate.time}
                onChange={changeHandler}
                required
              />
            </label>
            <label className="p-writeServing">
              <h3>份量（人）</h3>
              <input
                // className="p-writeServing"
                type="text"
                name="serving"
                value={writDate.serving}
                onChange={changeHandler}
                required
              />
            </label>
          </div>

          <div className="p-instrucAdPortion">
            <h3>食材</h3>
            <div className="p-instruLabWrap">
              <label className="p-instrucContent">
                <input
                  type="text"
                  name="instrucContent"
                  value={writDate.instrucContent}
                  onChange={''}
                  required
                />
              </label>
              <label className="p-portion">
                <input
                  type="text"
                  name="portion"
                  value={writDate.portion}
                  onChange={changeHandler}
                  required
                />
              </label>
            </div>
            <div className="p-instruLabWrap">
              <label className="p-instrucContent">
                <input
                  type="text"
                  name="instrucContent"
                  value={writDate.instrucContent}
                  onChange={''}
                  required
                />
              </label>
              <label className="p-portion">
                <input
                  type="text"
                  name="portion"
                  value={writDate.portion}
                  onChange={changeHandler}
                  required
                />
              </label>
            </div>
            <button className="p-addInstru" type="button">
              <p>加食材</p>
            </button>
          </div>

          <div className="p-writeStep">
            <h3>步驟</h3>
            <div className="p-stepLabWrap p-stepLabWrap-1">
              <label
                className="p-stepImg"
                placeholder="點擊上傳圖片大小480x260px"
              >
                {selectedFile && (
                  <div className="p-stepimgPreview">
                    <img src={preview} alt="" />
                  </div>
                )}
                <input type="file" />
                <p>點擊上傳圖片大小480x260px</p>
              </label>
              <label className="p-stepNum">
                <h3>STEP1</h3>
                <input
                  className="p-stepContent"
                  placeholder="步驟說明（最多150字）"
                ></input>
              </label>
            </div>
            <div className="p-stepLabWrap p-stepLabWrap-2">
              <label
                className="p-stepImg"
                placeholder="點擊上傳圖片大小480x260px"
              >
                {selectedFile && (
                  <div className="p-stepimgPreview">
                    <img src={preview} alt="" />
                  </div>
                )}
                <input type="file" />
              </label>
              <label className="p-stepNum">
                <h3>STEP2</h3>
                <input
                  className="p-stepContent"
                  placeholder="步驟說明（最多150字）"
                ></input>
              </label>
            </div>
            <button className="p-addStep" type="button">
              <p>加步驟</p>
            </button>
          </div>
          <label className="p-writePS">
            <h3>補充</h3>
            <input
              className="p-writePSContent"
              placeholder="其他補充說明（最多200字）"
            ></input>
          </label>
          <button className="p-sendWritData" onClick={handleSubmission}>
            送出
          </button>
        </form>

        <button
          className="p-writeData"
          type="button"
          onClick={() => {
            setWritDate({
              title: '蕃茄菇菇雞肉飯',
              content:
                '醃魚炸魚就一鍋直接來，紅新娘肉質細膩無腥味，炸起來真的很好吃，只需要用濕粉醃漬，油炸時直接就著醃魚的粉漿下鍋，外酥內嫩啊！！也歡迎到女漢子的臉書專頁逛逛喔～',
              time: '20分鐘',
            })
          }}
        >
          填入範例資料
        </button>
      </div>
    </>
  )
}

export default WriteForm
