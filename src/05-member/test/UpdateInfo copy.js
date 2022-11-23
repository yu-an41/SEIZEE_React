import '.././style/profile-pages/UpdateInfo.scss'

import React, { useEffect, useRef, useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'

function UpdateInfo(props) {
  // -----讀取地址-----
  const [selectCity, setSelectCity] = useState('')
  const [selectArea, setSelectArea] = useState('')

  // -----檔案上傳-----
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const [preview, setPreview] = useState('')
  // server上的圖片網址
  const [imgServerUrl, setImgServerUrl] = useState('')
  // Trigger the clicking of the input element
  const hiddenFileInput = useRef(null)

  // =================================================

  // -----讀取地址-----

  // -----檔案上傳-----
  // 使用點擊image去呼叫input file 才可以開啟資料夾選擇照片
  // Add a click event handler to the Button element and input element
  const handleClick = (e) => {
    hiddenFileInput.current.click()
  }

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

  // Access to the uploaded file
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0]
    // props.handleFile(fileUploaded)

    if (fileUploaded) {
      setIsFilePicked(true)
      setSelectedFile(fileUploaded)
      setImgServerUrl('')
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
      setImgServerUrl('')
    }
  }

  const updateSubmit = () => {}

  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <UserProfileTmp />
          <div className="main-content">
            <div className="s-ui">
              <h2 className="s-ui-title">資料修改</h2>
              <form className="s-ui-card" action="" onSubmit={updateSubmit}>
                <div className="s-ui-imgBx">
                  <img
                    className="s-ui-img"
                    src={selectedFile ? preview : '/05-member/ghost.png'}
                    alt=""
                    onClick={handleClick}
                  />
                  <input
                    className="s-ui-img-input"
                    type="file"
                    style={{ display: 'none' }}
                    ref={hiddenFileInput}
                    onChange={handleChange}
                  />
                </div>
                <div className="s-ui-details">
                  <div className="s-ui-block1">
                    <div className="s-ui-block2">
                      <label className="s-ui-question">姓名: </label>
                      <div className="s-ui-answer">Sharon Yu</div>
                    </div>
                    <div className="s-ui-block2">
                      <label className="s-ui-question">電子郵件: </label>
                      <div className="s-ui-answer">yu5286pp@gmail.com</div>
                    </div>
                  </div>
                  <label className="s-ui-label">性別</label>

                  <div className="s-ui-radio1">
                    <input
                      type="radio"
                      name="fav_color"
                      value="男"
                      className="s-ui-radio2"
                    />
                    <span className="s-ui-man">男</span>
                    <br />
                    <input
                      type="radio"
                      name="fav_color"
                      value="女"
                      className="s-ui-radio2"
                    />
                    <span className="s-ui-man">女</span>
                  </div>

                  <label className="s-ui-label">預設地址</label>
                  <div className="s-ui-selectAddress">
                    <select name="" id="selectCity" className="s-ui-address">
                      <option value="" className="s-ui-addressDetail">
                        請選擇城市
                      </option>
                    </select>
                    <select name="" id="selectArea" className="s-ui-address">
                      <option value="" className="s-ui-addressDetail">
                        請選擇地區
                      </option>
                    </select>
                  </div>
                  <input
                    className="s-ui-input"
                    type="text"
                    placeholder="請輸入地址"
                  />
                  <label className="s-ui-label">聯絡電話</label>
                  <input
                    className="s-ui-input"
                    type="text"
                    placeholder="請輸入連絡電話"
                  />
                </div>
                <div className="s-ui-actionBtns">
                  <input
                    className="s-ui-actionBtn"
                    type="submit"
                    value="確認送出"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

// reference:
// 1. https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
// 2. https://chenhanting.medium.com/react-rails-%E5%8F%B0%E7%81%A3%E5%8D%80%E7%B8%A3%E5%B8%82-%E5%8D%80%E5%9F%9F%E7%9A%84%E4%B8%8B%E6%8B%89%E9%81%B8%E5%96%AE-ffe75285a443

export default UpdateInfo
